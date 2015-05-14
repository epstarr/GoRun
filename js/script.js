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

//Add 15 minutes to timer
$(".add").click(function() {
  if ($(this).hasClass("disabled") == true) {
  } else {
    $seconds = $seconds + 900;
    if ($seconds >= 3600) {
      $("#clock").backward_timer({
        seconds: $seconds,
        format: 'h%:m%'
      });
      $(".minutes-hours").text("hours");
    } else{
      $('#clock').backward_timer({
        seconds: $seconds,
        format: 'm%:s%'
      });
      $(".minutes-hours").text("minutes");
    }
  }
})

//Subtract 15 minutes from timer
$(".sub").click(function() {
  if ($(this).hasClass("disabled") == true) {
  } else if ($seconds <= 900) {
  } else {
    $seconds = $seconds - 900;
    if ($seconds >= 3600) {
      $('#clock').backward_timer({
      seconds: $seconds,
      format: 'h%:m%'
    });
      $(".minutes-hours").text("hours");
    } else {
      $('#clock').backward_timer({
      seconds: $seconds,
      format: 'm%:s%'
    });
      $(".minutes-hours").text("minutes");
    }
    
  }
})

//begin timer and disable add and sub buttons
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
