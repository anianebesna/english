$(function () {
    $('.reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="img/btn-prev.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="img/btn-next.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 940,
                settings: {
                    arrows: false,
                    dots: true,
                   
                }
            }
        ]
       
    });

    $('input[type=checkbox]').styler();

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('active');
        $('.menu__btn-item').toggleClass('active');
    });

});

new WOW().init();

$(function () {
    let btn = $('#back-to-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
});

