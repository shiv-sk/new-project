import axios from "axios"
export const baseurl = "http://localhost:4000/api/v1";
export const getReq = async(url)=>{
    try {
        const response = await axios({
            method:"get",
            url,
            withCredentials:true,
        })
        return response.data;
    } catch (error) {
        console.log("error from get api call: " , error);
    }
}

export const postReq = async(url , data , isFormData = false)=>{
    try {
        const response = await axios({
            method:"post",
            url,
            data,
            withCredentials:true,
            headers:{"Content-Type":isFormData ? "multipart/form-data" : "application/json"}
        })
        return response.data
    } catch (error) {
        console.log("error from post api call" , error);
    }
}

export const postnpatchReq = async(url , data , method , isFormData = false)=>{
    try {
        const response = await axios({
            method,
            url,
            data,
            withCredentials:true,
            headers:{"Content-Type":isFormData ? "multipart/form-data" : "application/json"}
        })
        return response.data
    } catch (error) {
        console.log("error from post and patch api call" , error);
    }
}

export const getndeleteReq = async(url , method)=>{
    try {
        const response = await axios({
            method,
            url,
            withCredentials:true,
        })
        return response.data;
    } catch (error) {
        console.log("error from get and delete api call: " , error);
    }
}


export const deleteReq = async(url)=>{
    try {
        const response = await axios({
            method:"delete",
            url,
            withCredentials:true,
        })
        return response.data
    } catch (error) {
        console.log("error from delete api call: " , error);
    }
}

export const patchReq = async(url , data , isFormData = false)=>{
    try {
        const response = await axios({
            method:"patch",
            url,
            data,
            headers:{
                "Content-Type":isFormData ? "multipart/form-data" : "application/json"
            },
            withCredentials:true,
        })
        return response.data;
    } catch (error) {
        console.log("error from patch api call: " , error);
    }
}