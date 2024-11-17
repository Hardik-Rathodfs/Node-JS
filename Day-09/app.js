const express =require("express")
const app =express()
const connect=require("./config/server")
const StudentModel= require("./config/classSchema")

app.use(express.json())

app.post('/adddata',async(req,res)=>{
    await StudentModel.create(req.body)
    res.send("User registerd Sucessfully")
})

app.get("/alldata",async(req,res)=>{
    let data=await StudentModel.find()
    res.send(data)
})

app.listen(8080,()=>{
    connect()
    console.log("server is ruuning on 8080");
})

