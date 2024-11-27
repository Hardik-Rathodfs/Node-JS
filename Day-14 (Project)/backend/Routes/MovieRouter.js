const express=require("express")
const movieModel = require("../Model/movieSchema");
const multer = require("multer");
const fs = require("fs");
const path=require("path");

const MovieRouter = express.Router()

const s = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/assets"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const Data = multer({ storage: s });
  

MovieRouter.post("/addmovie",Data.single("poster"),async(req,res)=>{
    try {
        const movieData={
            title:req.body.title,
            rating:req.body.rating,
            year:req.body.year,
            poster: req.file ? req.file.filename : null,

        }
       let data = await movieModel.create(movieData)
        res.status(200).send({msg:"Data Added Successfully",data:data})
    } catch (error) {
        res.status(401).send({msg:error.message})
        
    }
})

MovieRouter.get("/allmovie", async (req, res) => {
  try {
    let data = await movieModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(401).send({ msg: error.message});
  }
});


module.exports=MovieRouter