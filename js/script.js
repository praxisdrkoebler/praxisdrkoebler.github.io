document.addEventListener('DOMContentLoaded', function() {
  M.Sidenav.init(document.querySelectorAll('.sidenav'));
  M.Parallax.init(document.querySelectorAll('.parallax'));
  M.Collapsible.init(document.querySelectorAll('.collapsible'));
  M.Tooltip.init(document.querySelectorAll('.tooltipped'));
});

var navScrollOffset = window.outerWidth <= 400 ? 220 : window.outerWidth <= 1024 ? 420 : 530;
var navTransparent = false;
document.addEventListener('scroll', function() {
  if (!navTransparent && window.scrollY > navScrollOffset) {
    document.querySelector('nav').className = 'orchid-transparent';
    navTransparent = !navTransparent;
  } else if (navTransparent && window.scrollY <= navScrollOffset) {
    document.querySelector('nav').className = 'orchid';
    navTransparent = !navTransparent;
  }
});
