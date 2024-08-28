const express = require("express");
const app = express();
const cors = require("cors");
const allowedOrigins = [];
const corsOption = {};

//configuration
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static("static"));
app.use(cors(corsOption));

module.exports = app;