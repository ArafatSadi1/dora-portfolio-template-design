let index = 0;

$(document).ready(function () {
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
  // test
  $(".popup-with-zoom-anim").magnificPopup({
    type: "inline",

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: "auto",

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: "my-mfp-zoom-in",
  });
});
