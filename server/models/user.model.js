const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Student" , "Employer" , "Admin"],
        default:"Student",
        required:true
    }
} , {timestamps:true});

userSchema.pre("save" , async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password , 10);
    
})

userSchema.methods.ispasswordcorrect = async function(password){
    return await bcrypt.compare(password , this.password);
}
const User = mongoose.model("User" , userSchema);
module.exports  = User;