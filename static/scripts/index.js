$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
      wrapper: ".gs",
      content: ".content",
      smooth: 1.5,
      effects: true,
    });
  }

  $(document).on("click", ".tab", function () {
    const tab = $(this).data("tab");

    $(".tab").removeClass("tab-active");
    $(this).addClass("tab-active");

    $(".product-box").removeClass("active");
    $(`.product-box[data-content="${tab}"]`).addClass("active");
  });

  $('.product-box[data-content="business"]').addClass("active");

  $("a[href*='#']").on("click", function (e) {
    e.preventDefault();

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        777
      );

    return false;
  });

  $(document).on("click", ".mobile-action", function () {
    if ($(this).hasClass("ti-menu-2")) {
      $(this).removeClass("ti-menu-2");
      $(this).addClass("ti-x");
    } else {
      $(this).removeClass("ti-x");
      $(this).addClass("ti-menu-2");
    }

    $(".mobile-menu").fadeToggle(200);
  });

  $(document).on("click", ".mobile-menu a", (e) => {
    e.preventDefault();

    const bth = $(".mobile-action");

    if (bth.hasClass("ti-menu-2")) {
      console.log("ti");
      bth.removeClass("ti-menu-2");
      bth.addClass("ti-x");
    } else {
      console.log("menu");
      bth.removeClass("ti-x");
      bth.addClass("ti-menu-2");
    }

    $(".mobile-menu").fadeOut(0);
  });
});
