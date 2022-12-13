var express = require("express");
var router = express.Router();
var passdomain = require("../module/password-catogery");
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
    });
  });
});
router.post("/", function (req, res, next) {
  res.render("addpassworddetails", { title: "PMS", data: [] });
});
module.exports = router;
