const express = require("express");
const Router = express.Router();
const domainController = require("../Controllers/domain.controller");
Router.route("/").post(domainController.newDomain);
Router.route("/").get(domainController.getAllDomain);
Router.route("/:domainId").get(domainController.getDomain).patch(domainController.updateDomain).delete(domainController.deleteDomain);
module.exports = Router;