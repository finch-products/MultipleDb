const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Employeedb1 = new Schema(
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

var db1 = mongoose.connection.useDb("db1");

module.exports = db1.model("Employeedb1", Employeedb1);
