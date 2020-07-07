const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/db1', {
    useNewUrlParser: true
 }).then(() => {
       console.log('Database sucessfully connected db1')
    },
    error => {
       console.log('Database could not connected: ' + error)
    }
 )
// mongoose.connect('mongodb://localhost:27017/db1', {useNewUrlParser: true});

let Employeedb1 = new Schema({
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


module.exports = mongoose.model('Employeedb1', Employeedb1);