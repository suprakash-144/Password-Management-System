var express = require("express");
var router = express.Router();

// get new password adding page
router.get("/", function (req, res, next) {
  res.render("addnewpassword", { title: "newentry" });
});

module.exports = router;
