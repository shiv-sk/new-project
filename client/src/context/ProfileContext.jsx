/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState , useCallback, useEffect} from "react";
import { useAuth } from "./AuthContext";
import { baseurl, getndeleteReq, getReq, postnpatchReq } from "../utils/apiCalls";

const profileContext = createContext({
    profile:null,
    profiles:[],
    newProfile:()=>{},
    fetchProfile:()=>{},
    fetchAllProfiles:()=>{},
    updateProfile:()=>{},
    deleteProfile:()=>{}
})
const useProfile =()=>useContext(profileContext);

const ProfileProvider = ({children})=>{
    const {user , setIsError , setIsLoading} = useAuth();
    const [userId , setUserId] = useState(null);
    
    //save profile fetched profile
    const [profile , setProfile] = useState(null);

    //save profile fetched profiles
    const [profiles , setProfiles] = useState(null);


    //seting userId
    useEffect(()=>{
        if(user){
            setUserId(user._id)
        }
    } , [user])

    console.log("user from auth context: " , userId);
    //new profile of a user
    const newProfile = useCallback(async(data)=>{
        try {
            setIsLoading(true);
            const response = await postnpatchReq(`${baseurl}/profile/` , data , "post" , true);
            console.log("response from profile context: " , response);
        } catch (error) {
            setIsError(error);
            console.log("error from profile context: " , error);
        }finally{
            setIsLoading(false);
        }
    } , [setIsError , setIsLoading]);

    //get a profile user specified
    const fetchProfile = useCallback(async()=>{
        if(!userId){
            return;
        }
        try {
            setIsLoading(true);
            const response = await getReq(`${baseurl}/profile/user/${userId}`);
            console.log("the profile of user is: " , response);
            setProfile(response.data);
        } catch (error) {
            setIsError(error);
            console.log("the error from the server is: " , error);
        }finally{
            setIsLoading(false);
        }
    } , [userId , setIsError , setIsLoading]);

    useEffect(()=>{
        fetchProfile();
    } , [fetchProfile]);

    //get all profiles 
    const fetchAllProfiles = useCallback(async()=>{
        try {
            setIsLoading(true);
            const response = await getReq(`${baseurl}/profile`);
            console.log("the response from server profiles: " , response);
        } catch (error) {
            setIsError(error);
            console.log("the error from server is: " , error);
        }finally{
            setIsLoading(false);
        }
    } , [setIsError , setIsLoading]);

    //update profile a user specified
    const updateProfile = useCallback(async(data)=>{
        try {
            setIsLoading(true);
            const response = await postnpatchReq(`${baseurl}/profile/user/${userId}` , data , "patch" , true);
            console.log("response from profile context: " , response);
        } catch (error) {
            setIsError(error);
            console.log("error form profile context: " , error);
        }finally{
            setIsLoading(false);
        }
    } , [userId , setIsLoading , setIsError]);

    //delete profile of user specified
    const deleteProfile = async()=>{
        try {
            setIsLoading(true);
            const response = await getndeleteReq(`${baseurl}/profile/${userId}`);
            console.log("response from profile context: " , response);
        } catch (error) {
            setIsError(error);
            console.log("error from profile context: " , error);
        }finally{
            setIsLoading(false);
        }
    };
    return (
        <profileContext.Provider value={{profile , fetchProfile , fetchAllProfiles , updateProfile , deleteProfile , newProfile}}>
            {children}
        </profileContext.Provider>
    )
}
export {useProfile , ProfileProvider , profileContext}