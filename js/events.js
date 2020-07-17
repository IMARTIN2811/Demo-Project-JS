(function(){

    var saludo = function(e){
        console.log('Bienvenido');
        e.preventDefault();
    };

    var saludo2 = function(){
        console.log('saludo2');
    };
    //accede al boton del elemento html 
    var boton = document.getElementById('boton');
    //var input = document.getElementById('input');
    //accede al evento click y a la funcion saludo
    boton.addEventListener("click", saludo);
    //input.addEventListener("focus", saludo);
    boton.addEventListener("click", saludo2);
    //permite eliminar el evento
    boton.removeEventListener("click", saludo2 );
}())