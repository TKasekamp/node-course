const mongoose = require('mongoose');
// const validator = require('validator');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager-api';


mongoose.connect(connectionURL + '/' + databaseName, {
  useNewUrlParser: true, useCreateIndex: true
});


// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true
//   },
//   age: {
//     type: Number
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 7,
//     validate(input) {
//       if (input.toLowerCase().includes('password')) {
//         throw new Error('no password')
//       }
//     }
//   }
// });

// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//     trim: true,
//     required: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   }
// });
//
// const t = new Task({
//   description: '   Hello world  asdasd '
// });
//
// t.save().then(() => {
//   console.log(t)
// }).catch(error => {
//   console.log('error', error)
// });

// const me = new User({
//   name: 'Tõnis',
//   age: 25,
//   password: 'password'
// });
//
// me.save().then(() => {
//   console.log(me)
// }).catch(error => {
//   console.log('error', error)
// })
