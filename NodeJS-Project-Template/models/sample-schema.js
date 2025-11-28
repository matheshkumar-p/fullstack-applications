/**
 * Schema design for employee document.
 */

// require mongoose from config
const mongoose = require("mongoose");

// schema creation
const employeeSchema = new mongoose.Schema({
  eName: {
    type: String,
    required: true,
  },
  eMailId: {
    type: String,
    required: true,
  },
  ePhone: {
    type: String,
    required: true,
  },
});

// document creation
const Employee = mongoose.model("Employee", employeeSchema);

// exporting document
module.exports = Employee;
