var userschema = require("../../module/user");
function checkusername(req, res, next) {
  var Usernamedet = userschema.findOne({ username: req.body.Username });
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
module.exports = checkusername;
