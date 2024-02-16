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

