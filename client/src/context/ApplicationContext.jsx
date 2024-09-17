/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useAuth } from "./AuthContext";
import { baseurl, getndeleteReq, getReq, postnpatchReq } from "../utils/apiCalls";
import { setMaxListeners } from "../../../server/models/application.model";

const applicationContext = createContext({
    applications:[],
    application:null,
    newApplication:()=>{},
    fetchApplications:()=>{},
    fetchUserApplications:()=>{},
    updateApplication:()=>{},
    deleteApplication:()=>{}
})

const useApplication = ()=>useContext(applicationContext);
const ApplicationProvider = ({children})=>{
    const [applications , setApplications] = useState([]);
    const {user , setIsError , setIsLoading} = useAuth();
    const [userId , setUserId] = useState(null);
    
    useEffect(()=>{
        if(user && user.role === "JobSeeker"){
            setUserId(user._id);
        }
    } , [user]);

    //new application
    const newApplication = useCallback(async(data)=>{
        try {
            setIsLoading(true);
            const response = await postnpatchReq(`${baseurl}/application/user/${userId}` , data , "post");
            console.log("response from application context: " , response);
        } catch (error) {
            console.log("error from application context: " , error);
            setIsError(error);
        }finally{
            setIsLoading(false);
        }
    } , [userId , setIsError , setIsLoading]);

    //get a user applications
    const fetchUserApplications = useCallback(async()=>{
        try {
            setIsLoading(true);
            const response = await getReq(`${baseurl}/application/user/${userId}`);
            console.log("the response from the server is: " , response);
        } catch (error) {
            setIsError(error);
            console.log("error from application context: " , error);
        }finally{
            setIsLoading(false);
        }
    }, [userId , setIsError , setIsLoading]);

    //fetch all applications
    const fetchApplications = useCallback(async()=>{
        try {
            setIsLoading(true);
            const response = await getndeleteReq(`${baseurl}/application` , "get");
            console.log("response from application context: " , response);
        } catch (error) {
            setIsError(error);
            console.log("error from application context: " , error);
        }finally{
            setIsLoading(false);
        }
    } , [setIsLoading , setIsError]);

    const updateApplication = async()=>{};
    const deleteApplication = async()=>{};
    return (
        <applicationContext.Provider value={{applications , fetchUserApplications , updateApplication , deleteApplication , newApplication ,fetchApplications }}>
            {children}
        </applicationContext.Provider>
    )
}
export {useApplication , ApplicationProvider , applicationContext}