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
});