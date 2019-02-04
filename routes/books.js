const express = require('express')
const router = express.Router()

// const { index, show, store, update, destroy } = require('../controllers/books')
const { index, show, store, update, destroy } = require('../controllers/book')

// const Book = require('../models/Book')

router.get('/',index)
router.get('/:id',show)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

module.exports = router