const express = require ('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require ("../../config/keys.js")

// Load input validation
const validateRegisterInput = require ("../../validation/register.js");
const validateLoginInput = require ("../../validation/login.js");


//Load User Model
const User = require ('../../models/user.js')

//@route Get api/users
//@desc Get All Users
//@acces Public

router.get('/',( req,res) => 
res.send('welcome')
);

//@route post api/users
//@desc create a user
//@acces Public
router.post('/register',(req,res)=> {
   
    //Form validation 

    const {errors, isValid} = validateRegisterInput(req.body);

    //Check validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email:req.body.email}).then(user => {
        if(user){
            return res.status(400).json ({email: "Email already exists"});
        }else {
            const NewUser = new User ({
                userName: req.body.userName,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                password : req.body.password
            })

            //Hash password before saving in database

            bcrypt.genSalt(10, (err,salt)=> {
                bcrypt.hash(newUser.password, salt, (err,hash)=>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user=>res.json(user))
                        .catch(err=>Console.log(err));
                });
            });
        }
    });
});

//@route post api/users/login
//@desc Login user and return JWT token
//@acces Public
 
router.post("/login", (req,res)=>{
    //Form validation



    const {errors, isValid} = validateLoginInput(req.body);

// Check validation 
if(!isValid){
    return res.status(400).json(errors);

}

const userName =req.body.userName;
const email = req.body.email;
const password = req.body.password;

//Find user by email
User.findOne({ email}).then(user=>{
    //Check if user exists
    if(!user){
        return res.status(404).json({ emailnotfound: "Email not found"});
    }

    //Check password 

    bcrypt.compare(password, user.password).then(isMatch=>{
        if(isMatch){
            //User matched
            //Create JWT Payload
            const payload ={
                id: user.id,
                userName: user.userName

            }
    //Sign token 
            jwt.sign(payload,
                key.secretOrKey,{
                    expiresIn: 31556926 //1 year in seconds
                },
                (err,token) =>{
                    res.json({
                        succes :true,
                        token:"Bearer" +token
                    })
                }
                )
        }else {
            return res
            .status(400)
            .json({passwordincorrect:"Password incorrect"});
        }
    })
})
})

//@route delete api/items
//@desc delete a item
//@acces Public
router.delete('/:id',(req,res)=> {
    Item.findById(req.params.id)
    .then(item=>item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:true}))
})


module.exports = router;