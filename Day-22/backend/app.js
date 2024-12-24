const express = require('express')
const connect = require("./Config/db")
const cors = require('cors')
require('dotenv').config()


const app=express()
app.use(express.json())
app.use(cors())



app.listen(process.env.port,()=>{
    connect()
    console.log(`Server Running at ${process.env.port}`);
    
})
