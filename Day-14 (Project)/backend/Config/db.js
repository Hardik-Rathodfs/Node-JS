const mongoose = require("mongoose")

const connect = async()=>{
    await mongoose.connect("mongodb+srv://hardik:rathod@cluster0.nnqkh.mongodb.net/MovieData?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database Connected");
    
}

module.exports=connect;