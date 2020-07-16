$(function(){


$(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

$('.produkt-slider__inner').slick({
	dots: true,
	arrows: false,
	slidesToShow: 4,
	slidesToScroll: 4
});

var mixer = mixitup('.produkts__inner-box');


});