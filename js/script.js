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

// substract

el.parent().on('click', '.sub', function () {

if (el.val() > parseInt(el.attr('min')))

el.val( function(i, oldval) { return oldval - 15 });

});

// increment

el.parent().on('click', '.add', function () {

if (el.val() < parseInt(el.attr('max')))

el.val( function(i, oldval) { return +oldval + +15 });

});

    });

};

})(jQuery);

$('#clock').spinner();

var timer = new Tock({
  countdown: true,
  interval: 1000,
  callback: function () {
    var current_time = timer.msToTime(timer.lap());
    $('#clock').val(current_time);
},
  complete: function () {
    alert("Time's up!");
}
});





$('#start').on('click', function() {
    timer.start($('#clock').val() + ":00");
});