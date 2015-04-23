$(document).ready(function(){ 
  $('.toggle-button').on('click', function() {
    slideout.toggle();
  });
  $('.nav-pills>li>a').on('click', function() {
    slideout.toggle();
  });
  $("#naviMenu").navi({
  hash: "#!/",
  content: $("#naviContent"),
  useAjax: false,
  useAnimation: true,
  animationSpeed: 0
    });
});

/*Slideout.js*/

  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });

