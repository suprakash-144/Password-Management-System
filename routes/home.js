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

// post request in home page
// router.post("/", function (req, res, next) {
//   res.render("home", { title: "PMS", data: [] });
// });

// Get request for editing the domains

router.get("/update/:id", chechklogintoken, function (req, res, next) {
  var loginuser = localStorage.getItem("loginuser");
  var passid = req.params.id;
  var findid = passdomain.findById(passid);
  findid.exec((err, data) => {
    if (err) throw err;
    //rendering the edit page with the domain data
    res.render("editdomain", {
      title: "PMS",
      data: data,
      loginuser: loginuser,
    });
  });
});

//post request to edit the domain

router.post("/update", chechklogintoken, function (req, res, next) {
  var updateid = req.body.id;
  var updateddomain = passdomain.findByIdAndUpdate(updateid, {
    //seting the new domain name
    Domain: req.body.Domain,
  });
  updateddomain.exec((err, data) => {
    if (err) throw err;
    res.redirect("/home");
  });
});

// request to delete the domain from the database

router.get("/delete/:id", chechklogintoken, function (req, res, next) {
  var delpassdomain = passdomain.findByIdAndDelete(req.params.id);
  delpassdomain.exec((err) => {
    if (err) throw err;
    res.redirect("/home");
  });
});
module.exports = router;
