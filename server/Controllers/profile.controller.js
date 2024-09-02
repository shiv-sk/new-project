const ApiError = require("../utils/apiError"); 
const asyncHandler = require("../utils/asyncHandler");
const Profile = require("../models/profile.model");
const ApiResponse = require("../utils/apiResponse");

//new Profile
exports.newProfile = asyncHandler(async(req , res)=>{
    const {skills , education , contactInfo , gender , type , experience , user} = req.body
    if(!(skills && education && contactInfo && gender && type && experience && user)){
        throw new ApiError(400 , "all fields are required");
    }
    const existProfile = await Profile.findOne({user});
    if(existProfile){
        throw new ApiError(400 , "profile is already exist");
    }
    const profile = await Profile.create({
        skills,
        education,
        contactInfo,
        gender,
        type,
        experience,
        user
    })
    if(!profile){
        throw new ApiError(500 , "profile is not created");
    }
    return res.status(200).json(
        new ApiResponse("profile is created" , profile , 200)
    )
})

//get profile user profile
exports.userProfile = asyncHandler(async(req,res)=>{
    const {user} = req.params
    if(!user){
        throw new ApiError(400 , "user is required");
    }
    const profile = await Profile.findOne({user});
    if(!profile){
        throw new ApiError(404 , "user not found");
    }
    return res.status(200).json(
        new ApiResponse("user profile is " , profile , 200)
    )
})

//update user profile
exports.updateProfile = asyncHandler(async(req,res)=>{
    const {user} = req.params
    if(!user){
        throw new ApiError(400 , "user is required");
    }
    const profile = await Profile.findOneAndUpdate({user} , req.body , {new:true});
    if(!profile){
        throw new ApiError(404 , "profile not found");
    }
    return res.status(200).json(
        new ApiResponse("the updated profile is " , profile , 200)
    )
})

//delete user profile
exports.deleteProfile = asyncHandler(async(req,res)=>{
    const {user} = req.params
    if(!user){
        throw new ApiError(400 , "user is required");
    }
    const profile = await Profile.findOneAndDelete({user});
    if(!profile){
        throw new ApiError(404 ,"profile is not found");
    }
    return res.status(204).json()
})