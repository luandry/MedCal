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
  },
  bio: {
    type: String,
    trim: true,
    default: ''
  },
  doctortype: {
    type: String,
    trim: true,
    default: ''
  },
  address: {
    type: String,
    trim: true,
    default: ''
  },
  long: {
      type: String,
      trim: true,
      default: 0
  },

  lat: {
      type: String,
      trim: true,
      default: 0

  },
  phone: {
    type: String,
    trim: true,
    default: ''
  },
  mail: {
    type: String,
    trim: true,
    default: ''
  },
  calendar:
  [
    { start: {
      type: Date,
      trim: true,
      default: Date.now
      },
      end: {
        type: Date,
        trim: true,
        default: Date.now
      }
    }
  ]
})

module.exports = mongoose.model('Doctor', Doctor)
