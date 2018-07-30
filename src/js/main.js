$(".rename").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    var fileName = $(this).data("file");
    $("#basicModal").data("fileName", fileName).modal("toggle", $this);
});




var Module = (function () {
    console.log('entre')
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var validaCredenciales= function () {
        if (pass == 123 || email == 'cbr2491@gmail.com') {
            return true;
        } else {
            alert('Estas mamando');
        }
    };

    return {
        validaCredenciales: validaCredenciales
    };
});

/* var Module = (function () {

    var _privateMethod = function () {
      // private stuff
    };
  
    var publicMethod = function () {
      _privateMethod();
    };
    
    return {
      publicMethod: publicMethod
    };
  
  })(); */
