const express = require("express");
const Router = express.Router();
const profileController = require("../Controllers/profile.controller");
const upload = require("../middleware/multer.middleware");
const fileMiddleware = upload.fields([{name:"resume" , maxCount: 1}])
Router.route("/").post(fileMiddleware , profileController.newProfile);
Router.route("/:userId").get(profileController.userProfile).patch(fileMiddleware, profileController.updateProfile).delete(profileController.deleteProfile);
module.exports = Router