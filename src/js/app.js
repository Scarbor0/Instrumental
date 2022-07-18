import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();


window.onload = function () {
  let preloader = document.getElementById('preloader');
  // (".preloader").delay(20000).fadeOut();
  preloader.style.display = 'none';
};

import Swiper, { Pagination } from 'swiper';
// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// init Swiper:
const swiperProduct = new Swiper('.swiper__product', {
  // configure Swiper to use modules
  modules: [Pagination],
  grabCursor: true,
  pagination: {
	el: ".swiper-pagination-product",
  clickable: true,
 },
});


//swiper__reviews
//swiper-slide-reviews
const swiperReviews = new Swiper('.swiper__reviews', {
  // configure Swiper to use modules
  modules: [Pagination],
  mousewheel: true,
  grabCursor: true,
  direction: "vertical",
  spaceBetween: 385,
        pagination: {
          el: ".swiper-pagination-reviews",
          clickable: true,
          
 },
});



// !================ \/ Плавная прокрутка до якоря \/ =============
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
// !================ /\ Плавная прокрутка до якоря /\ =============


