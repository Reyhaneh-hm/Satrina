import '../../../scss/components/pages/home/slider.scss';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';

/*---------------FancyBox-----------------*/



/*
$(document).ready(function() {
    $('[data-fancybox="gallery"]').fancybox({
        loop: true, // چرخه بی‌پایان در گالری
        buttons: [ // دکمه‌های قابل نمایش
            'zoom',
            'slideShow',
            'fullScreen',
            'download',
            'thumbs',
            'close'
        ],
        animationEffect: "zoom", // انیمیشن ورودی/خروجی
        transitionEffect: "slide", // انتقال بین تصاویر
        caption: function(instance, item) { // اضافه کردن توضیحات
            return $(this).find('figcaption').html(); // استفاده از توضیحات HTML
        },
        thumbs: { // تنظیمات کوچک‌نما
            autoStart: true // شروع به طور خودکار
        },
        keyboard: true, // فعال کردن ناوبری با کیبورد
        touch: true, // فعال کردن ناوبری لمسی
        protect: true, // جلوگیری از دانلود تصویر با کلیک راست
        idleTime: false, // غیر فعال کردن حالت بیکاری
        smallBtn: true, // نمایش دکمه‌های کوچک
        toolbar: true, // نمایش نوار ابزار
        animationDuration: 500, // مدت زمان انیمیشن
        transitionDuration: 600 // مدت زمان انتقال بین تصاویر
    });
});
*/
/*---------------------------------------*/

import $ from "jquery";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

$(document).ready(function () {

    //FancyBox
    Fancybox.bind('[data-fancybox]', {
        infinite: true,
        keyboard: true,
        loop: true,

        buttons: [
            'zoom',
            'slideShow',
            'fullScreen',
            'download',
            'thumbs',
            'close'
        ],
        animationEffect: "zoom",
        transitionEffect: "slide",
        thumbs: {
            autoStart: true
        },
        keyboard: true,
        touch: true,
        protect: true,
        idleTime: false,
        smallBtn: true,
        toolbar: true,
        animationDuration: 500,
        transitionDuration: 600,
    });

    //Slider
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

        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 372,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
});