var elemento =  document.createElement("div");
var elemFather = document.getElementById("contenedor");
var ref = document.getElementsByTagName("div")[0];
elemento.setAttribute("class","azul");
//var content =  document.createTextNode("");
//document.body.appendChild(elemento);
elemFather.insertBefore(elemento, ref );