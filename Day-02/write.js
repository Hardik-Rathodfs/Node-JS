
// writeFile, writeFileSync
const fs = require("fs")


fs.writeFile('app.txt',"Hello world's",(err)=>{
      if(err){
        console.log(err)
      }else{
      console.log("File written successfully")
      }
})

fs.writeFileSync("app.txt","Karan's")
