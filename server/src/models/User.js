const mongoose = require('mongoose')

const User = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    default: ''
  },
  password: {
    type: String,
    trim: true
  },
  age: {
    type: Number,
    default: 0
  },
  email: {
    type: String,
    trim: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    trim: true,
    default: ''
  }
})

module.exports = mongoose.model('User', User)
