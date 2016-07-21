$(document).ready(function() {
  $(".dropdown-button").dropdown({hover: false});
  $(".button-collapse").sideNav();
  $('.slider').slider({
    full_width: true,
    indicators: false,
    transition: 1500,
    height: 600
  });
});
