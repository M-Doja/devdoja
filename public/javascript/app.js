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

  $(".content").mCustomScrollbar({
    axis:"y", // horizontal scrollbar
    setHeight: 648,
    theme: "string",
    scrollInertia: 100
});



});
