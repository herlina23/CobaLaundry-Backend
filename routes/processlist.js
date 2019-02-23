const express = require('express')

const verifyToken = require('../middlewares/verifyToken')
const router = express.Router()

const { index, show, store, update, search, destroy } = require('../controllers/process')

router.get('/',index)
router.get('/:id',show)
router.get('/search/:invoice', search)

router.use(verifyToken)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

module.exports = router