const User = require('../models/User')
const config = require('../config/config')
const jwt = require('jsonwebtoken')

function jwtSignUser (user) {
  const ONE_WEEK = 60*60*24*7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register(req, res) {
    try {
      await User
      .create(req.body, function (err, user) {
        if (!user) {
          return res.status(400).send({
            error: 'this email account is already in use'
          })
        }
        const userJson = user.toJSON()
        res.send({
          user: userJson,
          token: jwtSignUser(userJson)
        })
      })
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to sign up'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      await User
      .findOne({
        email: email
      })
      .exec(function (err, user) {
        if (!user) {
          return res.status(403).send({
            error: 'the login information was incorrect'
          })
        }

        user.comparePassword(password, function(err, isMatch) {
          if (!isMatch) {
            return res.status(403).send({
              error: 'the password information was incorrect'
            })
          } else {
            const userJson = user.toJSON()
            res.send({
              user: userJson,
              token: jwtSignUser(userJson)
            })
          }
        })
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to log in'
      })
    }
  }
}
