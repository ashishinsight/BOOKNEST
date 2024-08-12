let navToggler = document.querySelector(".nav__toggler");
let navbar = document.querySelector(".book-nav");

navToggler.addEventListener("click", () => {
  navToggler.classList.toggle("active");
  navbar.classList.toggle("active");
});

let swiperHome = new Swiper(".swiper", {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  autoPlay: {
    delay: 3000,
    disabledOnInteraction: false,
  },
  breakpoints: {
    1220: {
      spaceBetween: 0,
    },
  },
});

/*=============================
Owl Carousel Initializer
=====================*/
$(document).ready(function () {
  $("#best__seller").owlCarousel({
    loop: true,
    margin: 10,
    navText: [
      "<a class='btn prev-caro'><i class='fa fa-angle-left' aria-hidden='true'></i></a>",
      "<a class='btn next-caro'><i class='fa fa-angle-right' aria-hidden='true'></i></a>",
    ],

    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
      },
      991: {
        items: 4,
        nav: true,
      },
      1200: {
        items: 5,
        nav: true,
        loop: true,
        margin: 10,
      },
    },
  });
  $("#new__books").owlCarousel({
    loop: true,
    margin: 10,
    navText: [
      "<a class='btn prev-caro'><i class='fa fa-angle-left' aria-hidden='true'></i></a>",
      "<a class='btn next-caro'><i class='fa fa-angle-right' aria-hidden='true'></i></a>",
    ],

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      991: {
        items: 2,
        nav: true,
      },
      1200: {
        items: 3,
        nav: true,
        loop: true,
        margin: 10,
      },
    },
  });
});

/*=============================
Testimonial Slider Initializer
=====================*/

const swiperT = new Swiper(".swiperTest", {
  // Optional parameters
  autoHeight: true,
  loop: true,

  // autoplay: {
  //   delay: 5000,
  // },

  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  allowTouchMove: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-y",
    prevEl: ".swiper-button-prev-x",
  },
});
