const express = require("express");
const Router = express.Router();
const applicationController = require("../Controllers/application.controller");
const {AuthMiddleware} = require("../middleware/auth.middleware");
Router.route("/").post(applicationController.newApplication);
Router.route("/").get(applicationController.getAllApplication);

Router.route("/user/:userId")
.get(AuthMiddleware , applicationController.getApplication)
.patch(AuthMiddleware , applicationController.updateApplication)
.delete(AuthMiddleware , applicationController.deleteApplication);

Router.route("/:applicationId")
.get(AuthMiddleware , applicationController.getApplication)
.patch(AuthMiddleware , applicationController.updateApplication)
.delete(AuthMiddleware , applicationController.deleteApplication);
module.exports = Router