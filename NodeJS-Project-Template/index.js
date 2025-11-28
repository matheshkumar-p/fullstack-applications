/**
 * Starting point for the application.
 */

// using strict mode
"use script";

// require express
const express = require("express");

// port declaration
const port = 8000;

// express app creation
const app = express();

// require and use express layouts
const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);

// extract styles & scripts from sub page into layout.
app.set("layout extractStyles", true);
app.set("layout extractScript", true);

// access to static folders
app.use(express.static("./assets"));

// setting template/view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// using routes
app.use("/", require("./routes"));

// establishing connection with port
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in server starting : ${err}`);
  }
  console.log(`Server successfully running on port : ${port}`);
});
