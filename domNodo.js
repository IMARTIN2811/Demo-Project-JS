//crear el elemento html
var elemento = document.createElement("li");
//crea el text del elemento
var contenido = document.createTextNode("Texto nuevo");
//se agrega el contenido del elemento
elemento.appendChild(contenido);
//se agregar el contenido en la pantalla, esto se agrega fuera del doc.
//document.body.appendChild(contenido);

//Formas de acceder a elemtos de html
//permite acceder al elemento padre del html
var father = document.getElementById("lista");
//permite acceder a los elemento li
primerElem = document.getElementsByTagName("li")[0];
//inserta el elemento en la primera poscion
father.insertBefore(elemento, primerElem);
//father.appendChild(elemento);
//Forma 2; permite traer los elementos li del documento con array
//var father2 = document.getElementsByTagName("li")[0].parentNode;
//father2.appendChild(elemento)

