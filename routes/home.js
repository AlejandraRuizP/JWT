const express = require('express')

const {getHome} = require('../controllers/home')
const {verificarSesionCookie} = require('../middleware/auntenticacion')

const router = express.Router()

router.get('/',verificarSesionCookie,getHome)

module.exports = router