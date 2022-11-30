var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  localStorage.removeItem("usertoken");
  localStorage.removeItem("loginuser");
  res.redirect("/");
});

module.exports = router;
