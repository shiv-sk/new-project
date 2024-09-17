/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext , useCallback, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { baseurl, getndeleteReq, getReq, postnpatchReq } from "../utils/apiCalls";
const orgContext = createContext({
    organization:null,
    organizations:[],
    newOrganization:()=>{},
    fetchOrganization:()=>{},
    fetchAllOrgnization:()=>{},
    updateOrgnization:()=>{},
    deleteOrgnization:()=>{},
})

const useOrg = ()=>useContext(orgContext);
const OrgProvider = ({children})=>{
    const {user , setIsError , setIsLoading} = useAuth();
    // const userId = user ? user._id : null;
    const [organization , setOrganization] = useState(null);
    const [organizations , setOrganizations] = useState([]);
    const [userId , setUserId] = useState(null);
    console.log("the userid from state: " , userId);
    useEffect(()=>{
        if(user && user.role === "Employer"){
            setUserId(user._id);
        }
    } , [user]);

    //creating new organization 
    const newOrganization = async(data)=>{
        try {
            setIsLoading(true);
            const response = await postnpatchReq(`${baseurl}/organization/` , data , "post" , true);
            console.log("response from new org context: " , response);
        } catch (error) {
            console.log("error from new org context: " , error);
            setIsError(error);
        }finally{
            setIsLoading(false);
        }
    };

    //get a user specified organization
    const fetchOrganization = useCallback( async()=>{
        if(!userId){
            return; 
        }
        try {
            setIsLoading(true);
            const response = await getReq(`${baseurl}/organization/user/${userId}`);
            console.log("the reponse form the request is for organozations is: " , response);
        } catch (error) {
            setIsError(error);
            console.log("error form the organization context: " , error);
        } finally{
            setIsLoading(false);
        }
    } , [setIsError , setIsLoading , userId]);

    //get all orgnizations
    const fetchAllOrgnization = useCallback(async()=>{
        try {
            setIsLoading(true);
            const response = await getReq(`${baseurl}/organization`);
            console.log("the response for all organizations from server is: " , response);
        } catch (error) {
            setIsError(error);
            console.log("the error from fetch all organization: " , error);
        }finally{
            setIsLoading(false);
        }
    } , [setIsError , setIsLoading]);

    //update organization
    const updateOrgnization = async(data)=>{
        try {
            setIsLoading(true);
            const response = await postnpatchReq(`${baseurl}/organization/user/${userId}` , data , "patch" , true);
            console.log("the response from updateOrg context: " , response);
        } catch (error) {
            console.log("error from org context: " , error);
            setIsError(error);
        }finally{
            setIsLoading(false);
        }
    };

    //delete organozation
    const deleteOrgnization = async()=>{
        try {
            setIsLoading(true);
            const response = await getndeleteReq(`${baseurl}/organization/${userId}`);
            console.log("response from update org context: " , response);
        } catch (error) {
            setIsError(error);
            console.log("error from update org context: " , error);
        }finally{
            setIsLoading(false);
        }
    };
    return (
        <orgContext.Provider value={{organization , fetchOrganization , fetchAllOrgnization , updateOrgnization , deleteOrgnization , newOrganization , organizations}}>
            {children}
        </orgContext.Provider>
    )
}

export {OrgProvider , useOrg , orgContext}