const mongoose=require("mongoose")
const bookSchema=mongoose.Schema({
    bookname:String,
    desc:String,
    author:String,
    img:String,
    price:Number
})

const bookModel = mongoose.model("book",bookSchema) 

module.exports=bookModel