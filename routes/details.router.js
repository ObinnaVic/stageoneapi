const express = require("express");
const router = express.Router();

const controller = require("../controller/details.controller");

router.route("/").get(controller.detailsController);

module.exports = router;