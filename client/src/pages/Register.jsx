import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext";

export default function Register(){
    const {register} = useAuth();
    const [role , setRole] = useState("");
    const navigate = useNavigate();
    // console.log("the role of the user: " , role);
    const [regitserData , setRegisterData] = useState({
        name:"",
        email:"",
        password:"",
        role:""
    })
    useEffect(()=>{
        setRegisterData((prevdata)=>({
            ...prevdata ,
            role:role
        }))
    } , [role])
    console.log("the register data: " , regitserData);
    const handleRegister = async(e)=>{
        e.preventDefault();
        try {
            register(regitserData);
            if(role === "Employer"){
                navigate("/organization");
            }
            else{
                navigate("/Profile")
            }
        } catch (error) {
            console.log("error from register page: " , error);
        }
    }
    return (
        <form className="mx-auto text-center mt-6 shadow-md rounded-lg p-4 max-w-sm" onSubmit={handleRegister}>
            <h1 className="text-center font-bold text-2xl mb-4">Register</h1>
            <input type="text" placeholder="username@123" required className="my-2 outline-none bg-slate-600 rounded w-full focus:outline-none focus: px-2 py-4" onChange={(e)=>setRegisterData({...regitserData , name:e.target.value})} /><br />
            <input type="email" placeholder="example@email.com" required className="my-2 outline-none bg-slate-600 rounded w-full focus:outline-none focus: px-2 py-4" onChange={(e)=>setRegisterData({...regitserData , email:e.target.value})}/><br />
            <input type="password" placeholder="pass@123" required className="my-2 outline-none bg-slate-600 rounded w-full focus:outline-none focus: px-2 py-4" onChange={(e)=>setRegisterData({...regitserData , password:e.target.value})}/><br />
            <div className="flex justify-center mx-4 my-4 shadow-lg">
                <button type="button" className="px-6 py-4 bg-orange-600 hover:transition-colors hover:bg-orange-700 rounded-md mx-2" 
                onClick={()=>setRole("JobSeeker")}>
                JobSeeker</button>
                <button type="button" className="px-6 py-4 bg-orange-600 hover:transition-colors hover:bg-orange-700 rounded-md shadow-md" 
                onClick={()=>setRole("Employer")}>Employer</button>
            </div>
            <p>Already have account? <Link to={"/login"} className="text-orange-400 hover:text-orange-600 hover:border-b-2">
            Login</Link></p>
            <button type="submit" className="w-full bg-orange-600 p-3 rounded text-xl mt-2 text-white hover:bg-orange-700 transition-colors">Register</button>
        </form>
    )
} 