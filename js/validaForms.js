(function() {
    //permite acceder al form del html y con el [0] tomar el primer elemento
    var formulario = document.getElementsByName('formulario')[0],
        //accede a los elementos
        elemento = formulario.elements,
        //accede al id del boton
        boton = document.getElementById('btn');
        //se agrega el evento submit boton al form

        var validarNomb = function(e) {
            if (formulario.nombre.value == 0) {
                alert("Completa el campo nombre");
                //previene el comportamiento submit, hace que no recargue la pag.
                e.preventDefault();
            }
        };

        var validRadio = function(e){
            if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true ) {
                
            }else{
                alert("Completa el campo sexo");
                e.preventDefault();
            }
        };

        var validCheck = function(e){
            if (formulario.terminos.checked == false) {
                alert("Acepta los términos y condiciones");
                e.preventDefault();
            }
        };

        var validar = function(e) {
            validarNomb(e);
            validRadio(e);
            validCheck(e);
        }

        formulario.addEventListener("submit", validar);


}())