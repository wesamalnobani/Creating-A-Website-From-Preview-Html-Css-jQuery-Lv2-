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

    // Our Auto Slider Code.

    (function autoSlider () {

        $('.slider .active').each(function () {

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSlider ();
                });
            } else {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active');

                    $('.slider div').eq(0).addClass('active').fadeIn();

                    autoSlider ();
                });
            }
        });

    } ());

    // Trigger Mixitup 

    $('#container').mixItUp();

    // Adjust Shuffle Links.

    $('.shuffle li').click(function () {

        $(this).addClass('selected').siblings().removeClass('selected');
    });

});
