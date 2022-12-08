var express = require("express");
var router = express.Router();

/*logout request  */
router.post("/", function (req, res, next) {
  //  removig the user tokens from localstorage
  localStorage.removeItem("usertoken");
  localStorage.removeItem("loginuser");
  res.redirect("/");
});

module.exports = router;
