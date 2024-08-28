const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    type:String,
    enum:["Full-Time" , "Part-Time" , "Contract" , "Internship"],
    required:true
} , {timestamps:true});
const JobType = mongoose.model("JobType" , jobSchema);
module.exports = JobType;