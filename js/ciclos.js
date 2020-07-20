/** 
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
for(i = 0; i <= dias.length - 1; i++){
    document.write(dias[i] + "<br>")
}
*/
//for ( let x = 1; x < 100 ; x++ ) {
//    document.write(x + "<br>");
//}

var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var numDias = dias.length -1;
var x = 0;
while (x <= numDias ) {
    document.write( dias[x] + "<br>" );
    x++;
}
