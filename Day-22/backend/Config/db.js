const mongoose = require("mongoose")
require('dotenv').config()
const connect=()=>{
    mongoose.connect(process.env.mongourl)
    console.log("DB Connected sucessfully");
    
}

module.exports=connect