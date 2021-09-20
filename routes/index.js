const { response } = require("express");
const express = require("express");
const router = express.Router();

// WELCOME PAGE
router.get("/", (req, res) => {
  res.render("welcome");
});

// DASHBOARD
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
