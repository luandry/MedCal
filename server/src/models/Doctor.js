const mongoose = require('mongoose')

const Doctor = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    default: ''
  },
  photoUrl: {
    type: String,
    trim: true,
    default: ''
  }
})

module.exports = mongoose.model('Doctor', Doctor)
