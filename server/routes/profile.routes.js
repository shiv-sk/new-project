const express = require("express");
const Router = express.Router();
const profileController = require("../Controllers/profile.controller");
Router.route("/").post(profileController.newProfile);
Router.route("/:user").get(profileController.userProfile).patch(profileController.updateProfile).delete(profileController.deleteProfile);
module.exports = Router