const mongoose = require('mongoose');
// const validator = require('validator');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager-api';


mongoose.connect(connectionURL + '/' + databaseName, {
  useNewUrlParser: true, useCreateIndex: true
});

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
