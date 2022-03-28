$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 800,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel_arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel_arrow_right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                  arrows: false,
              }
            }
          ]
    });
});