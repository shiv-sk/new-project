import { useParams } from "react-router-dom"
import { useJob } from "../context/JobsContext";
import { useEffect, useState } from "react";
export default function JobDetail(){
    const {fetchJobById} = useJob();
    const{jobId} = useParams();
    const [jobDetails , setJobDetails] = useState();
    console.log("details of the from detail page: " , jobDetails)

    //fetching a job from Id
    useEffect(()=>{
        try {
            const job = async()=>{
                const job = await fetchJobById(jobId);
                setJobDetails(job);
            }
            job();
        } catch (error) {
            console.log("error from job detail page: " , error);
        }
    } , [fetchJobById , jobId]);
    // console.log("the id of the job is: " , jobId);
    return jobDetails ? (
        <>
        <div className="max-w-lg mx-auto p-6 shadow-lg bg-slate-900 rounded-md mt-8 text-center">
            <h1 className="font-bold text-xl mb-4 text-white-800">{jobDetails.title}</h1>
            <div className="bg-slate-900 p-4 rounded-md shadow-sm">
                <div className="mb-4">
                    <h3 className="text-lg font-medium text-white-700 text-left">{jobDetails.organization.name}</h3>
                </div>
                <div className="mx-4 my-4 w-full text-left gap-4 text-white-600 flex justify-start flex-wrap">
                    <span className="px-2 py-1 bg-slate-600 rounded text-white-600">{jobDetails.duration}</span>
                    <span className="px-2 py-1 bg-slate-600 rounded text-white-600">{jobDetails.domain.name}</span>
                    <span className="px-2 py-1 bg-slate-600 rounded text-white-600">{jobDetails.jobType.name}</span>
                    <span className="px-2 py-1 bg-slate-600 rounded text-white-600">{jobDetails.location}</span>
                    <span className="px-2 py-1 bg-slate-600 rounded text-white-600">{jobDetails.salary}</span>
                </div>
                <div className="mt-4 text-gray-600 text-left mb-4">
                    <h4 className="font-semibold text-white">About the Job</h4>
                    <p className="text-white">{jobDetails.description}</p>
                </div>
                <div className="text-left">
                    <span className="font-semibold text-lg px-2 py-2">job opening :</span>
                    <span className="font-semibold text-lg py-2">{jobDetails.opening}</span>
                </div>
                
                <div className="mx-4 my-4 w-full text-left gap-4 text-white-600 flex justify-start flex-wrap">
                    <h3 className="font-semibold text-lg text-white-900 w-full">Required Skills</h3>
                    {jobDetails.requiredSkills.map((skill , index)=>(
                        <span className="px-2 py-1 bg-slate-600 rounded text-white" key={index}>{skill}</span>
                    ))}
                    
                </div>
                <div className="mt-4 text-gray-600 text-left">
                    <h4 className="font-semibold text-white">About the Organization</h4>
                    <p className="text-white">{jobDetails.organization.about}</p>
                </div>
            </div>
            <button 
            className="text-gray-700 mt-5 bg-orange-500 hover:bg-orange-700 hover:transition-colors 
            px-5 py-3 rounded mx-2">Apply</button>
            <button 
            className="text-gray-700 mt-5 bg-orange-500 hover:bg-orange-700 hover:transition-colors 
            px-5 py-3 rounded mx-2">Save Job</button>
        </div>
        </>
        
    ) : <p>some one hired for this job</p>
}