const mongoose=require("mongoose")
const movieSchema = mongoose.Schema({
    title:String,
    poster:String,
    raing:String,
    year:String
})

const movieModel=mongoose.model("movie",movieSchema)

module.exports=movieModel