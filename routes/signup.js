var express = require("express");
var router = express.Router();
var userschema = require("../module/user");
var bcrypt = require("bcrypt");

function checkusername(req, res, next) {
  var Usernamedet = userschema.findOne({ username: req.body.Email });
  Usernamedet.exec((err, data) => {
    if (err) throw err;
    if (data) {
      return res.render("signup", {
        title: "signup",
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
        title: "signup",
        msg: "Email already exist",
      });
    }
    next();
  });
}

/* GET signup page. */
router.get("/", function (req, res, next) {
  res.render("signup", { title: "signup", msg: "" });
});

/* post request for  signup page. */
router.post("/", checkusername, checkemail, function (req, res, next) {
  var username = req.body.Username;
  var Email = req.body.Email;
  var Password = req.body.Password;
  var Passwordc = req.body.Passwordc;

  if (Password != Passwordc) {
    res.render("signup", {
      title: "signup",
      msg: "passwords are not matching",
    });
  } else {
    var userdatils = new userschema({
      username: username,
      Email: Email,
      Password: bcrypt.hashSync(Password, 10),
    });
    userdatils.save((err, data) => {
      if (err) throw err;
      res.render("signup", {
        title: "signup",
        msg: "user registered succefully",
      });
    });
  }
});

module.exports = router;
