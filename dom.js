//los ID solo se usan en JS, cuando es en CSS se usan class
//permite mostrar todos los elementos html mediante la etiqueta p.
var elementoP = document.getElementsByTagName("p");
//permite mostrar elemento html mediante un ID de la etiqueta
var segundoP = document.getElementById("segundo");
//crear elemento
var element = document.createElement("h2");
//Crear un nodo de texto
var content =  document.createTextNode("Este es el titulo");
//Añadir el nodo de texto al elemento
element.appendChild(content);
//Agregar atributo al elemento
element.setAttribute("align", "center");
//Agregar el elemento al docuemento
document.getElementById("subtitulo").appendChild(element)
