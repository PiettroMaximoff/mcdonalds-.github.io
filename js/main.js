'use strict';

/* ----- Слайдер Swiper -----*/
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 80,
        }
    },
});

/* ----- Определение устроства ----- */
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

} else {
    document.body.classList.add('_pc');
}

/* ----- Меню-бургер ----- */
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

/* ----- Popup-окно ----- */

$(document).ready(function () {
    $('.buy-btn').click(function (event) {
        $(this).toggleClass('active');
        $('.order').toggleClass('active');
        $('body').toggleClass('_lock');
    });
    $('.result__btn').click(function (event) {
        $(this).toggleClass('active');
        $('.order').toggleClass('active');
        $('body').toggleClass('_lock');
    });
});