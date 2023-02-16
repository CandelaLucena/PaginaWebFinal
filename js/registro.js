window.onload = function(){
  document.addEventListener('contextmenu', noClick);
  document.getElementById("stringNombre").focus();
  
  var botonVerde = document.getElementsByClassName("boxcomprobar");
  for (let index = 0; index < botonVerde.length; index++) {
    botonVerde[index].addEventListener("mouseout", comprobarVerde);
  }

  var formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", comprobar)

  var reseteo = document.getElementById("botonReseteo");
  reseteo.addEventListener("click", resetear);
  
}
  
function comprobar(event){
  var input1 = document.getElementById("stringNombre");
  var input2 = document.getElementById("stringApellido");
  var input3 = document.getElementById("integerTelefono");
  var input4 = document.getElementById("integerDni");
  var input5 = document.getElementById("integerEdad");

  var input6 = document.getElementById("pregunta_hombre").checked;
  var input7 = document.getElementById("pregunta_mujer").checked;
  var input8 = document.getElementById("publicidad").checked;

  if(input1.value=="" || input2.value=="" || !(/^\d{9}$/.test(input3.value)) || !(/[^@ \t\r\n]+@gmail\.com/.test(input4.value)) || !(/^\d{2}$/.test(input5.value)) || input8 == false || (input6 == false && input7 == false)){
    alert("¡Faltan campos que rellenar correctamente!");
    event.preventDefault();
  }else{
    alert("¡Envió tus datos correctamente!");
    var boton = document.getElementById("botonEnviar")
    boton.style.backgroundColor = "#6C757D";
  }
}

function comprobarVerde(){
  var input1 = document.getElementById("stringNombre");
  var input2 = document.getElementById("stringApellido");
  var input3 = document.getElementById("integerTelefono");
  var input4 = document.getElementById("integerDni");
  var input5 = document.getElementById("integerEdad");

  var input6 = document.getElementById("pregunta_hombre").checked;
  var input7 = document.getElementById("pregunta_mujer").checked;
  var input8 = document.getElementById("publicidad").checked;

  if(!(input1.value=="") && !(input2.value=="") && (/^\d{9}$/.test(input3.value)) && (/[^@ \t\r\n]+@gmail\.com$/.test(input4.value)) && (/^\d{2}$/.test(input5.value)) && input8 == true && (input6 == true  || input7 == true )){
    var boton = document.getElementById("botonEnviar")
    boton.style.backgroundColor = "#34AA62";
  }else{
    var boton = document.getElementById("botonEnviar")
    boton.style.backgroundColor = "#6C757D";
  } 
}
  
function resetear(event){
  document.getElementById("formulario").reset();
  alert("¡Los datos se resetearon!");
  //event.stopPropagation();
}

function noClick(event){
  //event.preventDefault();
}
