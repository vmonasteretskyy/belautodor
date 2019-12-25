$(document).ready(function () {
    // main slider
    $('.maintopslider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    });

    // scroll to
    $(".scrollto").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 1000);
    });

    // menu
    $('.phonemenu').click(function () {
        $('.header__nav').fadeIn();
    });

    $('.closemenu').click(function () {
        $('.header__nav').fadeOut();
    });

    // map
    $('#simfer').click(function () {
        $('.mappop').fadeIn();
    });


    $('#map > g').click(function () {
        var obl = $(this).attr('id');
        $('.mappop').attr('data-obl', obl);
        $('.mappop').show();

        var text = $(this).attr('data-text');
        $('.mappop span').text(text);

        var img = $(this).attr('data-img');
        $('.mappop img').attr('data-img');
        $('.mappop img').attr('src', img);

    });


    // preloader
    $(function hideDiv() {
        $('.preloader-page').delay(2000).fadeOut();
    });

    // Company slider
    $('.company-machinery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        initialSlide: 1,
        infinite: false,
        asNavFor: '.company-characteristics',
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]

    });
    $('.company-characteristics').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: false,
        asNavFor: '.company-machinery',
        dots: false,
        arrows: false,
        fade: true

    });

    $('.company-project__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        initialSlide: 1,
        infinite: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]

    });



});


