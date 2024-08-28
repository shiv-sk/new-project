const mongoose = require("mongoose");
const applicationSchema = new mongoose.Schema({
    profile:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PostJob",
        required:true
    },
    status:{
        type:String,
        enum:["Applied" , "OnReview" , "Accepted" , "Rejected"],
        default:"Applied"
    }
} , {timestamps:true});

const Application = mongoose.model("Application" , applicationSchema);
module.exports = Application;