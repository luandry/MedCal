const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config/config')

mongoose.connect('mongodb://localhost:27017/medcal', {useNewUrlParser: true});

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

app.listen(config.port)
console.log(`server started on port ${config.port}`)
