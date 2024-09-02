const express = require("express");
const Router = express.Router();
const userController = require("../Controllers/user.controller");
Router.route("/register").post(userController.register);
Router.route("/login").post(userController.login);
Router.route("/").get(userController.getAllUsers);
module.exports = Router