/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState , useCallback} from "react";
import { useOrg } from "./OrganizationContext";
import { baseurl, getndeleteReq, postnpatchReq } from "../utils/apiCalls";
import { useAuth } from "./AuthContext";

//create of context
const JobContext = createContext({
    jobs:[],
    jobsByFilter:[],
    jobsByOrganization:[],
    fetchJobs:()=>{},
    updateJob:()=>{},
    deleteJob:()=>{},
    fetchJobsByFilters:()=>{},
    fetchJobsByOrganization:()=>{},
    fetchJobById:()=>{},
    newJob:()=>{}
})

//use of context
const useJob = ()=>useContext(JobContext);

const JobProvider = ({children})=>{
    const [jobs , setJobs] = useState([]);
    const [jobsByFilter , setJobsByFilter] = useState([]);
    const [jobsByOrganization , setJobsByOrganization] = useState([]);
    const [organizationId , setOrganizationId] = useState(null);

    const {organization} = useOrg();
    const {setIsLoading , setIsError} = useAuth();
    useEffect(()=>{
        if(organization){
            setOrganizationId(organization._id);
        }
    } , [organization])

    //get all Jobs
    const fetchJobs = useCallback(async()=>{
        try {
            setIsLoading(true);
            const response = await getndeleteReq(`${baseurl}/postJob` , "get");
            // console.log("response from Jobs context: " , response.data);
            setJobs(response.data);
        } catch (error) {
            console.log("error from Jobs context: " , error);
            setIsError(error);
        }finally{
            setIsLoading(false);
        }
    } , [setIsError , setIsLoading]);
    
    //calling function for all jobs
    useEffect(()=>{
        fetchJobs();
    } , [fetchJobs]);
    
    //get a job by id
    const fetchJobById = useCallback(async (jobId) =>{
        try {
            setIsLoading(true);
            const response = await getndeleteReq(`${baseurl}/postJob/jobs/${jobId}` , "get");
            // console.log("the job from by id: " , response);
            return await response.data;
        } catch (error) {
            setIsError(error);
            console.log("error from Jobs context: " , error)
        }
    } , [setIsError , setIsLoading]);

    //get a jobs by organization
    const fetchJobsByOrganization = useCallback(async()=>{
        try {
            setIsLoading(true);
            const response = await getndeleteReq(`${baseurl}/postJob/${organizationId}` , "get");
            console.log("response from Jobs context: " , response);
        } catch (error) {
            console.log("error from Jobs context: " , error);
            setIsError(error)
        }finally{
            setIsLoading(false);
        }
    } , [organizationId , setIsError , setIsLoading]);

    //update a Job post
    const updateJob = useCallback(async(data)=>{
        try {
            setIsLoading(true);
            const response = await postnpatchReq(`${baseurl}/postJob/organization/${organizationId}` , data , "patch" , true);
            console.log("response from Jobs context: " , response);
        } catch (error) {
            console.log("error from Jobs context: " , error);
            setIsError(error);
        }finally{
            setIsLoading(false);
        }
    }, [organizationId , setIsError , setIsLoading]);

    //deleteing a Job psot
    const deleteJob = async()=>{
        try {
            setIsLoading(false);
            const response = await getndeleteReq(`${baseurl}/postJob/organization/${organizationId}` , "delete");
            console.log("response from Jobs context: " , response);
        } catch (error) {
            setIsError(error);
            console.log("error from Jobs context: " , error);
        }finally{
            setIsLoading(false);
        }
    };
    const fetchJobsByFilters = ()=>{};

    //creating new job post
    const newJob = useCallback(async(data)=>{
        try {
            setIsLoading(true);
            const response = await postnpatchReq(`${baseurl}/postJob/` , data , "post" , true);
            console.log("response from Jobs context: " , response);
        } catch (error) {
            setIsError(error);
            console.log("error from Jobs context: " , error);
        }finally{
            setIsLoading(false);
        }
    }, [setIsLoading , setIsError]);


    return (
        <JobContext.Provider value={{jobs , fetchJobs , updateJob , deleteJob , fetchJobsByFilters , newJob , 
        fetchJobsByOrganization , fetchJobById}}>
            {children}
        </JobContext.Provider>
    )
}
export {JobContext , JobProvider , useJob}