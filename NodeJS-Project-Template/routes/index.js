/**
 * Starting point for all routes.
 */

// require express
const express = require("express");

// getting router
const router = express.Router();

// getting actions for router from controllers
const indexController = require("../controllers/index");
router.get("/", indexController.home);

// exporting router
module.exports = router;
