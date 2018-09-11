// Load modules
const debug = require('debug')('tuttonote:server')
const express = require('express')
const session = require('express-session')
const createError = require('http-errors')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

// Load .env file
require('dotenv').config()

// MongoDB connection
const mongoDest = `mongodb://${process.env.HOST}:27017`
mongoose.connect(mongoDest, {
  useNewUrlParser: true,
  dbName: process.env.MONGO_DATABASE,
})
const db = mongoose.connection
db.on('error', console.error)
db.once('open', () => {
  debug(`MongoDB: successfully connected on ${mongoDest}`)
})

const app = express()

app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/public', express.static(path.join(__dirname, '/public')))

// Disable CORS(Cross-Origin Resource Sharing)
app.use(cors())

// JWT secret key setting
app.set('secret', process.env.SECRET || 'SECRET@KEY#WAS#NOT@SET')

// Routing
app.use('/', require('./routes/index'))

// Send 404 if route is not defined
app.use((req, res, next) => {
  next(createError(404))
})

// Error handling
app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
})

module.exports = app
