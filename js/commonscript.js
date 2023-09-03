$(document).ready(function () {
    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 100;
        $('html,body').stop().animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
        e.preventDefault();
    });
    //скрипт прокрутки
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // скрипт слайдеров
    $('.slider').slick({
        prevArrow: $('.reviews-arrows__left'),
        nextArrow: $('.reviews-arrows__right')
    });

    $('.services-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.services-arrows__left'),
        nextArrow: $('.services-arrows__right')
    });
    // скрипт для формы отпраки на главной
    $('#main-form').validate({
        errorPlacement: function (error, element) {
            return true;
        },
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            emailname: {
                required: true,
                minlength: 2
            },
            term: {
                required: true,
                minlength: 1
            },
            text: {
                required: true,
                minlength: 1
            }
        
        }
    });
    // скрипт для формы окна кабинета
    $('#private-form').validate({
        errorPlacement: function (error, element) {
            return true;
        },
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 2
            }
        }
    });
    // скрипт для формы окна заказа работы
    $('#order-button').validate({
        errorPlacement: function (error, element) {
            return true;
        },
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            email: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 2
            },

        }
    });
    $('#forms-questions-big').validate({
        errorPlacement: function (error, element) {
            return true;
        },
         rules: {
             username: {
                 required: true,
                 minlength: 2,
                 maxlength: 15
             },
             email: {
                 required: true,
                 minlength: 2
             },
             phone: {
                 required: true,
                 minlength: 2
             },
             subject: {
                 required: true,
                 minlength: 2
             },
         }
    });
     $('#forms-questions-small').validate({
         errorPlacement: function (error, element) {
             return true;
         },
         rules: {
             username: {
                 required: true,
                 minlength: 2,
                 maxlength: 15
             },
             email: {
                 required: true,
                 minlength: 2
             },
             phone: {
                 required: true,
                 minlength: 2
             },
             subject: {
                 required: true,
                 minlength: 2
             },
         }
     });
    $('.phone').mask('8 (999) 999-99-99');

});