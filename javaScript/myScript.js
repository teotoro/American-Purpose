$(document).ready(function () {
    $(".dropdown").click(function () {
        $(".icon").toggleClass("close");
        $(".navbar").toggleClass("dropdown-navbar");
        $(".header").toggleClass("dropdown-header");
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 140) {
            $('.header').addClass('fixed-header');
        } else {
            $('.header').removeClass('fixed-header');
        }
    });
});