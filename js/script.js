$(document).ready(function () {
    $('.dropdown-button').dropdown({
        hover: true,
        belowOrigin: true,
        inDuration: 500
    });
    $('.button-collapse').sideNav();
    $('.slider').slider({
        full_width: true,
        indicators: false,
        transition: 1500,
        height: 500
    });

    $(window).scroll(handleScroll);
});

var handleScroll = function() {
    if ((window.scrollY || window.pageYOffset) > 500) {
        $('.navbar').addClass('navbar-fixed').css({top: '0px'});
    } else {
        $('.navbar').removeClass('navbar-fixed').css({top: '458px'});
    }
};
