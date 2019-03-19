const Doctor = require('../models/Doctor')

module.exports = {
  async index(req, res) {
    try {
      const search = req.query.search
      if (search) {
        await Doctor
        .find().or(
          [
            {name: { '$regex' : search, '$options' : 'i' }},
            {address: { '$regex' : search, '$options' : 'i' }}
          ]
        )
        .exec(function (err, doctors) {
          res.send(doctors)
        })
      } else {
        await Doctor
        .find({})
        .limit(10)
        .exec(function (err, doctors) {
          res.send(doctors)
        })
      }
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch doctor info'
      })
    }
  },
  async show(req, res) {
    try {
      await Doctor
      .findById(req.params.doctorId)
      .exec(function (err, doctor) {
        res.send(doctor)
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch doctor info'
      })
    }
  },
  async post(req, res) {
    try {
      await Doctor
      .create(req.body, function (err, doctor) {
        res.send(doctor.toJSON())
      })
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to sign up a doctor'
      })
    }
  },
  async put(req, res) {
    try {
      await Doctor
      .findByIdAndUpdate(req.params.doctorId, req.body)
      .exec(function (err, doctor) {
        res.send(doctors)
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update doctor info'
      })
    }
  }
}
