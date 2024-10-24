const bcrypt = require("bcrypt");
const Signin = require("../models/signin");

// User creation function example
exports.createSignin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await Signin.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Directly store the plain text password
    const signin = new Signin({
      email,
      password, // Store the plain password
    });

    const savedSignin = await signin.save();
    res.status(201).json(savedSignin);
  } catch (err) {
    console.error("Error creating signin:", err.message);
    res.status(500).json({ message: "Fail!", error: err.message });
  }
};

// Verify password for login
exports.verifySignin = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Received email:", email);
    console.log("Received password:", password);

    // Find the user by email
    const user = await Signin.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", user);

    // Compare the incoming plain text password with the stored password
    const isMatch = password === user.password;
    console.log("Password match result for user:", email, "->", isMatch);

    if (!isMatch) {
      console.log("Password mismatch for user:", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("Password match successful for user:", email);
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Error verifying signin:", err.message);
    res.status(500).json({ message: "Error during login", error: err.message });
  }
};

// Get a specific signin entry by ID
exports.getSignin = (req, res) => {
  Signin.findById(req.params.id)
    .select("-__v")
    .then((signin) => {
      res.status(200).json(signin);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Signin not found with id " + req.params.id,
          error: err,
        });
      }
      return res.status(500).send({
        message: "Error retrieving signin with id " + req.params.id,
        error: err,
      });
    });
};

// Get all signin entries
exports.signins = (req, res) => {
  Signin.find()
    .select("-__v")
    .then((signininfos) => {
      res.status(200).json(signininfos);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};
