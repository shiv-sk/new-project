const express = require("express");
const Router = express.Router;
const jobTypeController = require("../Controllers/jobType.controller");
Router.route("/").post(jobTypeController.newJobType);
Router.route("/").get(jobTypeController.newJobType);
Router.route("/:jobTypeId").delete(jobTypeController.deleteJobType).get(jobTypeController.getJobType);
modules.exports = Router;