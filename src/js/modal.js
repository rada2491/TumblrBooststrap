$(".rename").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    var fileName = $(this).data("file");
    $("#basicModal").data("fileName", fileName).modal("toggle", $this);
});