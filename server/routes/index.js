const router = require('express').Router()
const auth = require('./auth')
const note = require('./note')

// Routing test
router.get('/', (req, res, next) => {
  res.end(`Hello world!`)
})

router.use('/auth', auth)
router.use('/note', note)

module.exports = router