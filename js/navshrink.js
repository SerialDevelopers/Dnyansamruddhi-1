/**
 * Created by SACHIN on 02-Jun-17.
 */
$(document).ready(function() {
    $(window).scroll(function () {
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 233) {
            $('#nav_bar').addClass('navbar-fixed-top animated fadeInDown');
        }
        if ($(window).scrollTop() < 234) {
            $('#nav_bar').removeClass('navbar-fixed-top animated fadeIn');
        }
    });
});