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
window.Duenos = [];
const btnRegistrar = document.getElementById("btn-registrar");
btnRegistrar.addEventListener('click',()=>{
  let rut = document.getElementById("txt-rut").value;
  let nombre = document.getElementById("txt-nombre").value;
  let apel_p = document.getElementById("txt-apel_p").value;
  let apel_m = document.getElementById("txt-apel_m").value;
  let fech_nac = document.getElementById("txt-fecha_nac").value;
  let correo = document.getElementById("txt-correo").value;
  let fono = document.getElementById("txt-fono").value;
  let tipoCliente = document.querySelector("#tipo-si").checked;
  let tipoClienteNo = document.querySelector("#tipo-no").checked;
  let mascota = document.getElementById("select-mascota").value;
  let resul = Validacion(rut,nombre,apel_p,apel_m,fech_nac,correo,fono,tipoCliente,mascota,tipoClienteNo);
  if (resul){
    let dueno = {};
    dueno.rut = rut;
    dueno.nombre = nombre;
    dueno.apel_p = apel_p;
    dueno.apel_m = apel_m;
    dueno.fech_nac = fech_nac;
    dueno.correo = correo;
    dueno.fono = fono;
    dueno.tipoCliente = tipoCliente;
    dueno.mascota = mascota;
    window.Duenos.push(dueno);
    LimpiarValidacion();
    //Registrar Dueño
    window.RegistrarDueno();
    //Mensaje op
    Swal.fire("Registrado","Se ha registrado al dueño","success");
  }
})


//Funcion Registrar/Recargar Dueño
window.RegistrarDueno = ()=>{
  const tablaDueno = document.querySelector("#tabla-dueno");
  tablaDueno.innerHTML = '';
  for(let i = 0; i < window.Duenos.length; ++i){
    let dueno = window.Duenos[i]; 
    let tr = document.createElement("tr");
    //rut
    let tdRut = document.createElement("td"); //creo
    tdRut.innerText = dueno.rut; //escribo
    tr.appendChild(tdRut); //añado
    //nombre
    let tdNombre = document.createElement("td");
    tdNombre.innerText = dueno.nombre;
    tr.appendChild(tdNombre);
    //paterno 
    let tdPaterno = document.createElement("td");
    tdPaterno.innerText = dueno.apel_p;
    tr.appendChild(tdPaterno);
    //materno
    let tdMaterno = document.createElement("td");
    tdMaterno.innerText = dueno.apel_m;
    tr.appendChild(tdMaterno);
    //nacimiento
    let tdNac = document.createElement("td");
    tdNac.innerText = dueno.fech_nac;
    tr.appendChild(tdNac);
    //correo
    let tdCorreo = document.createElement("td");
    tdCorreo.innerText = dueno.correo;
    tr.appendChild(tdCorreo);
    //fono
    let tdFono = document.createElement("td");
    tdFono.innerText = dueno.fono;
    tr.appendChild(tdFono);
    //mascota
    let tdMascota = document.createElement("td");
    tdMascota.innerText = dueno.mascota;
    tr.appendChild(tdMascota);
    //clienteFrecuente con colorsito uwu
    if(dueno.tipoCliente){
      tr.classList.add("text-success");
    }
    //Boton Eliminar
    let btnEliminar = document.createElement("button")
    btnEliminar.classList.add("btn","btn-danger","btn-sm");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.nroDueno = i;
    btnEliminar.addEventListener('click',window.EliminarDueno)
    let tdbtnEliminar = document.createElement("td");
    tdbtnEliminar.appendChild(btnEliminar);
    tr.appendChild(tdbtnEliminar);
    //Fin
    tablaDueno.appendChild(tr);
  }
}
//Funcion Eliminar
window.EliminarDueno = function (){
  Swal.fire({
    icon:'error',
    title:'¿Estas Seguro?',
    showCancelButton: true,
    confirmButtonText:'Borrar',
    CancelButtonText:'Cancelar',   
  }).then((result) => {
    if(result.isConfirmed){
      const nroDueno = this.nroDueno;
      window.Duenos.splice(nroDueno,1);
      window.RegistrarDueno(); //recargar tabla
      Swal.fire("Eliminado","Se ha eliminado al dueño","success");
    }
  });
  
}
//Funcion Limpiar formulario
const btnLimpiar = document.getElementById("btn-limpiar")
btnLimpiar.addEventListener('click',()=>{
  document.getElementById("txt-rut").value ='';
  document.getElementById("txt-nombre").value ='';
  document.getElementById("txt-apel_p").value ='';
  document.getElementById("txt-apel_m").value ='';
  document.getElementById("txt-fecha_nac").value ='';
  document.getElementById("txt-correo").value ='';
  document.getElementById("txt-fono").value ='';
  document.querySelector("#tipo-si").checked = false;
  document.querySelector("#tipo-no").checked = false;
  document.getElementById("select-mascota").value = "Gato";
  LimpiarValidacion();
})



//Funcion Limpiar Validaciones
function LimpiarValidacion(){
  let rut = document.getElementById("txt-rut");
  rut.classList.remove("is-invalid","is-valid");
  let nombre = document.getElementById("txt-nombre");
  nombre.classList.remove("is-invalid","is-valid");
  let apel_p = document.getElementById("txt-apel_p");
  apel_p.classList.remove("is-invalid","is-valid");
  let apel_m = document.getElementById("txt-apel_m");
  apel_m.classList.remove("is-invalid","is-valid");
  let fech_nac = document.getElementById("txt-fecha_nac")
  fech_nac.classList.remove("is-invalid","is-valid");
  let correo = document.getElementById("txt-correo")
  correo.classList.remove("is-invalid","is-valid");
  let fono = document.getElementById("txt-fono")
  fono.classList.remove("is-invalid","is-valid");
  let check = document.getElementById("check-radio");
  check.classList.remove("border","border-danger","border-success");

}
//Funcion Validadora
function Validacion(rut,nombre,apel_p,apel_m,fech_nac,correo,fono,tipoCliente,mascota,tipoClienteNo){
  if(rut===''){
    let rut = document.getElementById("txt-rut");
    rut.classList.add("is-invalid");
  }else{
    let rut = document.getElementById("txt-rut");
    rut.classList.remove("is-invalid");
    rut.classList.add("is-valid");
  }
  if(nombre===''){
    let nombre = document.getElementById("txt-nombre");
    nombre.classList.add("is-invalid");
  }else{
    let nombre = document.getElementById("txt-nombre");
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
  }
  if(apel_p===''){
    let apel_p = document.getElementById("txt-apel_p");
    apel_p.classList.add("is-invalid");
  }else{
    let apel_p = document.getElementById("txt-apel_p");
    apel_p.classList.remove("is-invalid");
    apel_p.classList.add("is-valid");
  }
  if (apel_m===''){
    let apel_m = document.getElementById("txt-apel_m");
    apel_m.classList.add("is-invalid");
  }else{
    let apel_m = document.getElementById("txt-apel_m");
    apel_m.classList.remove("is-invalid");
    apel_m.classList.add("is-valid");
  }
  if(fech_nac===''){
    let fech_nac = document.getElementById("txt-fecha_nac")
    fech_nac.classList.add("is-invalid")
  }else{
    let fech_nac = document.getElementById("txt-fecha_nac")
    fech_nac.classList.remove("is-invalid");
    fech_nac.classList.add("is-valid");
  }
  if(correo===''){
    let correo = document.getElementById("txt-correo")
    correo.classList.add("is-invalid")
  }else{
    let correo = document.getElementById("txt-correo")
    correo.classList.remove("is-invalid");
    correo.classList.add("is-valid");
  }
  if(fono===''){
    let fono = document.getElementById("txt-fono")
    fono.classList.add("is-invalid")
  }else{
    let fono = document.getElementById("txt-fono")
    fono.classList.remove("is-invalid");
    fono.classList.add("is-valid");
  }
  //radiobutton
  if(tipoCliente == false && tipoClienteNo == false){
    let check = document.getElementById("check-radio");
    check.classList.add("border","border-danger");
  }else{
    let check = document.getElementById("check-radio");
    check.classList.remove("border","border-danger");
    check.classList.add("border","border-success");
  }
  //ningun campo en blanco
  if(tipoCliente == true || tipoClienteNo == true){
    if(rut!==''&& nombre !==''&& apel_p !==''&& apel_m!==''&& fech_nac !==''&& correo !==''&& fono !==''&& tipoCliente !==''&& mascota ){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
  
}