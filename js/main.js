let index = 0;

$(document).ready(function () {
  // fixed header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });

  // filter gallery
  $(".works-list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    var filter = $(this).attr("data-filter");

    if (filter == "all") {
      $(".image").show(400);
      $(".work-item-cont").css("flex-direction", "column");
    } else {
      $(".image")
        .not("." + filter)
        .hide(200);
      $(".image")
        .filter("." + filter)
        .show(400);
      $(".work-item-cont").css("flex-direction", "row");
    }
  });

  // magnific popup
  $(".works-items").magnificPopup({
    delegate: "a",
    type: "image",
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
});
