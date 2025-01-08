const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title:{type:String,unique:true},
    price:{type:String,unique:true},
    image:{type:String,unique:true},
    desc:{type:String,unique:true}
})

const ProductModel = mongoose.model("products",ProductSchema) 

module.exports=ProductModel;
