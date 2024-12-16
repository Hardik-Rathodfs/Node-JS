const express=require('express')

const cors=require('cors')
const UserRouter = require('./Routes/UserRouter')
const connect = require('./config/db')
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/',UserRouter)

app.listen(3333,()=>{
    connect()
    console.log('server running at 3333')
})