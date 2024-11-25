const express=require("express")
const multer=require("multer")
const path=require("path")
const fs=require("fs")
const exp = require("constants")
const BookModel = require("../model/bookSchema")

const BookRouter = express.Router()

const s =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,"../public/assets"))
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)

    }
})

const Data=multer({storage:s})


BookRouter.get("/",(req,res)=>{
    res.render("index.ejs")
})

BookRouter.post("/addBook",Data.single("image",addBook))

BookRouter.get("/books",async(req,res)=>{
    let data=await BookModel.find()
    res.render("allBooks.ejs",{data})
})



module.exports=BookRouter