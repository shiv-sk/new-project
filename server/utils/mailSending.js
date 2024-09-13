const nodemailer = require("nodemailer");
const { fetchFile } = require("./fecthFile");
exports.sendConfirmationMail = async(userEmail , organizationMail , jobTitle , userResume)=>{
    console.log("the username and password from env: " , process.env.USER);
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:process.env.USER, // your Gmail email
            pass: "hpvj rksx jwmi ytmo" // the 16-character app password generated
        }
    });
    
    const userMailOptions = {
        from:"natsudragneel771990@gmail.com",
        to:userEmail,
        subject:"Application is submitted",
        text:"your application is submitted to organization you will shortly receieve official meesage",
    };
    let resumeBuffer;
    try {
        resumeBuffer = await fetchFile(userResume);
        console.log("the resume is: " , resumeBuffer);
    } catch (error) {
        console.log("error while fetching resume: " , error);
        throw error;
    }
    const organizationMailOptions = {
        from:"natsudragneel771990@gmail.com",
        to:organizationMail,
        subject:`new application is received `,
        text:`you have received the new job application for the job ${jobTitle}`,
        html:"<h1>applied user resume is</h1>",
        attachments:[
            {
                filename:"resume.pdf",
                content:resumeBuffer,
                contentType:"application/pdf",
                 
            }
        ]
    };

   try {
    const userInfo = await transport.sendMail(userMailOptions);
    console.log("User confirmation email sent: ", userInfo);
   } catch (error) {
    console.error("Error sending user confirmation email: ", error);
   }

   try {
    const orgInfo = await transport.sendMail(organizationMailOptions);
    console.log("Organization notification email sent: ", orgInfo);
   } catch (error) {
    console.error("Error sending organization notification email: ", error);
   }
   
}
