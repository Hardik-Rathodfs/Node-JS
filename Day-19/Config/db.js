const mogoose = require("mongoose")

const conncetion = async()=>{
    await mongoose.connection("mongodb+srv://hardik:rathod@cluster0.nnqkh.mongodb.net/User?retryWrites=true&w=majority&appName=Cluster0")
    console.log('database connected');
    
}

module.exports=conncetion
