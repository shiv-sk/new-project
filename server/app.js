const express = require("express");
const app = express();
const cors = require("cors");
const allowedOrigins = ["http://localhost:5173"];
const corsOption = {
    origin:function(origin , callback){
        if(!origin || allowedOrigins.includes(origin)){
            callback(null , true);
        }
        else{
            console.log("blocked by origin: " , origin)
        }
    },
    credentials:true,
    optionsSuccessStatus: 200
};
const cookieParser = require("cookie-parser");

//configuration
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static("static"));
app.use(cors(corsOption));
app.use(cookieParser());


//user routes
const userRoutes = require("./routes/user.routes");
app.use("/api/v1/user" , userRoutes);

//organization routes
const organizationRoutes = require("./routes/organization.routes");
app.use("/api/v1/organization" , organizationRoutes);

//domain routes
const domainRoutes = require("./routes/domain.routes");
app.use("/api/v1/domain" , domainRoutes);

//jobType-routes
const jobTypeRoutes = require("./routes/jobType.routes");
app.use("/api/v1/jobType" , jobTypeRoutes);

//post-job routes
const postJobRoutes = require("./routes/postjob.routes");
app.use("/api/v1/postJob" , postJobRoutes);

//profile-routes
const profileRoutes = require("./routes/profile.routes");
app.use("/api/v1/profile" , profileRoutes);

//saveJob-routes
const saveJobRoutes = require("./routes/saveJob.routes");
app.use("/api/v1/saveJob" , saveJobRoutes);

//Application-routes
const applicationRoutes = require("./routes/application.routes");
app.use("/api/v1/application" , applicationRoutes);

module.exports = app;