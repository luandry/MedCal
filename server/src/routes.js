const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require ('./policies/AuthenticationControllerPolicy')
const DoctorsController = require('./controllers/DoctorsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/search',
    DoctorsController.index)
  app.get('/search/:doctorId',
    DoctorsController.show)
  app.post('/search',
    DoctorsController.post)
  app.put('/search/:doctorId',
    DoctorsController.put)
}
