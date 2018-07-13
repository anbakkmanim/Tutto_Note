const router = require('express').Router()
const controller = require('./auth.controller')

const tokenMiddleware = require('../../middlewares/token')

router.post('/register', controller.register)
router.post('/login', controller.login)

router.use('/check', tokenMiddleware)
router.get('/check', controller.check)

module.exports = router