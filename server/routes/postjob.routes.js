const express = require("express");
const Router = express.Router();
const PostJobController = require("../Controllers/postjob.controller");
const {AuthMiddleware} = require("../middleware/auth.middleware");
Router.route("/").get(PostJobController.getAllJobPost);
Router.route("/").post(PostJobController.newJob);
Router.route("/:JobPostId")
.get(AuthMiddleware , PostJobController.getJobPost)
.patch(AuthMiddleware , PostJobController.updateJobPost)
.delete(AuthMiddleware , PostJobController.deleteJobPost);
Router.route("/jobs/filter" , PostJobController.jobsByFilter);

Router.route("/organization/:organizationId")
.get(AuthMiddleware , PostJobController.getJobPost)
.patch(AuthMiddleware , PostJobController.updateJobPost)
.delete(AuthMiddleware , PostJobController.deleteJobPost);
module.exports = Router