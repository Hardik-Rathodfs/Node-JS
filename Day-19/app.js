const express=require('express')
const conncetion = require('./Config/db')
const app=express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.listen(3363,()=>{
    conncetion()
    console.log('server running at 3333')
})