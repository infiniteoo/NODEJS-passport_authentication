// INITIALIZE DOTENV
require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");

const app = express();

// DB CONFIG
const db = require("./config/keys").mongoURI;

// CONNECT TO MONGODB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongoDB connected..."))
  .catch((err) => console.log(err));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// BODY PARSER
app.use(express.urlencoded({ extended: false }));

// EXPRESS SESSION
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// CONNECT FLASH
app.use(flash());

// GLOBAL VARS
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

const PORT = process.env.PORT || 5000;

// ROUTES
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
