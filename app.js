// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var listaDeNombres = [];


function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if ( nombre !== "" ){
    listaDeNombres.push(nombre);
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
    console.log(listaDeNombres);
    if (nombre) {
      var list = document.getElementsByClassName("name-list")[0];
      var newItem = document.createElement("li");
      newItem.textContent = nombre;
      list.appendChild(newItem);
    }
  } else {
    alert("Por favor, ingrese un nombre valido");
  }
}

function sortearAmigo(){
  let amigoElegido = listaDeNombres[Math.floor(Math.random() * listaDeNombres.length)];
  if (amigoElegido) {
    var list = document.getElementsByClassName("name-list")[0];
    list.innerHTML = "";
    var list = document.getElementsByClassName("result-list")[0];
    var newItem = document.createElement("li");
    newItem.textContent = amigoElegido;
    list.appendChild(newItem);
  }
}

