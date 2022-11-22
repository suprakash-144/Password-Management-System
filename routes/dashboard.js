const bodyParser = require("body-parser");
var express = require("express");
var router = express.Router();

/* GET request for dashboard page. */
router.get("/", function (req, res, next) {
  res.render("dashboard", { title: "dashbord", data: [] });
});

module.exports = router;
