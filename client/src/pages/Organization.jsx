import { useEffect, useState } from "react";
import { useOrg } from "../context/OrganizationContext";
import { useAuth } from "../context/AuthContext";
export default function Organization (){
    const {user} = useAuth();
    const [userId , setUserId] = useState(null);

    //setting user if present 
    useEffect(()=>{
        if(user){
            setUserId(user._id)
        }else{
            setUserId(null);
        }
    } , [user])

    //local state for saving the required fileds
    const [organizationData , setOrganizationData] = useState({
        name:"",
        about:"",
        companySize:"",
        website:"",
        email:"",
        logo:null,
        user:userId
    });
    // console.log("the data from local state: " , organizationData);

    // converting local data to form data becaue of logo file 
    const formData = new FormData();
    formData.append("name" , organizationData.name);
    formData.append("about" , organizationData.about);
    formData.append("companySize" , organizationData.companySize);
    formData.append("website" , organizationData.website);
    formData.append("email" , organizationData.email);
    formData.append("logo" , organizationData.logo);
    formData.append("user" , organizationData.user);
    const {organization , newOrganization} = useOrg();

    //calling new organization function to create new organozation using organization context
    const handleSubmit = (event)=>{
        event.preventDefault();
        try {
            newOrganization(formData);
        } catch (error) {
            console.log("error from creating new organization: ", error);
        }
    }

    //checking if the loged in user already have organization or not
    useEffect(()=>{
        organization ? setOrganizationData(organization) : null;
        console.log("the organization data is from page: " , organization);
    } , [organization]);
    
    //static html and css
    return (
        <>
        
        <form className="max-w-sm mx-auto rounded-lg py-4 shadow-md" onSubmit={handleSubmit}>
            <h5 className="py-5 px-2 text-2xl font-bold text-center">Make Your Organization</h5>
            <label 
            className="text-left block mb-2">Company Name</label>
            <input type="text" placeholder="Organization" required 
            className="py-3 px-5 mb-4 outline-none w-full bg-slate-600 text-white my-2 rounded-md"
            value={organizationData.name}
            onChange={(event)=>setOrganizationData({...organizationData , name:event.target.value})}
            /> 

            <label className="text-left block mb-2">Company Size</label>
            <input type="text" placeholder="1-100" required 
            className="py-3 px-5 mb-4 outline-none w-full bg-slate-600 text-white my-2 rounded-md"
            value={organizationData.companySize}
            onChange={(event)=>setOrganizationData({...organizationData , companySize:event.target.value})}
            /> <br />

            <label className="text-left block mb-2">Company WebSite</label>
            <input type="text" placeholder="www.Oragnization.com" required 
            className="py-3 px-5 mb-4 outline-none w-full bg-slate-600 text-white my-2 rounded-md"
            value={organizationData.website}
            onChange={(event)=>setOrganizationData({...organizationData , website:event.target.value})}
            /> <br />

            <label className="text-left block mb-2">Official E-Mail</label>
            <input type="email" placeholder="Organization@mail.ac.in" required 
            className="py-3 px-5 mb-4 outline-none w-full bg-slate-600 text-white my-2 rounded-md"
            value={organizationData.email}
            onChange={(event)=>setOrganizationData({...organizationData , email:event.target.value})}
            /> <br />
            
            <label className="text-left block mb-2">About Company</label>
            <textarea type="text-area" placeholder="Amazing Organization" required 
            className="py-3 px-5 mb-4 outline-none w-full bg-slate-600 text-white my-2 rounded-md" rows={4}
            value={organizationData.about}
            onChange={(event)=>setOrganizationData({...organizationData , about:event.target.value})}
            ></textarea> <br />

            <label className="text-lg text-left block">Company Logo</label>
            <input type="file" placeholder="Companylogo" required 
            className="py-3 px-5 mb-4 outline-none w-full bg-slate-600 text-white my-2 rounded-md"
            onChange={(event)=>setOrganizationData({...organizationData , logo:event.target.files[0]})}
            /><br />

            <button type="submit" 
            className="bg-orange-500 hover:transition-colors hover:bg-orange-700 py-5 px-4 w-full cursor-pointer">Submit</button>
        </form>
        
        </>
    )
}