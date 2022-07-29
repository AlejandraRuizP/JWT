require('dotenv').config()
const jwt = require('../utils/jwt')

const verificarSesionHeader = (req,res,next)=>{

}

const verificarSesionCookie = async (req,res,next)=>{
    if(!req.cookies){
        return res.redirect('/login')
    }

    const token = req.cookies[process.env.JWT_COOKIE]

    if(!token){
        return res.redirect('/login')
    }
    let datos = await jwt.verificarToken(token)
    if(!datos){
        return res.redirect('/login')
    }
    req.datos = datos
    next()
}

module.exports = {verificarSesionHeader,verificarSesionCookie}