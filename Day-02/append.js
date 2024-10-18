
// AppendFile, AppendFileSync

const fs = require("fs")


fs.appendFile('app.txt',"\nHello world's",(err)=>{
      if(err){
        console.log(err)
      }else{
      console.log("File written successfully")
      }
})

fs.appendFileSync("app.txt","\nKaran's")
