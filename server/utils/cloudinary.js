const cloudinary = require("cloudinary").v2;
const fs = require("fs");
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})
const uploadOnCloudinary = async (localpath)=>{
    try {
        if(!localpath){
            return null;
        }
        const uploadMedia = await cloudinary.uploader.upload(localpath , {resource_type:"auto"});
        // console.log("public_id of the cloudinary " , uploadMedia.public_id);
        fs.unlinkSync(localpath);
        return uploadMedia;
    } catch (error) {
        fs.unlinkSync(localpath);
        console.log("error from cloudinary: " , error);
    }
}
module.exports = uploadOnCloudinary