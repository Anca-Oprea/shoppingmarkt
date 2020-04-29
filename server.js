const express = require ('express');

const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const passport = require("passport");

const users = require("./routes/api/users.js");

const app = express();




//Bodyparser Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//DB configuration
const db = require('./config/keys.js').mongoURI;
//Connect to mongodb
mongoose
    .connect(db,
        { useNewUrlParser: true,
        useUnifiedTopology: true 
            
         
        } )
    .then(()=> console.log('MongoDb connected...'))
    .catch(err => console.log(err));

    //Passport middleware

app.use(passport.initialize());


//Passport config
require("./config/passport.js")(passport);

//Routes
app.use("/routes/api/users",users);


   
const port = process.env.Port || 5000;   

app.listen(port,()=>console.log(`Server started on Port ${port}`));

       
    
