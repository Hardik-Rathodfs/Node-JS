const {Router}= require("express")
const passport=require("passport")
const UserModel = require("../Model/UserModel")
const LocalStrategey = require("passport-local").Strategy

const UserRouter=Router()

passport.use(new LocalStrategey(
    async(username,password,done)=>{
        let user=await UserModel.findOne({username})
        if(!user)
        {
            return done(null,false,{msg:"User not registerd!!"})
        }
        if(user.password != password)
        {
            return done(null,false,{msg:"Incorrect password"})
        }
        return done(null,user)
    }
))

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async(id,done)=>{
    let user = await UserModel.findById(id)
    done(null,user)
})

UserRouter.get("/",(req,res)=>{
    res.render("signup.ejs")
})

UserRouter.post("/",async(req,res)=>{
    try{
        let data=req.body
        let ans=await UserModel.create(data)
        res.status(200).send({data:ans,msg:"Register Successfully"})
    }
    catch(error)
    {
        res.status(501).send({err:error.message})
    }
})

UserRouter.get("/login",(req,res)=>{
    res.render("login.ejs")
})

UserRouter.post("/login",passport.authenticate("local"),async(req,res)=>{
    res.send({msg:"User Login Successfully"})
})

module.exports=UserRouter