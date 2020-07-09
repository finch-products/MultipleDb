const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var db2 = mongoose.connection.useDb("db2");

let Employeedb2 = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    designation: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
  },
  {
    collection: "employees",
  }
);

module.exports = db2.model("Employeedb2", Employeedb2);
