window.onload= (e)=>{
    let form = document.querySelector('form')
    form.addEventListener('submit', async(e)=>{
        e.preventDefault()//trim() -> Elimina espacios vacios
        if(form.password.value.trim()===''){ return }

        let errorMsg = document.getElementById('errorMsg')
        if(form.password.value != form.confirmacion.value){
          
            errorMsg.classList.remove('esconderError')
            errorMsg.classList.add('mostrarError')
            return;
        }
        errorMsg.classList.remove('mostrarError')
        errorMsg.classList.add('esconderError')

        const usuario = {
            email: form.email.value,
            username:form.username.value,
            name: form.nombre.value,
            password:form.password.value
        }
        
        let respuesta  = await fetch('/registro',{
            method:'Post',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(usuario)
        })

        let datos = await respuesta.json();

        if(!datos){
            alert('Error de comunicación')
            return;
        }
        if(datos.error){
            alert(datos.error)
            return;
        }

        //todo ok
        location.assign('/home')
    })
}