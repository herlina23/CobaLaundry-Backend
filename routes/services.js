const express = require('express')
const verifyToken = require('../middlewares/verifyToken')
const router = express.Router()

const { index, show, store, update, search, destroy } = require('../controllers/service')

router.use(verifyToken)
// router.get('/', verifyToken,index)

router.get('/',index)
router.get('/:id',show)
router.get('/search/:service_id', search)
router.post('/',store)
router.put('/:id',update)
router.delete('/:id',destroy)

module.exports = router