const mongoose=require('mongoose')

const connect = async()=>{
    await mongoose.connect('mongodb+srv://hardik:rathod@cluster0.nnqkh.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0')
    console.log('database conncetd susscessfully')
 }

module.exports=connect