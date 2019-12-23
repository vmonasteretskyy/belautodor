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


    // COUNT TO


    // preloader


    $(function hideDiv() {
        $('.preloader-page').delay(2000).fadeOut();
    })

});


