var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var userschema = require("../module/user");

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

/* GET login page. */

router.get("/", function (req, res, next) {
  // chceking if the user is already loged in
  var loginuser = localStorage.getItem("loginuser");
  if (loginuser) {
    //if the user is already loged in redirecting the user to dashboard
    res.redirect("/dashboard");
  }
  //if not loged in then opening the login page
  res.render("index", { title: "PMS", msg: "" });
});

// login page submition request

router.post("/", function (req, res, next) {
  var username = req.body.username;
  var password = req.body.Password;
  var userdetails = userschema.findOne({ username: username });
  userdetails.exec((err, data) => {
    if (err) throw err;
    var userid = data._id;

    if (bcrypt.compareSync(password, data.Password)) {
      var token = jwt.sign({ userid: userid }, "loginid");
      localStorage.setItem("usertoken", token);
      localStorage.setItem("loginuser", username);
      res.redirect("/dashboard");
    } else {
      res.render("index", {
        title: "PMS",
        msg: "Username and Password didn't match",
      });
    }
  });
});

module.exports = router;
