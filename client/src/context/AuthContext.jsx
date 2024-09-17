/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext , useContext, useEffect, useState } from "react";
import {baseurl , postReq } from "../utils/apiCalls"
// import { useNavigate } from "react-router-dom";
const Authcontext = createContext({
    user:null,
    register:()=>{},
    login:()=>{},
    logout:()=>{}
})

const useAuth = ()=>useContext(Authcontext);
const AuthProvider = ({children})=>{
    // const navigate = useNavigate();
    const [isloading , setIsLoading] = useState(true);
    const [isError , setIsError] = useState(null);
    const [user , setUser] = useState(null);
    const [accessToken , setAccessToken] = useState(null);
    

    const register = async(data)=>{
        try {
            const response = await postReq(`${baseurl}/user/register` , data);
            const {accessToken , user} = response;
            accessToken ? setAccessToken(accessToken) : null;
            user ? setUser(user) : null
            user ? localStorage.setItem("User" , JSON.stringify(user)) : null;
            accessToken ? localStorage.setItem("AccessToken" , accessToken) : null;
        } catch (error) {
            setIsError(error);
            console.log("error from contextApi: " , error);
        }finally{
            setIsLoading(false);
        }
    }

    const login = async(data)=>{
        try {
            const response = await postReq(`${baseurl}/user/login` , data);
            const {accessToken , user} = response.data;
            accessToken ? setAccessToken(accessToken) : null;
            user ? setUser(user) : null;
            console.log("printing the user to save in localstorage : " , user);
            user ? localStorage.setItem("User" , JSON.stringify(user)) : null;
            accessToken ? localStorage.setItem("AccessToken" , accessToken) : null;
            // navigate("/");
            console.log("the response from the AuthContext: " , response);
        } catch (error) {
            setIsError(error);
            console.log("error from contextApi " , error);
        }finally{
            setIsLoading(false);
        }
    }

    const logout = async()=>{
        try {
            user ? setUser(null) : null;
            accessToken ? setAccessToken(null) : null;
            localStorage.clear();
        } catch (error) {
            console.log("Error from contextApi: " , error);
            setIsError(error);
        }finally{
            setIsLoading(false);
        }
    }
    useEffect(()=>{
        const storeUser = JSON.parse(localStorage.getItem("User"));
        // JSON.parse(storeUser);
        storeUser ? setUser(storeUser) : null;
        
    } , [])
    return(
        <Authcontext.Provider value={{register , login , logout , user , isError , isloading , setIsLoading , setIsError}}>
            {children}
        </Authcontext.Provider>
    )
}

export {Authcontext , AuthProvider , useAuth}