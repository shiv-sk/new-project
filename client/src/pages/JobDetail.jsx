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
    return (
        <h1>JobDetail page</h1>
    )
}