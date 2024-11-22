const mogoose=require("mongoose")

const bookSchema=mongoose.Schema({
    name:String,
    author:String,
    image:String
})

const BookModel = mogoose.model("book",bookSchema)

module.exports=BookModel