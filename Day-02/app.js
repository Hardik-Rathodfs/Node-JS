
const fs= require("fs")

fs.readFile('app.txt','utf-8',(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("File");
        
    }
})

let a =fs.readFileSync('app.txt','utf-8')


console.log(a);
