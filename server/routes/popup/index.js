const router = require('express').Router()
const controller = require('./popup.controller')

router.get('/:_id', controller.getPopup)

module.exports = router