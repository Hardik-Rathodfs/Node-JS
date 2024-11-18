const express=require("express");
const connect = require("./config/server");
const bookModel = require("./model/bookSchema");
const app =express()

app.set('view engine','ejs')
app.use(express.urlencoded ({extended:true}))
app.use(express.static('public'))

app.get("/addbook",(req,res)=>{
   res.render("BookForm.ejs") 
})

app.post("/addbook",async(req,res)=>{
   await bookModel.create(req.body)
   res.redirect("/")
})

app.get("/",async(req,res)=>{
    let Books=await bookModel.find()
    res.render("index.ejs",{Books:Books})
})

app.get("/deleteBook/:id",async(req,res)=>{
  let {id}=req.params
  await bookModel.findByIdAndDelete(id)
  res.redirect("/")
})

app.get("/edit/:id",async(req,res)=>{
  const {id}=req.params
  const Books=await bookModel.findOne({_id:id})
  res.render("editForm.ejs", {Books})
})

app.post("/edit/:id",async(req,res)=>{
  const{id}=req.params
  await bookModel.findByIdAndUpdate(id,req.body)
  res.redirect("/")
})



app.listen(8080,()=>{
    connect()
    console.log("Serve is running on 8080");
    
})