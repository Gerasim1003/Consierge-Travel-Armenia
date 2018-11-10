$(function () {


    var currentScrolling = {};

    function minDifference(a, b) {
        return Math.abs(a - b) <= 30;
    }

    function isDownScroll(last) {
        return $(document).scrollTop() - last > 0;
    }

    function triggerScroll(sliderId) {
        var sliderHeight = $("#" + sliderId).height(),
            offsetTop = $("#" + sliderId).offset().top,
            windowScrollPosition = $(window).scrollTop(),
            sliderTriggerPosition = offsetTop - sliderHeight;

        if (!currentScrolling[sliderId] && windowScrollPosition === sliderTriggerPosition || minDifference(windowScrollPosition, sliderTriggerPosition)) {
            currentScrolling[sliderId] = true;
            $('body,html').animate({
                scrollTop: offsetTop - 60
            }, 300, 'swing', function () {
                currentScrolling[sliderId] = false;
            });
        }
    }

    var lastTop = $(window).scrollTop();
    $(window).scroll(function () {
        var aTop = 10;
        if ($(this).scrollTop() >= aTop) {

            $('.st_nav').css({
                display: "block"
            });
            $('.nv').css({
                visibility: "hidden"
            });

        } else {
            $('.st_nav').css({
                display: "none"
            });
            $('.nv').css({
                visibility: "visible"
            });

        }

        if (isDownScroll(lastTop)) {
            triggerScroll('carouselExampleControll');
            triggerScroll('carouselExampleControl');
            triggerScroll('carouselExampleControlls');
        }

        lastTop = $(window).scrollTop();
    });
});

$(document).ready(function () {

    $('.carousel').bcSwipe({
        threshold: 50
    });
    $(".m_icon").click(function () {
        $("#m_nav").slideToggle("slow")
    });
    $(document).scroll(function () {
        $("#m_nav").slideUp()
    });

    $(".st_m_icon").click(function () {
        $("#st_m_nav").slideToggle("slow")
    });
    $(document).scroll(function () {
        $("#st_m_nav").slideUp()
    });



});
