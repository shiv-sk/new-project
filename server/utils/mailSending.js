const nodemailer = require("nodemailer");
const { fetchFile } = require("./fecthFile");
exports.sendConfirmationMail = async(userEmail , organizationMail , jobTitle , userResume)=>{
    console.log("the username and password from env: " , process.env.USER);
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:process.env.USER, // your Gmail email
            pass:process.env.PASS // the 16-character app password generated
        }
    });
    
    const userMailOptions = {
        from:"natsudragneel771990@gmail.com",
        to:userEmail,
        subject:"Application is submitted",
        text:`Dear [Job Seeker's Name],
        Thank you for applying to the ${jobTitle} position at [Company Name]. We have successfully received your application.
        Here are the details of your application:
        - Position: ${jobTitle}
        - Company: [Company Name]
        - Submitted On: [Submission Date]
        - Job Location: [Job Location]

        Our hiring team is reviewing your profile and will contact you shortly if we feel you are a good match for the role. In the meantime, you can visit your profile to track the status of your application.

        If you have any questions or need to update your information, feel free to contact us at [natsudragneel771990@gmail.com].

        Thank you again for your interest in joining our team, and we wish you the best of luck in the hiring process!

        Best regards,  
        [Job-DashBoard]  
        [Company Website]  
        [natsudragneel771990@gmail.com]`,
    };
    let resumeBuffer;
    try {
        resumeBuffer = await fetchFile(userResume);
        // console.log("the resume is: " , resumeBuffer);
    } catch (error) {
        console.log("error while fetching resume: " , error);
        throw error;
    }
    const organizationMailOptions = {
        from:"natsudragneel771990@gmail.com",
        to:organizationMail,
        subject:`new application is received `,
        text:`Dear [Employer's Name],

        We wanted to inform you that a new application has been submitted for your job posting: [Job Title].

        Applicant details:
        - Name: [Job Seeker's Name]
        - Email: ${userEmail}    
        - Applied On: [Submission Date]
        - Resume: Link of Resume is Below

        You can review the full application on the employer dashboard by following this link: [Dashboard Link].

        If you have any questions or need assistance reviewing applications, please feel free to contact us at [natsudragneel771990@gmail.com].

        Thank you for using [Your Platform Name] to find your next great hire.

        Best regards,  
        Job-DashBoard  
        [Company Website]  
        natsudragneel771990@gmail.com`,
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
    // console.log("User confirmation email sent: ", userInfo);
   } catch (error) {
    console.error("Error sending user confirmation email: ", error);
   }

   try {
    const orgInfo = await transport.sendMail(organizationMailOptions);
    // console.log("Organization notification email sent: ", orgInfo);
   } catch (error) {
    console.error("Error sending organization notification email: ", error);
   }
   
}
