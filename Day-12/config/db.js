const mongoose = require("mongoose")

const connect=()=>{
    mongoose.connect("mongodb://localhost:27017/Multer")
    console.log("DB Connected..!!");
    
}

module.exports=connect