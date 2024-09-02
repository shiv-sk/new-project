const mongoose = require("mongoose");
const organizationSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    companySize:{
        type:String,
        required:true,
    },
    website:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
} , {timestamps:true});

const Organization = mongoose.model("Organization" , organizationSchema);
module.exports = Organization;