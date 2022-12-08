$(document).ready(function () {
  $(".reviews-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-prev"></button>',
  });

  $(".countdown").timeTo({
    timeTo: new Date(
      new Date("Thu Dec 9 2022 18:47:00 GMT+0300 (Москва, стандартное время)")
    ),
    theme: "white",
    fontSize: 48,
    captionSize: 14,
  });
});
