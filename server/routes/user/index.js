const router = require('express').Router()
const controller = require('./user.controller')

const multer = require('multer')
const upload = multer({ dest: 'public/' })

router.put('/:_id', controller.update)
router.delete('/:_id', controller.delete)

// Profile pic upload
router.post('/:_id', upload.single('avatar'), controller.upload)

module.exports = router