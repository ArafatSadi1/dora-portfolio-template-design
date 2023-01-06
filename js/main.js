let index = 0;

$(document).ready(function () {
  // filter gallery
  $(".works-list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".work-item").show("1000");
      $(".work-item-cont").css({ "flex-direction": "column" });
    } else {
      $(".work-item")
        .not("." + value)
        .hide("1000");
      $(".work-item")
        .filter("." + value)
        .show("1000");
      $(".work-item-cont").css({ "flex-direction": "row" });
    }
  });
  // add active class on filter gallery selected item
  $(".works-list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // set lightbox img max height
  const wHeight = $(window).height();
  $(".lightbox-img").css("max-height", wHeight + "px");
  // lightbox
  $(".work-item-inner").click(function () {
    index = $(this).parent(".work-item").index();
    $(".works-lightbox").addClass("open");
    lightboxOpen();
  });
  // close lightbox
  $(".lightbox-close").click(function () {
    $(".works-lightbox").removeClass("open");
  });

  // close lightbox when clicked outside of img-box
  $(".works-lightbox").click(function (event) {
    if ($(event.target).hasClass("works-lightbox")) {
      $(this).removeClass("open");
    }
  });
});

function lightboxOpen() {
  const imgSrc = $(".work-item").eq(index).find("img").attr("data-modal");
  $(".lightbox-img").attr("src", imgSrc);
}
