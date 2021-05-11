$('.profi-slider').slick({
    infinite: false,
    slidesToShow: 4,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    slidesToScroll: 1,
    speed: 500,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '90px',
          slidesToShow: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 321,
        settings: {
          centerMode: true,
          centerPadding: '70px',
          slidesToShow: 1,
          infinite: true,
        }
      }
    ]
  });

  $('.equipment-mob').slick({
    infinite: false,
    slidesToShow: 4,
    speed: 500,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true
        }
      }
    ]
  });

  $('.rev-slider').slick({
    infinite: false,
    slidesToShow: 2,
    speed: 500,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    adaptiveHeight: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


  $('.video-slider').slick({
    infinite: false,
    slidesToShow: 3,
    speed: 500,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true
        }
      }
    ]
  });



  window.onload = function() {
    $('.call-master-popup').toggleClass('open-modal');
  };

  $('.close-call').click(function() {
    $('.call-master-popup').toggleClass('open-modal');
  });



  $('.main-item-li').click(function() {
    if ($(this).hasClass('active')){
      $('.main-item-li').removeClass('active');
    }else{
      $('.main-item-li').removeClass('active');
      $(this).toggleClass('active');
    };
  });
  $('.sub-a-1').click(function() {
    $(this).toggleClass('active');
  });
  $('.sub-b-1').click(function() {
    $('.sub-a-1').removeClass('active');
  });
  $('.sub-a-2').click(function() {
    $(this).toggleClass('active');
  });
  $('.sub-b-2').click(function() {
    $('.sub-a-2').removeClass('active');
  });

  $('.burger').click(function() {
    $(this).toggleClass('active');
    $('.mobile-nav').toggleClass('active');
    $('body').toggleClass('modal-open');
  });

  $('.mob-max-h').click(function() {
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).children('.more').html('еще');
    }else{
      $(this).addClass('active');
      $(this).children('.more').html('скрыть');
    };
  });

  (function($) {
    $(function() {
      $('.rmb-ul').on('click', '.rmb-li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.rmb-inside').find('div.rmb-block').removeClass('active').eq($(this).index()).addClass('active');
      });
    });
  })(jQuery);
  
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 169
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });