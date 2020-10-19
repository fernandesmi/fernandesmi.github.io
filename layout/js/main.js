$(document).ready(function() {
    var bannerSlider = $('#banner-slider-desktop');

    if (bannerSlider.length) {
        bannerSlider.slick({
        autoplay: false,
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
      })
    }

    var bannerSliderMob = $('#banner-slider-mobile');

    if (bannerSliderMob.length) {
        bannerSliderMob.slick({
        autoplay: false,
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
      })
    }

    var benefitsList = $('#benefits-slider');

    if(benefitsList.length) {
      benefitsList.slick({
        arrows: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        swipeToSlide: true,
        infinite: true,
        responsive: [
        {
          breakpoint: 1599,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
          }
        },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false,
            }
          },
          
          {
            breakpoint: 768,
            settings: {
              dots: false,
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
            },
          },
        ],
      });
    }

    var partnersList = $('#partners-slider');

    if(partnersList.length) {
      partnersList.slick({
        arrows: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        swipeToSlide: true,
        infinite: true,
        responsive: [
        {
          breakpoint: 1599,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: false,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2
          },
        },
          {
            breakpoint: 480,
            settings: {
              dots: false,
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
            },
          },
        ],
      });
    }

    var shelfSlider = $('#shelf-slider');

    if (shelfSlider.length) {
        shelfSlider.slick({
            arrows: true,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            swipeToSlide: true,
            speed: 300,
            infinite: true,
            responsive: [
            {
              breakpoint: 1599,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: false,
              }
            },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: false,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  dots: false,
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1
                },
              },
            ],
          });
    }

    $('.footer-menu__title').click(function() {
        $(this).toggleClass('footer-menu__title--active');
    });

    var modalClose = $('.modal__close')
    modalClose.click(function() {
        $(this).parent().toggleClass('modal--active');
    })


    
});