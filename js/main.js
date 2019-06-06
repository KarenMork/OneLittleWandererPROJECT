$(document).ready(function(){
  // alert('ready');
  // $('.flexslider').flexslider();
  $(".close, .hamburger").click(function(e){
    e.preventDefault();
    console.log('I ran')
    $(".main-nav").toggleClass('open-nav');
    $("body").toggleClass('nav-opened');
  });
  var scroll = new SmoothScroll('a[href*="#"]');
});
