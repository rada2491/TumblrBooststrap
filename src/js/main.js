$(".rename").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    var fileName = $(this).data("file");
    $("#basicModal").data("fileName", fileName).modal("toggle", $this);
});

var Module = (function () {
    var id = 'prueba@gmail.com';
    var password = 123;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var validaCredenciales = function () {
        if ((pass == password) && (email == id)) {
            alert('Bienvenido')
            return true;
        } else {
            alert('Email: Prueba@gmail.com,Contraseña: 123');
            return false;
        }
    };
    return {
        validaCredenciales: validaCredenciales
    };
});
