const bodyParser = require("body-parser");
var express = require("express");
var router = express.Router();
var chechklogintoken = require("../module/chechklogintoken");

/* GET request for dashboard page. */
router.get("/", chechklogintoken, function (req, res, next) {
  var loginuser = localStorage.getItem("loginuser");
  // var Name = localStorage.getItem("Name");
  res.render("dashboard", { title: "PMS", data: [], loginuser: loginuser });
});

module.exports = router;
