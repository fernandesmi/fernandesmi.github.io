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

    var benefitsList = $('#benefits-slider');

    if(benefitsList.length) {
        benefitsList.slick({
            autoplay: false,
            dots: false,
            arrows: false,
            mobileFirst: true,
            responsive: [
              {
                breakpoint: 767,
                settings: 'unslick'
               
              }
            ]
          })
    }

    var partnersList = $('#partners-slider');

    if(partnersList.length) {
        partnersList.slick({
            autoplay: false,
            dots: false,
            arrows: false,
            mobileFirst: true,
            responsive: [
              {
                breakpoint: 767,
                settings: 'unslick'
               
              }
            ]
          })
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