




//btnLogin
const btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click",()=>{
    console.log("hola");
    Swal.fire({
        icon: 'info',
        title: 'Iniciar Sesion',
        input: 'text',
        inputPlaceholder:'Ingresar Nombre',
        showCancelButton: true,
        inputValidator:(value) =>{
            if(!value){
                return 'Debe ingresar algun nombre..'
            }else{
                Swal.fire({
                    icon:'success',
                    title:'Exito',
                    text:'Ingresando...'
                });
                window.location.href="profHome.html";
            }   
        }
        
    })
})

//btnRegistrar
const btnRegistrar = document.getElementById("btn-registrar");
btnRegistrar.addEventListener("click",()=>{
    console.log("hola2");
    Swal.fire({
        icon: 'info',
        title: 'Crear Cuenta',
        input: 'text',
        inputPlaceholder:'Ingresar Nombre',
        showCancelButton: true,
        inputValidator:(value) =>{
            if(!value){
                return 'Debe ingresar algun nombre..'
            }else{
                Swal.fire({
                    icon:'success',
                    title:'Exito',
                    text:'Ingresando...'
                });
                window.location.href="profHome.html";
            }   
        }
        
    })
})
