/*
//funcion normal
function suma(num2, num3) {
    var variable1 =  num2;
    var variable2 = num3;
    return variable1 + variable2;
}
document.write(suma(20,10));
document.write("<br>");
//funcion guardada con una variable
var suma = function (num2, num3) {
    var variable1 =  num2;
    var variable2 = num3;
    return variable1 + variable2;
}
document.write(suma(50,10));
document.write("<br>");

var numMaximo =  function (val1, val2) {
    if (val1 > val2) {
        return val1;
    }
    return val2;
}
document.write("El numero maximo es:" + numMaximo(1,7));
*/
var suma = function () {
    //extrae el elemento id de html
    var nume1 = parseFloat(document.getElementById("num1").value);
    var nume2 = parseFloat(document.getElementById("num2").value);

    var result = nume1 + nume2;
    return result;
}
