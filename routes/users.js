
const express = require('express')
const router = express.Router()

const { index, show, store, update,  authenticate, destroy } = require('../controllers/user')

router.get('/',index)
router.get('/:id',show)
// router.get('/search/:user_id', search)
router.post('/',store)
router.post('/login', authenticate)
router.put('/:id',update)
router.delete('/:id',destroy)

module.exports = router