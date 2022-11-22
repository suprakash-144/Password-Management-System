var userschema = require("../../module/user");
var jwt = require("jsonwebtoken");

function checktoken(req, res, next) {
  try {
    var userid = localStorage.getItem("loginid");
    jwt.verify();
  } catch (error) {
    throw err;
  }
  next();
}

module.exports = checktoken;
