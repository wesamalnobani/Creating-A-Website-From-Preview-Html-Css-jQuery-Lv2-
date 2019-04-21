/*global $, alert, console, window*/

$(function () {

    'use strict';

    //Adjust Header Height.

    var myHeadwe = $('.header');

    myHeadwe.height($(window).height());

    $(window).resize(function () {

        myHeadwe.height($(window).height());
    });

    // Links Add Active Class.

    $('.links li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // Smooth Scroll To Div - Not

    $('.links li a').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);
    });

});
