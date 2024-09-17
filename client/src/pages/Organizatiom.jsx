import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { baseurl, getReq } from "../utils/apiCalls";
import { useAuth } from "../context/AuthContext";

export default function Organization (){
    const [organizationData , setOrganizationData] = useState(null);
    console.log("localstate of the orgnization: " , organizationData)
    // const {userId} = useParams();
    // const {user} = useAuth();
    // console.log("the param user: " , user);
    // useEffect(()=>{
    //     setOrganizationData(null);
    //     if(user){
    //         const fetchOrganization = async()=>{
    //             try {
    //                 const response = await getReq(`${baseurl}/organization/user/${user?._id}`);
    //                 console.log("the response from the fetchOrgnization: " , response);
    //                 setOrganizationData(response.data);
    //             } catch (error) {
    //                 console.log("error from the fetchOrgnization: " , error);
    //             }
                
    //         }
    //         fetchOrganization();
    //     }
        
    // } , [user])
    return organizationData ? "there is a orgnization for this user" : (
        <>
        
        <form className="max-w-sm mx-auto rounded-lg py-4 shadow-md">
            <h5 className="py-5 px-2 text-2xl font-bold text-center">Make Your Organization</h5>
            <label className="text-left block mb-2">Company Name</label>
            <input type="text" placeholder="Organization" required className="py-3 px-5 mb-4 outline-none w-full bg-slate-600 text-white my-2 rounded-md"/> 
            <label className="text-left block mb-2">Company Size</label>
            <input type="text" placeholder="1-100" required className="py-3 px-5 mb-4 outline-none w-full bg-slate-600 text-white my-2 
            rounded-md"/> <br />
            <label className="text-left block mb-2">Company WebSite</label>
            <input type="text" placeholder="www.Oragnization.com" required className="py-3 px-5 mb-4 outline-none w-full bg-slate-600 
            text-white my-2 rounded-md"/> <br />
            <label className="text-left block mb-2">Official E-Mail</label>
            <input type="email" placeholder="Organization@mail.ac.in" required className="py-3 px-5 mb-4 outline-none w-full bg-slate-600 text-white my-2 rounded-md"/> <br />
            <label className="text-left block mb-2">About Company</label>
            <textarea type="text-area" placeholder="Amazing Organization" required className="py-3 px-5 mb-4 outline-none w-full bg-slate-600 text-white my-2 rounded-md" rows={4}></textarea> <br />
            <label className="text-lg text-left block">Company Logo</label>
            <input type="file" placeholder="Companylogo" required className="py-3 px-5 mb-4 outline-none w-full bg-slate-600 text-white my-2 rounded-md"/><br />
            <button type="submit" className="bg-orange-500 hover:transition-colors hover:bg-orange-700 py-5 px-4 w-full cursor-pointer">Submit</button>
        </form>
        
        </>
    )
}