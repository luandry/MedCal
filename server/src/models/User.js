const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

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

function hashPassword(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
}

User.pre('save', hashPassword);
User.pre('update', hashPassword);

User.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', User)
