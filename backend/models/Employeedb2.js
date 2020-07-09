const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
var db2 = mongoose.connection.useDb("db2");
=======
// mongoose.connect('mongodb://localhost:27017/db2', {
//     useNewUrlParser: true
//  }).then(() => {
//        console.log('Database sucessfully connected db2')
//     },
//     error => {
//        console.log('Database could not connected: ' + error)
//     }
//  )

// mongoose.connect('mongodb://localhost:27017/db2', {useNewUrlParser: true});

let Employeedb2 = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'employees'
})
>>>>>>> d717a9115ca35619618541ee30321e324ff153c8

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

<<<<<<< HEAD
module.exports = db2.model("Employeedb2", Employeedb2);
=======
module.exports = mongoose.model('Employeedb2', Employeedb2);
>>>>>>> d717a9115ca35619618541ee30321e324ff153c8
