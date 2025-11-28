/**
 * Configuration file for DB connection.
 */

// require mongoose
const mongoose = require("mongoose");

// connect to db
mongoose.connect("mongodb://localhost/tarapp");

// acquire connection
const db = mongoose.connection;

// connection error
db.on("error", error.console.bind(console, "Error in mongodb connection."));

// connection success
db.once("open", function () {
  console.log("Mongodb connection successful.");
});
