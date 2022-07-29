const express = require('express')

const {getRegister,postRegister} = require('../controllers/registro')

const router = express.Router()

router.get('/',getRegister)
router.post('/',postRegister)

module.exports = router