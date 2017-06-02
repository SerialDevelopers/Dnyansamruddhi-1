/**
 * Created by SACHIN on 02-Jun-17.
 */
$(document).ready(function() {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 143) {
            $('#nav_bar').addClass('navbar-fixed-top glass animated fadeInDown');
        }
        if ($(window).scrollTop() < 144) {
            $('#nav_bar').removeClass('navbar-fixed-top glass animated fadeIn');
        }
    });
});