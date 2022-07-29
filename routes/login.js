//carga de librerias
const express = require('express')
//inicializacion del router donde guardaremos las ruitas del loguin
const router = express.Router()
//carga de las funciones del controlador del login
const {getLogin,postLogin} = require('../controllers/login')
//agregar las rutas
router.get('/',getLogin)//se concatena la ruta con el nombre del archivo
router.post('/',postLogin)

module.exports=router;