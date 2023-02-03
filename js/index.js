window.onload = function(){
  var boton = document.getElementById("registrarBotonUno");
  boton.addEventListener("click",openVentana);
  
  document.addEventListener('contextmenu', noClick);
  
  var izquierda = document.getElementsByClassName("divfloatleft");
  for (let index = 0; index < izquierda.length; index++) {
    izquierda[index].addEventListener("mouseover",grande);
    izquierda[index].addEventListener("mouseout",pequenyo);
  }

  var derecha = document.getElementsByClassName("divfloatright");
  for (let index = 0; index < derecha.length; index++) {
    derecha[index].addEventListener("mouseover",grande);
    derecha[index].addEventListener("mouseout",pequenyo);
  }
  
  var boton= document.getElementById("registrarBotonUno");
  boton.addEventListener("mouseover", grande);
  boton.addEventListener("mouseout", pequenyo);
  
}
  
function openVentana(){
  window.open("registrar.html");
}

function noClick(event){
  event.preventDefault();
}

function grande(){
  this.style.transform = "scale(1.2,1.2)";
}

function pequenyo(){
  this.style.transform = "scale(1.0,1.0)";
}
