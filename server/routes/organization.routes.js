const express = require("express");
const Router = express.Router();
const organizationController = require("../Controllers/organization.controller");
const upload = require("../middleware/multer.middleware");
const {AuthMiddleware} = require("../middleware/auth.middleware");
const fileMiddleware = upload.fields([{name:"logo" , maxCount: 1}])
Router.route("/").post(fileMiddleware , organizationController.newOrganization);
Router.route("/").get(organizationController.getAllOrganization);

Router.route("/:organizationId")
.get(AuthMiddleware, organizationController.getOrganization)
.patch(AuthMiddleware, organizationController.updateOrganization)
.delete(AuthMiddleware, organizationController.deleteOrganization);

Router.route("/user/:user")
.get(AuthMiddleware, organizationController.getOrganization)
.patch(AuthMiddleware, organizationController.updateOrganization)
.delete(AuthMiddleware, organizationController.deleteOrganization);

module.exports = Router;