
const mongooose = require("mongoose");

const UserSchema = mongooose.Schema({
    username : {type : String, require : true},
    email : {type : String,require : true,unique : true},
    password : {type : String, require : true}
})

 const UserModel = mongooose.model("users", UserSchema);


 module.exports = UserModel