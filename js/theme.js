$(document).ready(function() {
  //banner slider

  $('.datepick').each(function(){
    $(this).datepicker();
  });

  $('.guest').select2();

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 16,
    slidesPerView: 5,
    //freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 500,
    loop: true,
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").addClass("animate");
        $(".swiper-progress-bar").addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").addClass("animate");
      }
    },
  });  
 
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 16,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 500,
    loop: true,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: swiper,
    },
  });
   var appendNumber = 4;
  document.querySelector(".append-2-slides").addEventListener("click", function () {
    
    swiper.appendSlide([
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-10.jpg" /><div class="swiper-progress-bar"><span class="slide_progress-bar"></span></div></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-3.jpg" /><div class="swiper-progress-bar"><span class="slide_progress-bar"></span></div></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-10.jpg" /><div class="swiper-progress-bar"><span class="slide_progress-bar"></span></div></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-3.jpg" /><div class="swiper-progress-bar"><span class="slide_progress-bar"></span></div></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-10.jpg" /><div class="swiper-progress-bar"><span class="slide_progress-bar"></span></div></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-3.jpg" /><div class="swiper-progress-bar"><span class="slide_progress-bar"></span></div></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-10.jpg" /><div class="swiper-progress-bar"><span class="slide_progress-bar"></span></div></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-3.jpg" /><div class="swiper-progress-bar"><span class="slide_progress-bar"></span></div></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-10.jpg" /><div class="swiper-progress-bar"><span class="slide_progress-bar"></span></div></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-3.jpg" /><div class="swiper-progress-bar"><span class="slide_progress-bar"></span></div></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-10.jpg" /><div class="swiper-progress-bar"><span class="slide_progress-bar"></span></div></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-3.jpg" /><div class="swiper-progress-bar"><span class="slide_progress-bar"></span></div></div>',
    ]);
    swiper2.appendSlide([
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-10.jpg" /></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-10.jpg" /></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-10.jpg" /></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-10.jpg" /></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-10.jpg" /></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-10.jpg" /></div>',
      '<div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></div>',
    ]);
  });

  //apartments extra listing - read 2 more
  var step_nbr = 2;
  var min_nbr = 6;

  $('.extra ul').each(function() {
    var LiN = $(this).find('li').length;
    if (LiN > 5) {
      $('li', this).eq(3).nextAll().hide().addClass('toggleable');
      $(this).append('<li class="more">Show 2 more</li>');
    }
  });

  $('.extra ul').on('click', '.more', function() {
    var visible_lis = $('.extra ul li:visible').length;
    console.log(visible_lis);
    if ($(this).hasClass('less')) {

      $(this).prevAll('li:not(.toggleable)').slice(0, 2).addClass('toggleable').hide();

      if (visible_lis <= 7) {
        $(this).text('Show 2 more').removeClass('less');
      }


    } else {
      $(this).siblings('li.toggleable').slice(0, step_nbr).removeClass('toggleable').show();

      if ($('li.toggleable').length == 0) {
        $(this).text('Less...').addClass('less');
      }
    }
  });

});