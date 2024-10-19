const http = require("http");
const path = require("path");
const fs = require("fs");

let server = http.createServer((req,res)=>{
    if(req.url=="/")
    {
        let a =fs.readFileSync("index.html","utf-8")
        res.end(a);
    }
    else if(req.url=="/about")
    {
        let b =fs.readFileSync("about.html","utf-8")
        res.end(b)
    }
    else if(req.url=="/contact")
    {
        let c=fs.readFileSync("contact.html","utf-8")
        res.end(c)
    }
    else{
        res.end("page not found..!!")
    }
})

server.listen(3030,()=>{
    console.log("Server Running on 3030");
    
})
