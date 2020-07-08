const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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


module.exports = mongoose.model('Employeedb2', Employeedb2);
