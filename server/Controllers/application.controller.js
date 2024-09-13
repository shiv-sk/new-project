const ApiError = require("../utils/apiError");
const asyncHandler = require("../utils/asyncHandler");
const Application = require("../models/application.model");
const ApiResponse = require("../utils/apiResponse");
const confirmationMail = require("../utils/mailSending");

//new Application
exports.newApplication = asyncHandler(async(req,res)=>{
    const { profile , user , post } = req.body
    console.log("the request body is: " , profile , user , post);
    if(!(profile && user && post)){
        throw new ApiError(400 , "all fields are required")
    }
    const existApplication = await Application.findOne({$and:[{user} , {post}]});
    if(existApplication){
        throw new ApiError(400 , "Application is already applied");
    }
    const application = await Application.create({
        user,
        post,
        profile
    })
    if(!application){
        throw new ApiError(500 , "application is not created");
    }
    const populateApplication = await Application.findById(application._id).populate([{path:"user" , select:"email"} , {path:"post" , select:"title" , populate:{path:"organization" , select:"email"}} , {path:"profile" , select:"resume"}]);
    let userEmail , organizationMail , JobTitle , userResume;
    if(populateApplication){
        userEmail = populateApplication.user.email;
        organizationMail = populateApplication.post.organization.email;
        JobTitle = populateApplication.post.title;
        userResume = populateApplication.profile.resume;
    }
    console.log("the populated result is: " ,  userEmail , organizationMail , JobTitle , userResume);
    const sentMail = await confirmationMail.sendConfirmationMail(userEmail , organizationMail , JobTitle ,  userResume);
    
    return res.status(201).json(
        new ApiResponse("Application is: " , application , 201)
    )
})

//get application
exports.getApplication = asyncHandler(async(req,res)=>{
    const {user} = req.params;
    const {applicationId} = req.params;
    const {role} = req.user;
    let application;
    if(role === "Admin" && applicationId){
        application = await Application.findById(applicationId);
    }else if(user){
        application = await Application.findOne({user});
    }
    if(!application){
        throw new ApiError(404 , "application is not found");
    }
    return res.status(200).json(
        new ApiResponse("application is: " , application , 200)
    )
})

//get All applications
exports.getAllApplication = asyncHandler(async(req,res)=>{
    const application = await Application.find();
    if(application.length === 0){
        throw new ApiError(404 , "applications are not found");
    }
    return res.status(200).json(
        new ApiResponse("applications are: " , application , 200)
    )
})

//update Application
exports.updateApplication = asyncHandler(async(req,res)=>{
    const {role} = req.user
    const {applicationId , user} = req.params;
    let application;
    if(role === "Admin" && applicationId){
        application = await Application.findByIdAndUpdate(applicationId , req.body , {new:true , runValidators:true});
    }else if(user){
        application = await Application.findOneAndUpdate({user} , req.body , {new:true , runValidators:true});
    }
    if(!application){
        throw new ApiError(500 , "application is not updated");
    }
    return res.status(200).json(
        new ApiResponse("application is updated" , application , 200)
    )
})

//delete Application
exports.deleteApplication = asyncHandler(async(req,res)=>{
    const {role} = req.user;
    const {applicationId , user} = req.params;
    let application;
    if(role === "Admin" && applicationId){
        application = await Application.findByIdAndDelete(applicationId);
    }else if(user){
        application = await Application.findOneAndDelete({user});
    }
    if(!application){
        throw new ApiError(500 , "Application is not deleted");
    }
    return res.status(204).json()
})