const router = require('express').Router()
const auth = require('./auth')
const note = require('./note')
const user = require('./user')
const popup = require('./popup')

// Routing test
router.get('/', (req, res, next) => {
  res.end(`Hello world!`)
})

router.use('/auth', auth)
router.use('/note', note)
router.use('/user', user)
router.use('/popup', popup)

module.exports = router