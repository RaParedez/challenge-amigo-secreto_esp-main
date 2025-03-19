// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var listaDeNombres = [];


function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if ( nombre !== "" ){
    listaDeNombres.push(nombre);
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
    console.log(listaDeNombres);
  } else {
    alert("Ingrese un nombre");
  }
}

function sortearAmigo(){

}

