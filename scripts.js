(function(){
    //Variables
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa el campo 'nombre'");
            e.preventDefault();
        }
    };

    var validarEmail = function(e){
        if (formulario.mail.value == 0){
            alert("Completa el campo 'E-mail'");
            e.preventDefault();
        }
    };

    var validarNumero = function(e){
         if (formulario.numero.value == 0){
            alert("Completa el campo 'numero celular' con su numero de celular");
            e.preventDefault();
        }
    };


    var validar = function(e){
        validarNombre(e);
        validarEmail(e);
        validarNumero(e);
    };
    formulario.addEventListener("submit", validar);
}())