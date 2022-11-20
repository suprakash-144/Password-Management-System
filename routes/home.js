const bodyParser = require("body-parser");
var express = require("express");
var router = express.Router();
var urlencoded = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { title: "home", data: [] });
});
router.post("/", urlencoded, function (req, res, next) {
  res.render("home", { title: "home", data: [] });
});

module.exports = router;
