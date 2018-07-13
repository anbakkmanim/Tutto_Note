const router = require('express').Router()
const controller = require('./note.controller')

const tokenMiddleware = require('../../middlewares/token')

// Use Middleware
router.use('/', tokenMiddleware)

// CRUD
router.post('/', controller.create)
router.get('/', controller.getAll)
router.get('/:_id', controller.getOne)
router.put('/:_id', controller.update)
router.delete('/:_id', controller.delete)

// Misc
router.get('/search/title', controller.searchTitle)
router.get('/search/tags', controller.searchTags)
router.get('/search/date', controller.searchDate)

router.get('/get/trash', controller.getTrash)

module.exports = router