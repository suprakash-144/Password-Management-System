var express = require("express");
var router = express.Router();
var passdomain = require("../module/password-catogery");
var passdetail = require("../module/password_details");
var chechklogintoken = require("../module/chechklogintoken");

router.get("/", chechklogintoken, function (req, res, next) {
  var loginuser = localStorage.getItem("loginuser");
  passdetail.find({}, (err, data) => {
    if (err) throw err;

    res.render("viewpassdetail", {
      title: "PMS",
      data: data,
      loginuser: loginuser,
      Succes: "",
    });
  });
});

router.get("/edit/:id", chechklogintoken, function (req, res, next) {
  var loginuser = localStorage.getItem("loginuser");
  var passid = req.params.id;
  var findid = passdomain.findById(passid);
  findid.exec((err, data) => {
    if (err) throw err;
    //rendering the edit page with the domain data
    res.render("edit_passworddetails", {
      title: "PMS",
      data: data,
      loginuser: loginuser,
    });
  });
});

//post request to edit the domain

router.post("/edit", chechklogintoken, function (req, res, next) {
  var updateid = req.body.id;
  var updateddomain = passdetail.findByIdAndUpdate(updateid, {
    //seting the new domain name
    Domain: req.body.Domain,
  });
  updateddomain.exec((err, data) => {
    if (err) throw err;
    res.redirect("/viewdetail");
  });
});

// request to delete the domain from the database

router.get("/delete/:id", chechklogintoken, function (req, res, next) {
  var delpassdomain = passdetail.findByIdAndDelete(req.params.id);
  delpassdomain.exec((err) => {
    if (err) throw err;
    res.redirect("/viewdetail");
  });
});
module.exports = router;
