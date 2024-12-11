const express=require('express')
const path = require("path")
const passport = require("passport")
const session = require("express-session")
const UserRouter = require('./Routes/UserRouter')
const connect = require('./Config/db')

const app=express()



app.set("view engine","ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use(session({secret:"Hello"}))
app.use(passport.initialize())
app.use(passport.session())


app.use("/",UserRouter)

app.listen(8080,()=>{
    connect()
    console.log('server running at 8080')
})