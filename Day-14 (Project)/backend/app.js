const cors=require("cors")
const express=require("express")
const  connect  = require("./Config/db")
const MovieRouter = require("./Routes/MovieRouter")
const app = express()


app.use(cors())
app.use(express.json())
app.use("/",MovieRouter)




app.listen(8080,()=>{
    connect()
    console.log("Server is running on port 8080");
    
})


