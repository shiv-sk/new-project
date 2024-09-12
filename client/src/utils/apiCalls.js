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
        console.log("error from apicalls: " , error);
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
        console.log("error from api call" , error);
    }
}