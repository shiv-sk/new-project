const axios = require("axios");
exports.fetchFile = async(resumeUrl)=>{
    try {
        
        const response = await axios({
            url:resumeUrl,
            method:"GET",
            responseType:"arraybuffer"
        })
        return response.data;
    } catch (error) {
        console.log("error from fetching resume url: " , error);
        throw error;
    }
}