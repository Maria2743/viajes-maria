


jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop(),
            navbar = $('.navbar');

        if (scrollPos > 50) {
            navbar.addClass('alt-color');
        } else {
            navbar.removeClass('alt-color');
        }
    });
});

$(function () {

    $("#enviarMensaje").click(function () {
        alert("El mensaje fue enviado correctamente");
    });

    $(".card-title").on("click", function () {
        console.log("aqui")
        $(".card-text").toggle();

    });

})