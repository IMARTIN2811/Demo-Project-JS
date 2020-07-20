//var primerElem = document.getElementById("primero");
//primerElem.textContent = "Nuevo elemento";

//crear el elemento html
var elemento = document.createElement("li");
//crea el text del elemento
var contenido = document.createTextNode("Texto nuevo");
//se agrega el contenido del elemento
elemento.appendChild(contenido);

//Para reemplazar elemento
var padre = document.getElementsByTagName("li")[0].parentNode,
    ref = document.getElementsByTagName("li")[0];
    padre.replaceChild(elemento, ref);

//para eliminar elemento
var padre = document.getElementsByTagName("li")[0].parentNode,
    ref = document.getElementsByTagName("li")[0];
    padre.removeChild(ref);
