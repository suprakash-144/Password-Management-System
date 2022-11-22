var userschema = require("../../module/user");
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
module.exports = checkemail;
