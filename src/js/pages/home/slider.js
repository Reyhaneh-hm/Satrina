import '../../../scss/components/pages/home/slider.scss';

/*---------------------------------------*/


import $ from "jquery";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

$(document).ready(function () {
    $('.sliderBox').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        // dots: true,
        arrows: true,
        // prevArrow: $("#prevArrowHome"),
        // nextArrow: $("#nextArrowHome"),
    });
});