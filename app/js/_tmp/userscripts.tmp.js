"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.welcome-slider-container', {
    // Optional parameters

    /* loop: true, */
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var swiper1 = new Swiper('.welcome-repertoire__slider', {
    // Optional parameters

    /* loop: true, */
    slidesPerView: 5,
    spaceBetween: 15,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});