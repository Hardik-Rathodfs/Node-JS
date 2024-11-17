const mongoose = require("mongoose")

const studentSchema=mongoose.Schema({
    name:String,
    grid:Number,
    course:String,
})

const StudentModel = mongoose.model("studentData",studentSchema)

module.exports=StudentModel