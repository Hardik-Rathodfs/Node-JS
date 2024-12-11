const mongoose = require("mongoose")

const connect = async()=>{
    await mongoose.connect("mongodb+srv://hardik:rathod@cluster0.nnqkh.mongodb.net/User?retryWrites=true&w=majority&appName=Cluster0")
    console.log('database connected');
    
}

module.exports=connect
