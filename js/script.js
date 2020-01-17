document.addEventListener('DOMContentLoaded', function() {
  M.Sidenav.init(document.querySelectorAll('.sidenav'));
  M.Parallax.init(document.querySelectorAll('.parallax'));
  M.Collapsible.init(document.querySelectorAll('.collapsible'));
  M.Tooltip.init(document.querySelectorAll('.tooltipped'));
  M.Materialbox.init(document.querySelectorAll('.materialboxed'));
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

function showMaps() {
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10285.71907163593!2d8.839017769368185!3d49.871955340803154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5951ab8674d9861e!2sDr.%20med.%20dent.%20Catharina%20K%C3%B6bler%20-%20Zentrum%20f%C3%BCr%20Oralchirurgie%20und%20Systemische%20Zahnheilkunde!5e0!3m2!1sde!2sus!4v1570797537358!5m2!1sde!2sus");
  ifrm.setAttribute("class", "map");
  ifrm.setAttribute("frameborder", "0");
  ifrm.setAttribute("scrolling", "no");
  ifrm.setAttribute("marginheight", "0");
  ifrm.setAttribute("marginwidth", "0");

  var elem = document.getElementById("mapsDisabled");
  if (elem) {
    elem.style.display = "none";
  }
  var e = document.getElementById("triangle");
  if (e) {
    e.insertAdjacentElement("afterend", ifrm)
  }
}

function enableMaps() {
  sessionStorage.setItem("showGoogleMaps", "true");
  showMaps();

}

if (sessionStorage.getItem("showGoogleMaps") === "true") {
  showMaps();
}
