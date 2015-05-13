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

(function($) {

$.fn.spinner = function() {

this.each(function() {
var el = $(this);
// add elements

el.wrap('<span class="spinner"></span>');    

el.before('<span class="sub">-</span>');

el.after('<span class="add">+</span>');


    });

};

})(jQuery);

$('#clock').spinner();

var $seconds = 900;

$('#clock').backward_timer({
  seconds: $seconds,
  format: 'm%:s%'
})

$(".add").click(function() {
  if ($(this).hasClass("disabled") == true) {
  } else {
    $seconds = $seconds + 900;
    $('#clock').backward_timer({
      seconds: $seconds,
      format: 'm%:s%'
    })
  }
})
$(".sub").click(function() {
  if ($(this).hasClass("disabled") == true) {
  } else {
    $seconds = $seconds - 900;
    $('#clock').backward_timer({
      seconds: $seconds,
      format: 'm%:s%'
    })
  }
})

$('#start').click(function() {
  $('#clock').backward_timer('start');
  $(".add").addClass("disabled");
  $(".sub").addClass("disabled");
})
$('#cancel_control').click(function() {
  $('#demo').backward_timer('cancel')
})
$('#reset_control').click(function() {
  $('#demo').backward_timer('reset')
})
