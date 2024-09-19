const ApiError = require("../utils/apiError"); 
const asyncHandler = require("../utils/asyncHandler");
const Profile = require("../models/profile.model");
const ApiResponse = require("../utils/apiResponse");
const Cloudinary = require("cloudinary").v2;
const uploadOnCloudinary = require("../utils/cloudinary");
//new Profile
exports.newProfile = asyncHandler(async(req , res)=>{
    const {skills , education , contactInfo , gender , type , experience , user} = req.body
    console.log("the request body is: " , skills , education , contactInfo , gender , type , experience , user);
    const parsedSkills = JSON.parse(skills);
    const parsedEducation = JSON.parse(education);
    const parsedContactInfo = JSON.parse(contactInfo);
    const parsedExperience = JSON.parse(experience);
    console.log("Parsed Skills:", parsedSkills);
    if(!(parsedSkills && parsedEducation && parsedContactInfo && gender && type && parsedExperience && user)){
        throw new ApiError(400 , "all fields are required");
    }
    const existProfile = await Profile.findOne({user});
    if(existProfile){
        throw new ApiError(400 , "profile is already exist");
    }
    const resumePath = req.files?.resume[0].path;
    if(!resumePath){
        throw new ApiError(400 , "resume path is required");
    }
    const cloudinaryUpload = await uploadOnCloudinary(resumePath);
    if(!cloudinaryUpload){
        throw new ApiError(500, "File upload failed");
    }
    
    const profile = await Profile.create({
        skills:parsedSkills,
        education:parsedEducation,
        contactInfo:parsedContactInfo,
        gender,
        type,
        experience:parsedExperience,
        user,
        resume:cloudinaryUpload.url
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
    const {userId} = req.params
    if(!userId){
        throw new ApiError(400 , "user is required");
    }
    const profile = await Profile.findOne({user:userId});
    if(!profile){
        throw new ApiError(404 , "profile not found");
    }
    return res.status(200).json(
        new ApiResponse("user profile is " , profile , 200)
    )
})

//update user profile
exports.updateProfile = asyncHandler(async(req,res)=>{
    const {user} = req.params
    if(req.files && req.files.resume){
        const logoPath = req.files?.logo[0].path;
        const cloudinaryUpload = await uploadOnCloudinary(logoPath);
        req.body.resume = cloudinaryUpload.url
    }
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