const express = require('express');
const connect = require('./config/server');
const ProductRoutes = require('./Routes/ProductRoutes');
const SearchRoutes = require('./Routes/SearchRoutes');
require('dotenv').config();

const app = express()

app.use(express.json())
app.use("/",ProductRoutes)
app.use("/",SearchRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Your server is running on ${process.env.port}`);
    connect()
})