(function() {
    /* 
//se pueder acceder a ellas desde cualquier parte del codigo
    var varGlobal = "Esta es una variable global";
    var miFuncion = function() {
        alert(varGlobal);
        varGlobal = "Esta es global, modificado";
    }
    miFuncion();
    alert(varGlobal);

*/
//variables creadas dentro de la funcion, solo se pueden acceder desde su funcion o una funcion anidada
    var miFuncion = function() {
    var variableLocal = "Esta es local";
//    alert (varLocal);

//funcion local dentro de otra 
    var FuncionLocal = function() {
//        var variableLocal = "Esta es una variable local dentro de la funcion local";
        alert(variableLocal);
    }
    FuncionLocal()
}
miFuncion();

}())

