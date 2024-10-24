// routes/helloRoutes.js
const express = require("express");
const router = express.Router();

// Hello route
router.get("/", (req, res) => {
  res.send("Hello, the server is running!");
});

module.exports = router;
