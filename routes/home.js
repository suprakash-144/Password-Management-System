var express = require("express");
var router = express.Router();
var passdomain = require("../module/password-catogery");
var chechklogintoken = require("../module/chechklogintoken");

/* GET home page. */
router.get("/", chechklogintoken, function (req, res, next) {
  var loginuser = localStorage.getItem("loginuser");
  passdomain.find({}, (err, data) => {
    if (err) throw err;

    res.render("home", { title: "PMS", data: data, loginuser: loginuser });
  });
});
router.post("/", function (req, res, next) {
  res.render("home", { title: "PMS", data: [] });
});

router.get("/update/:id", chechklogintoken, function (req, res, next) {
  var loginuser = localStorage.getItem("loginuser");
  var passid = req.params.id;
  var findid = passdomain.findById(passid);
  findid.exec((err, data) => {
    if (err) throw err;
    res.render("editdomain", {
      title: "PMS",
      data: data,
      loginuser: loginuser,
    });
  });
});
router.post("/update", function (req, res, next) {
  var updateid = req.body.id;
  var updateddomain = passdomain.findByIdAndUpdate(updateid, {
    Domain: req.body.Domain,
  });
  updateddomain.exec((err, data) => {
    if (err) throw err;
    res.redirect("/home");
  });
});

router.get("/delete/:id", chechklogintoken, function (req, res, next) {
  var delpassdomain = passdomain.findByIdAndDelete(req.params.id);
  delpassdomain.exec((err) => {
    if (err) throw err;
    res.redirect("/home");
  });
});
module.exports = router;
