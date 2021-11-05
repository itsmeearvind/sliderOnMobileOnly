    /* This slider will run on mobile only */
    $(window).on('load resize orientationchange', function() {
      $('.featured_image-desktop').each(function(){               // Change '.featured_image-desktop' with your class name
        var $carousel = $(this);
        // slick on mobile
        if ($(window).width() > 991) {                          // change the width size according to your mobile viewport from where it shows as slider
          if ($carousel.hasClass('slick-initialized')) {
            $carousel.slick('unslick');
          }
        }
        else{
          if (!$carousel.hasClass('slick-initialized')) {
            $carousel.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              mobileFirst: true,
              dots: true,
            });
          }
        }
      });
    });
