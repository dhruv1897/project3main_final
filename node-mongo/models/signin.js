const mongoose = require("mongoose");

const SigninSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"], // Email format validation
  },
  password: {
    type: String,
    required: true,
    minlength: 4, // Minimum length for passwords
  },
});

module.exports = mongoose.model("Signin", SigninSchema);
