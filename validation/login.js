const Validator = require ("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data){
    let errors = {};

    //Convert empty fields toan empty string so we can use validator functions
   data.userName = !isEmpty(data.userName) ? data.userName :"";
   data.email = !isEmpty(data.email ) ? data.email :"";
   data.password= !isEmpty(data.password) ? data.password :"";



//userName checks
if(Validator.isEmpty(data.userName)){
    errors.userName = "Username field is required";
}else if(!Validator.isEmpty(data.userName)){
    errors.userName = " Username invalid";
}

//Email checks
if(Validator.isEmpty(data.email)){
    errors.email = "Email field is required"
}else if(!Validator.isEmpty(data.email)){
    errors.email = "Email invalid";

}

//Password checks
if(Validator.isEmpty(data.password)){
    errors.email = "Password field is required"
}

return {
    errors,
    isValid: isEmpty(errors)
};      
    

};
