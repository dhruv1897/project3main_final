const mongoose = require("mongoose");

const connect = () => {
  if (!process.env.DATABASE) {
    console.error("DATABASE environment variable is not defined.");
    process.exit(1);
  }

  mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection
    .on("open", () => {
      console.log("Mongoose connection open");
    })
    .on("error", (err) => {
      console.error(`Connection error: ${err.message}`);
    });
};

module.exports = { connect };
