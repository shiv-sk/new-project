const mongoose = require("mongoose");
const postJobSchema = new mongoose.Schema({
    requiredSkills:[
        {
            type:String,
            required:true
        }
    ],
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    salary:{
        type:Number,
        required:true,
        default:0
    },
    location:{
        type:String,
        required:true,
        default:"remote"
    },
    duration:{
        type:String,
        required:true,
        default:"0 months"
    },
    opening:{
        type:Number,
        required:true
    },
    organization:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Organization",
        required:true
    },
    jobType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"JobType",
        required:true
    }
} , {timeStamps:true});

const PostJob = mongoose.model("PostJob" , postJobSchema);
module.exports = PostJob;