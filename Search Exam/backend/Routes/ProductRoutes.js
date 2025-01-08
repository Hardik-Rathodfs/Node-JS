const { Router } = require("express");
const ProductModel = require('../Model/ProductSchema');

const ProductRoutes = Router();

ProductRoutes.post("/add",async(req,res)=>{
    try {
        let data= await ProductModel.create(req.body)
        res.status(200).send({msg:"Product add sucsefully",data})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

ProductRoutes.get("/all",async(req,res)=>{
    try {
        let data = await ProductModel.find(req.body)
        res.status(200).send({msg:"Product add sucsefully",data})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

module.exports=ProductRoutes;