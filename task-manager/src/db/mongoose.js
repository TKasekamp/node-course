const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager-api';


mongoose.connect(connectionURL + '/' + databaseName, {
  useNewUrlParser: true, useCreateIndex: true
});

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const t = new Task({
  description: 'Hello',
  completed: false
});

t.save().then(() => {
  console.log(t)
}).catch(error => {
  console.log('error', error)
});

// const me = new User({
//   name: 'Tõnis',
//   age: 25
// });
//
// me.save().then(() => {
//   console.log(me)
// }).catch(error => {
//   console.log('error', error)
// })
