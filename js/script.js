document.addEventListener('DOMContentLoaded', function() {
  M.Sidenav.init(document.querySelectorAll('.sidenav'));
  M.Parallax.init(document.querySelectorAll('.parallax'));
  M.Collapsible.init(document.querySelectorAll('.collapsible'), {accordion: false});
});
