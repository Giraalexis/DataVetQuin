//btn-salir
const btnSalir = document.getElementById("btn-login-out");
btnSalir.addEventListener('click',()=>{
    Swal.fire({
        title: '¿Seguro que desea salir?',
        showDenyButton: true,
        confirmButtonText: `Salir`,
        denyButtonText: `Cerrar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saliendo...', '', 'success')
          window.location.href="index.html";
        }
      })
    
})