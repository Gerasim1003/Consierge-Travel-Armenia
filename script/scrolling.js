$('.m_about').click(function () {

    var elem = $('.about_2'),
        elemTop = elem.offset().top;
    $('body,html').animate({
        scrollTop: elemTop
    }, 500);

});
$('.m_services').click(function () {

    var elem = $('.services_sl'),
        elemTop = elem.offset().top - 60;
    $('body,html').animate({
        scrollTop: elemTop
    }, 500);

});

$('.m_tours').click(function () {

    var elem = $('.tours_sl'),
        elemTop = elem.offset().top - 60;
    $('body,html').animate({
        scrollTop: elemTop
    }, 500);

});

$('.m_excursion').click(function () {

    var elem = $('.excursion_sl'),
        elemTop = elem.offset().top - 60;
    $('body,html').animate({
        scrollTop: elemTop
    }, 500);

});

$('.m_contact').click(function () {

    var elem = $('#contact'),
        elemTop = elem.offset().top;
    $('body,html').animate({
        scrollTop: elemTop
    }, 500);

});

