var express = require("express");
var router = express.Router();
var passdomain = require("../module/password-catogery");
var passdetail = require("../module/password_details");
var chechklogintoken = require("../module/chechklogintoken");

/* GET password details adding  page. */
router.get("/", chechklogintoken, function (req, res, next) {
  var loginuser = localStorage.getItem("loginuser");
  passdomain.find({}, (err, data) => {
    if (err) throw err;

    res.render("addpassworddetails", {
      title: "PMS",
      data: data,
      loginuser: loginuser,
      Succes: "",
    });
  });
});
router.post("/", chechklogintoken, function (req, res, next) {
  var loginuser = localStorage.getItem("loginuser");
  var passdetails = new passdetail({
    Domain: req.body.Domain,
    Username: req.body.username,
    Password: req.body.passward,
  });
  passdetails.save((err, data) => {
    if (err) throw err;
    res.redirect("/adddetail");
  });
});
module.exports = router;
