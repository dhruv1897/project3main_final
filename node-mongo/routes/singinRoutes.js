const express = require("express");
const router = express.Router(); // Create a router instance
const signins = require("../controllers/signin.controller");

// Create a new signin
router.post("/", signins.createSignin);

// Verify signin (login)
router.post("/verify", signins.verifySignin);

// Get signin by ID
router.get("/:id", signins.getSignin);

// Get all signins
router.get("/", signins.signins);

module.exports = router; // Export the router
