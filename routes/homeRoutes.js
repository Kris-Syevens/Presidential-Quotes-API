const express = require("express");
const router = express.Router();
const { getHomeRoute } = require("../controllers/homeControllers");

router.route("/").get(getHomeRoute);

module.exports = router;
