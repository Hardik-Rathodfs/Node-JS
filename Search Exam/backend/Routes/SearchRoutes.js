const { Router } = require("express");
const ProductModel = require("../Model/ProductSchema");

const SearchRoutes = Router();

SearchRoutes.get("/search",async(req,res)=>{
    try {
        console.log(req.query);
        let data =await ProductModel.find({title : req.query.title})
        console.log(data);
        res.status(200).send({msg:"Data find sucessfully",data})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

module.exports=SearchRoutes;