const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
    skills:[
        {
            skillName:{
                type:String,
                required:true
            },
            level:{
                type:String,
                enum:["Beginner" , "Intermediate" , "Advanced"],
                required:true
            }
        }
    ],
    education:[
        {
            institution:{
                type:String,
                required:true
            },
            qualification:{
                type:String,
                required:true
            },
            startYear:{
                type:String,
                required:true
            },
            endYear:{
                type:String,
                required:true
            }
        }
    ],
    contactInfo:[
        {
            phoneNo:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            address:{
                type:String,
                required:true
            }
        }
    ],
    gender:{
        type:String,
        required:true,
        enum:["Male" , "Female" , "Others"],
        default:"Male"
    },
    type:{
        type:String,
        enum:["Fresher" , "Experienced"],
        required:true,
        default:"Fresher"
    },
    experience:[
        {
            organizationName:{
                type:String,
                
            },
            startDate:{
                type:Date,
                
            },
            endDate:{
                type:Date,
                
            },
            role:{
                type:String,
                
            }
        }
    ],
    resume:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user
    },
} , {timestamps:true});

const Profile = mongoose.model("Profile" , profileSchema);
module.exports = Profile;