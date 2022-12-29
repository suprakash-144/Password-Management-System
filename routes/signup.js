var express = require("express");
var router = express.Router();
var userschema = require("../module/user");
var bcrypt = require("bcrypt");

// middlewares
function checkusername(req, res, next) {
  var Usernamedet = userschema.findOne({ username: req.body.Username });
  Usernamedet.exec((err, data) => {
    if (err) throw err;
    if (data) {
      return res.render("signup", {
        title: "PMS",
        msg: "Username already exist",
      });
    }
    next();
  });
}
function checkemail(req, res, next) {
  var useremaildet = userschema.findOne({ Email: req.body.Email });
  useremaildet.exec((err, data) => {
    if (err) throw err;
    if (data) {
      return res.render("signup", {
        title: "PMS",
        msg: "Email already exist",
      });
    }
    next();
  });
}

/* GET signup page. */
router.get("/", function (req, res, next) {
  // chceking if the user is already loged in
  var loginuser = localStorage.getItem("loginuser");
  if (loginuser) {
    res.redirect("/dashboard");
  }
  res.render("signup", { title: "PMS", msg: "" });
});

/* post request for  signup page. */
router.post("/", checkusername, checkemail, function (req, res, next) {
  // var name = req.body.name;
  var username = req.body.Username;
  var Email = req.body.Email;
  var Password = req.body.Password;
  var Passwordc = req.body.Passwordc;

  if (Password != Passwordc) {
    res.render("signup", {
      title: "PMS",
      msg: "passwords are not matching",
    });
  } else {
    var userdatils = new userschema({
      // Name: name ,
      username: username,
      Email: Email,
      Password: bcrypt.hashSync(Password, 10),
    });
    userdatils.save((err, data) => {
      if (err) throw err;
      res.render("signup", {
        title: "PMS",
        msg: "user registered succefully",
      });
    });
  }
});

module.exports = router;
