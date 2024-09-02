const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");
const ApiError = require("../utils/apiError");
const Domain = require("../models/domain.model");

//create new Domain
exports.newDomain = asyncHandler(async(req,res)=>{
    const {name} = req.body;
    if(!name){
        throw new ApiError(400 , "domain name is required");
    }
    const existDomain = await Domain.findOne({name});
    if(existDomain){
        throw new ApiError(400 , "Domain already exist");
    }
    const domain = await Domain.create({
        name
    })
    if(!domain){
        throw new ApiError(500 , "domain is not created");
    }
    return res.status(201).json(
        new ApiResponse("Domain s=is created" , domain , 201)
    )
})

//get all Domain
exports.getAllDomain = asyncHandler(async(req,res)=>{
    const domain = await Domain.find();
    if(domain.length === 0){
        throw new ApiError(404 , "Domains are not found")
    }
    return res.status(200).json(
        new ApiResponse("Domains are " , domain , 200)
    )
})

//get Domain
exports.getDomain = asyncHandler(async(req,res)=>{
    const domain = await Domain.findById(req.params.domainId);
    if(!domain){
        throw new ApiError(404 , "domain is not found");
    }
    return res.status(200).json(
        new ApiResponse("Domain is" , domain , 200)
    )
})

//update Domain
exports.updateDomain = asyncHandler(async(req,res)=>{
    const domain = await Domain.findByIdAndUpdate(req.params.domainId);
    if(!domain){
        throw new ApiError(404 , "domain is not found");
    }
    const updatedDomain = await Domain.findByIdAndUpdate(req.params.domainId , req.body , {new:true , runValidators:true});
    if(!updatedDomain){
        throw new ApiError(500 , "domain is not updated");
    }
    return res.status(200).json(
        new ApiResponse("updatedDomain is " , domain , 200)
    )
})

//delete Domain
exports.deleteDomain = asyncHandler(async()=>{
    const domain = await Domain.findById(req.params.domainId);
    if(!domain){
        throw new ApiError(404 , "Domain is not found");
    }
    const deleteDomain = await Domain.findByIdAndDelete(req.params.domainId);
    if(!deleteDomain){
        throw new ApiError(500 , "Domain is not deleted");
    }
    return res.status(204).json()
})