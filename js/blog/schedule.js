(function ($) {
  "user strict";
  $(window).on('load', function () {
    $('.loader').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('img') + ')');
      return bg;
    });
    var $gallery = $(".grid-area");
    $gallery.isotope({
      itemSelector: '.grid-item',
      masonry: {
        columnWidth: 1,
      }
    });
  });
  $(document).ready(function () {
    //NiceSelect
    $('.select-bar').niceSelect();
    //MagnificPopup
    $('.magnific_popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      disableOn: 300
    });
    $("body").each(function () {
      $(this).find(".magnific_img_popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true
        }
      });
    });
    //Events
    $('.events-area .event-item').on('click', function (e) {
      var element = $(this);
      if (element.hasClass('open')) {
        element.addClass('open');
      } else {
        element.addClass('open');
        element.children('.cont').children('.extra-cont').slideDown(300, "swing");
        element.siblings('.event-item').children('.cont').children('.extra-cont').slideUp(300, "swing");
        element.siblings('.event-item').removeClass('open');
      }
    });
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    $('ul').parent('li').hover(function () {
      var menu = $(this).find("ul");
      var menupos = $(menu).offset();
      if (menupos.left + menu.width() > $(window).width()) {
        var newpos = -$(menu).width();
        menu.css({
          left: newpos
        });
      }
    });
    $('.menu li a').on('click', function (e) {
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('ul').slideDown(300, "swing");
        element.siblings('li').children('ul').slideUp(300, "swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(300, "swing");
      }
    })
    var scrollTop = $(".go-top");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    $('.go-top').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    $('.header-bar').on('click', function () {
      $(this).toggleClass('active');
      $('.mobile-menu').toggleClass('active');
    })
    $('.close-mobile-menu').on('click', function () {
      $('.mobile-menu').removeClass('active');
      $('.header-bar').removeClass('active');
    })
    $('.overlayer').on('click', function () {
      $(this).removeClass('active');
    })
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 1) {
      $("header").addClass('active');
    }
    var header = $("header");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 1) {
        header.removeClass("active");
      } else {
        header.addClass("active");
      }
    });
    $(".odo-item, .odo-item-2").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
            var el = document.querySelectorAll('.odometer')[i];
            el.innerHTML = el.getAttribute("data-odo");
          }
        }
      });
    });
    $('.sponsor-slider, .sponsor-slider-2').owlCarousel({
      loop: true,
      margin: 30,
      responsiveClass: true,
      nav: false,
      dots: false,
      loop: true,
      autoplay: true,
      center: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items:2,
          },
          400:{
              items:3,
          },
          768:{
              items:3,
          },
          992:{
              items:4,
          },
          1200:{
              items:5,
          },
          1500:{
              items:6,
          },
          1920:{
              items:7,
          },
        }
    })
    $('.testimonial-slider').owlCarousel({
      loop:true,
      nav:false,
      dots: false,
      items:1,
      autoplay:false,
      margin: 0,
      responsive:{
        0:{
            items: 1,
        },
        768:{
            items: 2,
        },
        1200:{
            items: 3,
        }
    }
    });
    $('.blog-slider').owlCarousel({
      loop:true,
      nav:false,
      dots: false,
      items:1,
      autoplay:false,
      margin: 30,
      responsive:{
        0:{
            items: 1,
        },
        768:{
            items: 2,
        }
    }
    });
    var testimonial_trigger = $('.testimonial-slider, .blog-slider');
    testimonial_trigger.owlCarousel();
    // Go to the next item
    $('.testimoni-prev').on('click', function() {
        testimonial_trigger.trigger('prev.owl.carousel');
    })
    $('.testimoni-next').on('click', function() {
        testimonial_trigger.trigger('next.owl.carousel');
    })
    $('.social-icons li a').on('mouseover', function(e) {
      var social = $(this).parent('li');
      if(social.children('a').hasClass('active')) {
        social.siblings('li').children('a').removeClass('active');
        $(this).addClass('active');
      } else {
        social.siblings('li').children('a').removeClass('active');
        $(this).addClass('active');
      }
    });
  });
})(jQuery);
