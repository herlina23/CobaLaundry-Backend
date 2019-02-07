const express = require('express')
const router = express.Router()

const { index, show, store, update, search, destroy } = require('../controllers/member')

router.get('/',index)
router.get('/:id',show)
router.get('/search/:member_id', search)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

module.exports = router