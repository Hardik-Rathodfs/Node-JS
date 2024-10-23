
const express = require("express")

let app = express()

app.get("/",(req,res)=>{
res.render("index.html")
})

app.listen(9000,()=>{
    console.log("Server is running on 9000");
    
})
