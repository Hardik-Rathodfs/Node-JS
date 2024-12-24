const {Router} = require("express");
const userModel = require("../Model/userSchema");
require("dotenv").config()
const userRouter = Router()

userRouter.post("/signup",async(req,res)=>{
    try {
        const userData={
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        };
    let data=await userModel.create(userData);
    res.status(200).send({msg:"User added sucessfully", data:data});
    } catch (error) {
     res.status(401).send({msg:error.message});   
    }
});

