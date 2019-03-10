const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{6,20}$')
      )
    }

    const {error, value} = Joi.validate({
      email: req.body.email,
      password: req.body.password
    }, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'you must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `the password provided failed to match the following rules:
            <br>
            contain only valid alphanumerical values
            <br>
            at least 8 characters and not greater than 32 characters`
          })
          break
        default:
      }
    } else {
      next()
    }
  }
}
