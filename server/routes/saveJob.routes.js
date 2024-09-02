const express = require("express");
const Router = express.Router();
const saveJobController = require("../Controllers/savejobs.controller");
Router.route("/").post(saveJobController.saveNewJob);
Router.route("/:user").get(saveJobController.getSaveJob).patch(saveJobController.updateSaveJob).delete(saveJobController.deleteSaveJob);
module.exports = Router