const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const JobType = require("../models/jobtype.model");

//new JobType
exports.newJobType = asyncHandler(async(req,res)=>{
    const {name} = req.body;
    if(!name){
        throw new ApiError(400 , "name is required");
    }
    const existJobType = await JobType.findOne({name});
    if(existJobType){
        throw new ApiError(400 , "JobTyoe already exists");
    }
    const jobType = await JobType.create({
        name
    })
    if(!jobType){
        throw new ApiError(500 , "jobType is not created");
    }
    return res.status(201).json(
        new ApiResponse("jobType is created" , jobType , 201)
    )
})

//get All jobType 
exports.getAllJobType = asyncHandler(async()=>{
    const jobTypes = await JobType.find();
    if(jobTypes.length === 0){
        throw new ApiError(404 , "jobTypes are not found");
    }
    return res.status(200).json(
        new ApiResponse("JobTypes are:" , jobTypes , 200)
    )
})

//get a JobType
exports.getJobType = asyncHandler(async(req,res)=>{
    const jobType = await JobType.findById(req.params.jobTypeId);
    if(!jobType){
        throw new ApiError(404 , "jobtype is not found");
    }
    return res.status(200).json(
        new ApiResponse("Jobtype is " , jobType , 200)
    )
})

//delete a jobtype
exports.deleteJobType = asyncHandler(async(req,res)=>{
    const jobType = await JobType.findById(req.params.jobTypeId);
    if(!jobType){
        throw new ApiError(404 , "JoBType is not found");
    }
    return res.status(204).json()
})