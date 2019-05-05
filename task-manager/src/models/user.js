const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(input) {
      if (input.toLowerCase().includes('password')) {
        throw new Error('no password')
      }
    }
  }
});

module.exports = User;
