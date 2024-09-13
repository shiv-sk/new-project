/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const applicationContext = createContext({
    applications:[],
    fetchUserApplications:()=>{},
    updateApplication:()=>{},
    deleteApplication:()=>{}
})

const useApplication = ()=>useContext(applicationContext);
const ApplicationProvider = ({children})=>{
    const [applications , setApplications] = useState([]);
    const fetchUserApplications = ()=>{};
    const updateApplication = ()=>{};
    const deleteApplication = ()=>{};
    return (
        <applicationContext.Provider value={{applications , fetchUserApplications , updateApplication , deleteApplication}}>
            {children}
        </applicationContext.Provider>
    )
}
export {useApplication , ApplicationProvider , applicationContext}