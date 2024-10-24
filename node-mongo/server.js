const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const signinRoutes = require("./routes/singinRoutes");
const hellopage = require("./routes/helloRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
db.connect();

// Load routes
app.use("/api/contacts", contactRoutes);
app.use("/api/signin", signinRoutes);
app.use("/", hellopage);

// Default error handling for unhandled routes
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Create a Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
