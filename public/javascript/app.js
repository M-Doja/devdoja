$(document).ready(function(){
  $('.icons').slick({
    adaptiveHeight: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    arrows: false
  });

  $('#yourElement').addClass('animated fadeInLeftBig');
  // $('.tlt').textillate({ in: { initialDelay: 15} });
  // $('.tlt').textillate({ in: { effect: 'hinge', reverse: false } });
  $('.tlt').textillate();



// $('#navB ').localScroll({left:250, top:"50px"});

$(function(){
    $(".arctic_scroll").arctic_scroll({
        speed: 800
    });
});

$("#modal").modal();



});
