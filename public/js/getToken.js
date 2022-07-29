
window.onload = function(e){
    let formulario = document.querySelector('form');
    formulario.addEventListener('submit',async (e)=>{
        e.preventDefault();
        let credenciales ={
            email:formulario.email.value,
            password:formulario.password.value
        }

        let respuesta = await fetch('/login',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(credenciales)
        })
        let datos = await respuesta.json()
        if(!datos){
            alert('Error en la comunicación')
            return;
        }
        //revisar si hay errores
        if(datos.error){
            alert('Error datos '+datos.error)
            return;
        }
        //si todso está ok:
        //opcional para cuando se trabaje con API Restful
        localStorage.setItem('TOKEN_SESION_JWT',datos.token)
        //redireccionar al home
        location.assign('/home');
    })
}