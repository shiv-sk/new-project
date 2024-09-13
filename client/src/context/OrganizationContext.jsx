/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext , useContext, useState } from "react";
import { useAuth } from "./AuthContext";
const orgContext = createContext({
    organization:null,
    fetchOrganization:()=>{},
    fetchAllOrgnization:()=>{},
    updateOrgnization:()=>{},
    deleteOrgnization:()=>{},
})

const useOrg = ()=>useContext(orgContext);
const OrgProvider = ({children})=>{
    const {user} = useAuth();
    const [organization , setOrganization] = useState(null);
    const fetchOrganization = async()=>{};
    const fetchAllOrgnization = async()=>{};
    const updateOrgnization = async()=>{};
    const deleteOrgnization = async()=>{};
    return (
        <orgContext.Provider value={{organization , fetchOrganization , fetchAllOrgnization , updateOrgnization , deleteOrgnization}}>
            {children}
        </orgContext.Provider>
    )
}

export {OrgProvider , useOrg , orgContext}