/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const profileContext = createContext({
    profile:null,
    fetchProfile:()=>{},
    fetchAllProfiles:()=>{},
    updateProfile:()=>{},
    deleteProfile:()=>{}
})
const useProfile =()=>useContext(profileContext);
const ProfileProvider = ({children})=>{
    const [profile , setProfile] = useState(null);
    const fetchProfile = async()=>{};
    const fetchAllProfiles = async()=>{};
    const updateProfile = async()=>{};
    const deleteProfile = async()=>{};
    return (
        <profileContext.Provider value={{profile , fetchProfile , fetchAllProfiles , updateProfile , deleteProfile}}>
            {children}
        </profileContext.Provider>
    )
}
export {useProfile , ProfileProvider , profileContext}