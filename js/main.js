let index = 0;

$(document).ready(function () {
  // nav toggle
  $(".nav-toggle").click(function () {
    $(".header .nav").slideToggle();
  });
  $(".header .nav a").click(function () {
    if ($(window).width() < 768) {
      $(".header .nav").slideToggle();
    }
  });

  // fixed header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });

  // experience section progress bar
  $("#about").waypoint(function (direction) {
    $(".progress-line span").addClass("animate");
  });
  $("#about").waypoint(
    function (direction) {
      $(".progress-line span").removeClass("animate");
    },
    { offset: "100%" }
  );
  
  // filter gallery
  $(".works-list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    var filter = $(this).attr("data-filter");

    if (filter == "all") {
      $(".image").show(400);
    } else {
      $(".image")
        .not("." + filter)
        .hide(200);
      $(".image")
        .filter("." + filter)
        .show(400);
    }
  });

  // magnific popup for work section
  $(".works-items").magnificPopup({
    delegate: "a",
    type: "image",
    fixedContentPos: true,
    fixedBgPos: true,

    gallery: {
      enabled: true,
    },
    image: {
      titleSrc: function (item) {
        return item.el.attr("title");
      },
    },
  });

  // blog popup
  $(".blog-popup").magnificPopup({
    type: "inline",

    fixedContentPos: true,
    fixedBgPos: true,

    overflowY: "scroll",

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: "my-mfp-zoom-in",
  });

  // service slider active button
  $(".service-swiper-button-prev").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".service-swiper-button-next").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // feedback slider active button
  $(".feedback-swiper-button-prev").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".feedback-swiper-button-next").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
// service section swiper slider
var swiper = new Swiper(".services-cont", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  centerSlider: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".service-swiper-button-next",
    prevEl: ".service-swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 320px
    574: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 766px
    860: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    // when window width is >= 1024px
    1240: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// feedback section swiper slider
var swiper = new Swiper(".feedback-items-cont", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  centerSlider: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".feedback-swiper-button-next",
    prevEl: ".feedback-swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    766: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
