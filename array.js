var amigos = ["Juan", "Carlos", "Alex"];
var amigos2 = ["Nemesio", "Salvador", "Javier"];
//document.write("Tienes " + amigos.length + " Amigos " );
amigos[amigos.length] = "Israel"
//se agrega nuevos
amigos.push("Luis", "Oscar");
//se elimina el ultimo 
amigos.pop();
//document.write(amigos[0]);
//se concatena los dos array
var amigos3 =  amigos.concat(amigos2);
var ordenar = amigos3.sort();
document.write(amigos3);
