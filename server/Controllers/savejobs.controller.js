const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const SaveJob = require("../models/savejob.model");

//new save job
exports.saveNewJob = asyncHandler(async(req,res)=>{
    const {user , job} = req.body
    if(!(user && job)){
        throw new ApiError(400 , "all fields are required");
    }
    const existJobSave = await SaveJob.findOne({$and:[{user} , {job}]});
    if(existJobSave){
        throw new ApiError(400 , "job is already saved");
    }
    const saveJob = await SaveJob.create({
        user,
        job
    })
    if(!saveJob){
        throw new ApiError(500 , "job is not saved");
    }
    return res.status(201).json(
        new ApiResponse("job is saved successfuly" , saveJob , 201)
    )
})

//get a saved jobs
exports.getSaveJob = asyncHandler(async(req,res)=>{
    const savedJob = await SaveJob.findOne({user});
    if(!savedJob){
        throw new ApiError(404 , "no jobs are saved");
    }
    return res.status(200).json(
        new ApiResponse("saved jobs are" , savedJob , 200)
    )
})

//update saveJob 
exports.updateSaveJob = asyncHandler(async(req,res)=>{
    const updatedSaveJob = await SaveJob.findOneAndUpdate({user} , req.body , {new:true , runValidators:true});
    if(!updatedSaveJob){
        throw new ApiError(400 , "save job is not updated");
    }
    return res.status(200).json(
        new ApiResponse("updated save job is: " , updatedSaveJob , 200)
    )
})

//delete savejob
exports.deleteSaveJob = asyncHandler(async(req,res)=>{
    const deletedSaveJob = await SaveJob.findOneAndDelete({user});
    if(!deletedSaveJob){
        throw new ApiError(400 , "save job is not deleted");
    }
    return res.status(204).json()
})