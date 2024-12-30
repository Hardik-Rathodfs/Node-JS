const express = require('express')
const cors=require('cors')
const UserRouter = require('./Routes/UserRoutes')
const connect = require('./config/db')
require('dotenv').config()

const app=express()
app.use(express.json())
app.use(cors())

app.use('/',UserRouter)


app.listen(process.env.port,()=>{
  connect()
  console.log(`server running at ${process.env.port}`);
  
})