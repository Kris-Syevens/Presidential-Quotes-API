const express = require("express");
const router = express.Router();
const {
  getAllPresidents,
  getPresident,
} = require("../controllers/apiControllers");

router.route("/all").get(getAllPresidents);

// router.route("/:name").get(getPresident);

module.exports = router;
