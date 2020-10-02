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

//Boton Registrar
window.Mascotas = [];
const btnRegistrar = document.getElementById("btn-registrar");
btnRegistrar.addEventListener('click',()=>{
  let nombre = document.getElementById("txt-nombre").value.trim();
  let dueno = document.getElementById("txt-dueno").value.trim();
  let fech_nac = document.getElementById("txt-fech_nac").value.trim();
  let tipo = document.getElementById("txt-tipo").value.trim();
  let detalle = tinymce.get("txt-text").getContent().trim();
  let resul = Validacion(nombre,dueno,fech_nac,tipo,detalle);
  if (resul){
    let mascota = {};
    mascota.nombre = nombre;
    mascota.dueno = dueno;
    mascota.fech_nac = fech_nac;
    mascota.tipo = tipo;
    mascota.detalle = detalle;
    window.Mascotas.push(mascota);
    LimpiarValidacion();
    //Registrar MAscota
    window.RegistrarMascota();
    //Mensaje op
    Swal.fire("Registrado","Se ha registrado la mascota","success");
  }
})

//Funcion Registrar/Recargar Mascota
window.RegistrarMascota = ()=>{
  const tablaMascota = document.querySelector("#tabla-mascota");
  tablaMascota.innerHTML = '';
  for(let i = 0; i < window.Mascotas.length; ++i){
    let mascota = window.Mascotas[i]; 
    let tr = document.createElement("tr");
    //nombre
    let tdNombre = document.createElement("td"); //creo
    tdNombre.innerText = mascota.nombre; //escribo
    tr.appendChild(tdNombre); //añado
    //dueno
    let tdDueno = document.createElement("td");
    tdDueno.innerText = mascota.dueno;
    tr.appendChild(tdDueno);
    //fecha nacimiento
    let tdNac = document.createElement("td");
    tdNac.innerText = mascota.fech_nac;
    tr.appendChild(tdNac);
    //tipo mascota
    let tdTipo = document.createElement("td");
    tdTipo.innerText = mascota.tipo;
    tr.appendChild(tdTipo);
    //detalles
    let tdDetalle = document.createElement("td");
    tdDetalle.innerHTML = mascota.detalle;
    tr.appendChild(tdDetalle);
    
    //Boton Eliminar
    let btnEliminar = document.createElement("button")
    btnEliminar.classList.add("btn","btn-danger","btn-sm");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.nroMascota = i;
    btnEliminar.addEventListener('click',window.EliminarMascota)
    let tdbtnEliminar = document.createElement("td");
    tdbtnEliminar.appendChild(btnEliminar);
    tr.appendChild(tdbtnEliminar);
    //Fin
    tablaMascota.appendChild(tr);
  }
}

//Funcion Limpiar formulario
const btnLimpiar = document.getElementById("btn-limpiar")
btnLimpiar.addEventListener('click',()=>{
  document.getElementById("txt-nombre").value ='';
  document.getElementById("txt-dueno").value ='';
  document.getElementById("txt-fech_nac").value ='';
  document.getElementById("txt-tipo").value ='Gato';
  tinymce.get("txt-text").setContent("");
  LimpiarValidacion();
})

//Funcion Limpiar Validaciones
function LimpiarValidacion(){
  let nombre = document.getElementById("txt-nombre");
  nombre.classList.remove("is-invalid","is-valid");
  let dueno = document.getElementById("txt-dueno");
  dueno.classList.remove("is-invalid","is-valid");
  let fech_nac = document.getElementById("txt-fech_nac");
  fech_nac.classList.remove("is-invalid","is-valid");
  let tipo = document.getElementById("txt-tipo");
  tipo.classList.remove("is-invalid","is-valid");
  let detalle = document.getElementById("txt-text")
  detalle.classList.remove("is-invalid","is-valid");
  

}

//Funcion Validadora
function Validacion(nombre,dueno,fech_nac,tipo,detalle){
  if(nombre===''){
    let nombre = document.getElementById("txt-nombre");
    nombre.classList.add("is-invalid");
  }else{
    let nombre = document.getElementById("txt-nombre");
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
  }
  if(dueno===''){
    let dueno = document.getElementById("txt-dueno");
    dueno.classList.add("is-invalid");
  }else{
    let dueno = document.getElementById("txt-dueno");
    dueno.classList.remove("is-invalid");
    dueno.classList.add("is-valid");
  }
  if(fech_nac===''){
    let fech_nac = document.getElementById("txt-fech_nac");
    fech_nac.classList.add("is-invalid");
  }else{
    let fech_nac = document.getElementById("txt-fech_nac");
    fech_nac.classList.remove("is-invalid");
    fech_nac.classList.add("is-valid");
  }
  if (tipo===''){
    let tipo = document.getElementById("txt-tipo");
    tipo.classList.add("is-invalid");
  }else{
    let tipo = document.getElementById("txt-tipo");
    tipo.classList.remove("is-invalid");
    tipo.classList.add("is-valid");
  }
  if(detalle ===''){
    let detalle = document.getElementById("txt-text")
    detalle.classList.add("is-invalid")
  }else{
    let detalle = document.getElementById("txt-text")
    detalle.classList.remove("is-invalid");
    detalle.classList.add("is-valid");
  }
  
  //ningun campo en blanco
  if(nombre!==''&& dueno !==''&& fech_nac !==''&& tipo!==''&& detalle !=='' ){
    return true;
  }else{
    return false;
  }

  
}

//Funcion Eliminar
window.EliminarMascota = function (){
  Swal.fire({
    icon:'error',
    title:'¿Estas Seguro?',
    showCancelButton: true,
    confirmButtonText:'Borrar',
    CancelButtonText:'Cancelar',   
  }).then((result) => {
    if(result.isConfirmed){
      const nroMascota = this.nroMascota;
      window.Mascotas.splice(nroMascota,1);
      window.RegistrarMascota(); //recargar tabla
      Swal.fire("Eliminado","Se ha eliminado la mascota","success");
    }
  });
  
}