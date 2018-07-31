var Module = (function () {
    var id = 'prueba@gmail.com';
    var password = "123";

    var _checkMail = function () {
        var email = document.getElementById("email").value;
        if (email === id) {
            return true;
        } else {
            document.getElementById('email-alert').innerHTML = 'Email incorrecto prueba con prueba@gmail.com'
            document.getElementById('email-alert').style.display = "block"
            return false;
        }
    }

    var _checkPassword = function () {
        var pass = document.getElementById("password").value;
        if (pass === password) {
            return true;
        } else {
            document.getElementById('pass-alert').style.display = "block";
            document.getElementById('pass-alert').innerHTML = 'Contraseña incorrecta prueba con 123'
            return false;
        }
    }

    var validaCredenciales = function () {
        if (_checkMail() && _checkPassword()) {
            alert("Bienvenido")
            location.href = "main.html"
        } else {
            return false;
        }
    };
    return {
        validaCredenciales: validaCredenciales
    };
})();

var button = document.getElementById("nextButton");
button.addEventListener("click", function () {
    Module.validaCredenciales();
});