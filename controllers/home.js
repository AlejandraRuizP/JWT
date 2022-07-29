const getHome = (req,res)=>{
    console.log(req.datos)
    res.render('index',req.datos);
}
//exportar funciones
module.exports={getHome}