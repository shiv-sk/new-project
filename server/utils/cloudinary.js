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
        uploadMedia.url(uploadMedia.public_id , {
            transformation:[
                {
                    quality:"auto",
                    fetch_format:"auto"
                },
                {
                    width:"500",
                    gravity:"auto",
                    crop:"fill"
                }
            ]
        })
        fs.unlinkSync(localpath);
        return uploadMedia;
    } catch (error) {
        fs.unlinkSync(localpath);
        console.log("error from cloudinary: " , error);
    }
}
module.exports = uploadOnCloudinary