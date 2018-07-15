const router = require('express').Router()
const controller = require('./note.controller')

const tokenMiddleware = require('../../middlewares/token')

// Load Multer
const multer = require('multer')
const upload = multer({ dest: 'public/' })

// Use Middleware
router.use('/', tokenMiddleware)
router.use('/attach', tokenMiddleware)

// CRUD
router.post('/', controller.create)
router.get('/', controller.getAll)
router.get('/:_id', controller.getOne)
router.put('/:_id', controller.update)
router.delete('/:_id', controller.delete)
router.delete('/:_id/cascade', controller.cascade)


// Misc
router.get('/search/title', controller.searchTitle)
router.get('/search/tags', controller.searchTags)
router.get('/search/date', controller.searchDate)

router.get('/get/trash', controller.getTrash)

router.post('/:_id/attach', upload.array('attach'), controller.attach)

module.exports = router