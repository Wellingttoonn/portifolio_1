$(document).ready(function() {


  var $header = $('nav');
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function(){
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });


    //RESPONSIVE MENU START

    var body = $('body');
    var menuTrigger = $('.js-menu-trigger');
    var mainOverlay = $('.js-main-overlay');

    menuTrigger.on('click', function(){
      body.addClass('menu-is-active');
    });

    mainOverlay.on('click', function(){
      body.removeClass('menu-is-active');
    });

    $('.menu li a').on('click', function(){
        $('body').removeClass("menu-is-active");
    });
});