var express = require("express");
var chechklogintoken = require("../module/chechklogintoken");
var router = express.Router();
var passdomain = require("../module/password-catogery");
// get new password adding page
router.get("/", chechklogintoken, function (req, res, next) {
  var loginuser = localStorage.getItem("loginuser");
  res.render("addnewpassword", { title: "PMS", loginuser: loginuser, msg: "" });
});

router.post("/", function (req, res, next) {
  var loginuser = localStorage.getItem("loginuser");
  var newdomain = new passdomain({
    Domain: req.body.Domain,
  });
  newdomain.save((err, data) => {
    if (err) throw err;
    res.render("addnewpassword", {
      title: "PMS",
      loginuser: loginuser,
      msg: "New domain addded",
    });
  });
});

module.exports = router;
