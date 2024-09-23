const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const PostJob = require("../models/postjob.model");

//new PostJob
exports.newJob = asyncHandler(async(req,res)=>{
    const {requiredSkills,title,description,salary,location,duration,opening,experience,organization,jobType,domain} = req.body;
    if(!(requiredSkills && title && description && salary && location && duration && opening && experience && organization && jobType && domain)){
        throw new ApiError(400 , "all fields are required");
    }
    const jobPost = await PostJob.create({
        requiredSkills,
        title,
        description,
        salary,
        location,
        duration,
        opening,
        experience,
        organization,
        jobType,
        domain
    })
    if(!jobPost){
        throw new ApiError(500 , "new job post is not created");
    }
    return res.status(201).json(
        new ApiResponse("new job post is created: " , jobPost , 201)
    )
})

//get jobPost
exports.getJobPost = asyncHandler(async(req,res)=>{
    const {role} = req.user
    const {organization , JobPostId} = req.params;
    let jobPost;
    if(role === "Admin" && JobPostId){
        jobPost = await PostJob.findById(JobPostId)
    }else if(organization){
        jobPost = await PostJob.find({organization})
    }
    if(!jobPost){
        throw new ApiError(404 , "job posts are not found");
    }
    return res.status(200).json(
        new ApiResponse("jobPost is: " , jobPost , 200)
    )
})

//get all jobPost
exports.getAllJobPost = asyncHandler(async(req,res)=>{
    const allJobPost = await PostJob.find();
    if(allJobPost.length === 0){
        throw new ApiError(404 , "job posts are not found");
    }
    return res.status(200).json(
        new ApiResponse("jobPosts are: " , allJobPost , 200)
    )
})

//find a job using filters
exports.jobsByFilter = asyncHandler(async(req,res)=>{
    const {location , salary , jobType} = req.query;
    let query;
    if(location){
        query.location = location;
    }
    else if(salary){
        query.salary = salary;
    }else if(jobType){
        query.jobType = jobType;
    }
    const jobs = await PostJob.find(query);
    if(!jobs){
        throw new ApiError(404 , "jobs are not found");
    }
    return res.status(200).json(
        new ApiResponse("jobs are: " , jobs , 200)
    )
})

//update JobPost
exports.updateJobPost = asyncHandler(async(req,res)=>{
    const {role} = req.user;
    const {organization , JobPostId} = req.params
    let JobPost;
    if(role === "Admin" && JobPostId){
        JobPost = await PostJob.findByIdAndUpdate(JobPostId , req.body , {new:true , runValidators:true})
    }else if(organization){
        JobPost = await PostJob.findOneAndUpdate({organization} , req.body , {new:true , runValidators:true});
    }
    if(!JobPost){
        throw new ApiError(500 , "jobPost is not updated");
    }
    return res.status(200).json(
        new ApiResponse("updated JobPost is: " , JobPost , 200)
    )
})

//delete JobPost
exports.deleteJobPost = asyncHandler(async(req,res)=>{
    const {role} = req.user;
    const {organization , JobPostId} = req.params;
    let JobPost;
    if(role === "Admin" && JobPostId){
        JobPost = await PostJob.findByIdAndDelete(JobPostId);
    }else if(organization){
        JobPost = await PostJob.findOneAndDelete({organization});
    }
    if(!JobPost){
        throw new ApiError(500 , "PostJob is not deleted");
    }
    return res.status(204).json()
})