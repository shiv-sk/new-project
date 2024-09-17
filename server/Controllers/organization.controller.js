const Organization = require("../models/organization.model");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const User = require("../models/user.model");
const uploadOnCloudinary = require("../utils/cloudinary");
const Cloudinary = require("cloudinary").v2

//new organization
exports.newOrganization = asyncHandler(async (req,res)=>{
    const {name, about , companySize , website , email , user} = req.body;
    if(!(name && about && companySize && website && email && user)){
        throw new ApiError(400 , "all fields are required");
    }
    const existOrganization = await User.findOne({email});
    if(existOrganization){
        throw new ApiError(400 , "organization already exist");
    }
    const logoPath = req.files?.logo[0].path;
    if(!logoPath){
        throw new ApiError(400 , "Logo file is required");
    }
    const cloudinaryUpload = await uploadOnCloudinary(logoPath);
    if(!cloudinaryUpload){
        throw new ApiError(500, "File upload failed");
    }
    const optimizedUrl = Cloudinary.url(cloudinaryUpload.public_id , {
        transformation:[
            {
                quality:"auto",
                fetch_format:"auto"
            },
            {
                width:"150",
                gravity:"auto",
                crop:"fill"
            }
        ]
    })
    if(!optimizedUrl){
        throw new ApiError(500 , "url is not optimized");
    }
    // console.log("the optimized url for the media: " , optimizedUrl)
    const organization = await Organization.create({
        name,
        about,
        companySize,
        website,
        email,
        logo:optimizedUrl,
        user
    })
    if(!organization){
        throw new ApiError(500, "Organization creation failed");
    }
    return res.status(201).json(
        new ApiResponse("Organization created successfully", organization, 201)
    )
})
 
//get organization
exports.getOrganization = asyncHandler(async(req,res)=>{
    const {role} = req.user;
    const {organizationId} = req.params;
    const {userId} = req.params;
    console.log("role of the user: " , role);
    let organization;
    if(role === "Admin" && organizationId){
        organization = await Organization.findById(organizationId);
    }else if(userId && role === "Employer"){
        organization = await Organization.findOne({user:userId});
    }
    if(!organization){
        throw new ApiError(404 , "organization is not found");
    }
    return res.status(200).json(
        new ApiResponse("organization is" , organization , 200)
    )
})

//get All Organizations for admin
exports.getAllOrganization = asyncHandler(async(req,res)=>{
    const organizations = await Organization.find();
    if(organizations.length === 0){
        throw new ApiError(404 , "No organizations found");
    }
    return res.status(200).json(
        new ApiResponse("organizations are: " , organizations , 200)
    )
})

//update organozation 
exports.updateOrganization = asyncHandler(async(req,res)=>{
    const {role} = req.user;
    const {organizationId} = req.params;
    const {user} = req.params;
    let organization;
    if(req.files && req.files.logo){
        // console.log("file from the request: " , req.files);
        const logoPath = req.files?.logo[0].path;
        const cloudinaryUpload = await uploadOnCloudinary(logoPath);
        const optimizedUrl = Cloudinary.url(cloudinaryUpload.public_id , {
            transformation:[
                {
                    quality:"auto",
                    fetch_format:"auto"
                },
                {
                    width:"150",
                    gravity:"auto",
                    crop:"fill"
                }
            ]
        })
        req.body.logo = optimizedUrl;
    }
    if(role === "Admin" && organizationId){
        organization = await Organization.findByIdAndUpdate(organizationId , req.body , {new:true , runValidators:true});
    }else if(user){
        organization = await Organization.findOneAndUpdate({user} , req.body , {new:true , runValidators:true});
    }
    
    if(!organization){
        throw new ApiError(404 , "organization not found");
    }
    
    return res.status(200).json(
        new ApiResponse("organization is updated " , organization , 200)
    )
})

//delete organization
exports.deleteOrganization = asyncHandler(async(req,res)=>{
    const {role} = req.user;
    const {organizationId} = req.params
    const {user} = req.params;
    let organization;
    if(role === "Admin" && organizationId){
        organization = await Organization.findByIdAndDelete(organizationId);
    }else if(user){
        organization = await Organization.findOneAndDelete({user});
    }
    if(!organization){
        throw new ApiError(404 , "organization is not found");
    }
    return res.status(204).json()
})


// exports.funcontroller = asyncHandler(async(req,res)=>{
//     try {
//         const {role} = req.user
//         if(role === "Admin"){
//             console.log("the user role is" , role);
//         }else{
//             console.log("the user role is" , role);
//         }
//         return res.status(200).json({
//             status:"success",
//             message:"completed"
//         })
//     } catch (error) {
//         return res.status(500).json({
//             status:"fail",
//             message:error
//         })
//     }
// })