const mongoose=require("mongoose")

const connect=async()=>{
    await mongoose.connect("mongodb://localhost:27017/bookstore")
    console.log("database is connected");
    
}

module.exports=connect