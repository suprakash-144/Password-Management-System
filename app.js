var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var signupRouter = require("./routes/signup");
var homeRouter = require("./routes/home");
var addnewpassword = require("./routes/addnewpassword");
var dashboard = require("./routes/dashboard");
var logoutmethod = require("./routes/logout");
var passwarddetails = require("./routes/password_details");
var viewdetail = require("./routes/viewpassworddetails");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes for the pages
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/signup", signupRouter);
app.use("/home", homeRouter);
app.use("/addnewpassword", addnewpassword);
app.use("/dashboard", dashboard);
app.use("/logout", logoutmethod);
app.use("/adddetail", passwarddetails);
app.use("/viewdetail", viewdetail);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
