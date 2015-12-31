$(document).ready(function(){
  // icon carousel
  $('.icons').slick({
    adaptiveHeight: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    mobileFirst: true,
    arrows: false
  });

  // $('#yourElement').addClass('animated fadeInLeftBig');
  // $('.tlt').textillate({ in: { initialDelay: 15} });
  // $('.tlt').textillate({ in: { effect: 'hinge', reverse: false } });
  // animation on header
  $('.tlt').textillate();



// allows for page scoll to section
$(function(){
    $(".arctic_scroll").arctic_scroll({
        speed: 800
    });
});


// display projects
$("#CoderNetDiv").hover(function(){
    // Stops any animations on this element, and starts a new one
    // acording to which event was called - mouseover, or mouseout
    $(this).find("div").stop().toggle("slow");
});
$("#MovieZoneDiv").hover(function(){
    // Stops any animations on this element, and starts a new one
    // acording to which event was called - mouseover, or mouseout
    $(this).find("div").stop().toggle("slow");
});


// flip icons
// $("#card-grid").flip({
//   axis: 'x',
//   trigger: 'hover'
// });
// $("#card").flip({axis: 'x'});





});
