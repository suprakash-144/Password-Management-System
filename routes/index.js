var express = require("express");
var router = express.Router();

/* GET login page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Login" });
});
router.post("/", function (req, res, next) {
  res.render("index", { title: "Login" });
});

module.exports = router;
