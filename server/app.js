const express = require("express");
const app = express();
const cors = require("cors");
const allowedOrigins = [];
const corsOption = {};
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

module.exports = app;