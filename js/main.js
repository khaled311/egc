$(window).on("load", function () {
    AOS.refresh();

    $(".loader").fadeOut(1000);
    $("html").css("overflow-y", "auto")
});

$(function () {

    // open Side Nav
    $(".menuTriger").on("click", function () {
        $(".sideNav").toggleClass("open");
        // $(".navover").toggleClass("open");
        $("body").css("overflow", "hidden");
        setTimeout(function () {
            $(".sideNav").addClass("origin");
        }, 500)
    });


    // Close Side Nav
    $(".close1").on("click", function () {
        // $(".navover").removeClass("open");
        $(".sideNav").toggleClass("open");
        // $(".sideNav").toggleClass("origin");
        $("body").css("overflow", "auto");
        setTimeout(function () {
            $(".sideNav").removeClass("origin");
        }, 600)
    });

    $(window).on("scroll", function () {
        AOS.refresh();
    })

    var headerswiper = new Swiper("header .swiper-container", {
        grabCursor: true,
        autoplay: {
            delay: 5000,
        },
        speed: 700,
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: {
            el: "header .swiper-pagination",
            clickable: true,
        },
    });

    var promotionswiper = new Swiper(".promotions .swiper-container", {
        grabCursor: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: ".promotions .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            992: {
                spaceBetween: 57,
                slidesPerView: 1,
            },
        },
    });

    var blogswiper = new Swiper(".blog .swiper-container", {
        grabCursor: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: ".blog .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            1200: {
                spaceBetween: 30,
                slidesPerView: 3
            }
        },
    });

    // Accordion
    $(".Occord .box .title").on("click", function () {
        $(this).toggleClass("bor").next().slideToggle(400);
        $(this).parent().siblings().find(".title").removeClass("bor").next().slideUp()
    })

    AOS.init({
        once: false,
        disable: "mobile",
    });

    jQuery("img.svg").each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr("id");
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");

        jQuery.get(
            imgURL,
            function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find("svg");

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== "undefined") {
                    $svg = $svg.attr("id", imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== "undefined") {
                    $svg = $svg.attr("class", imgClass + " replaced-svg");
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr("xmlns:a");

                // Check if the viewport is set, else we gonna set it if we can.
                if (
                    !$svg.attr("viewBox") &&
                    $svg.attr("height") &&
                    $svg.attr("width")
                ) {
                    $svg.attr(
                        "viewBox",
                        "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
                    );
                }

                // Replace image with new SVG
                $img.replaceWith($svg);
            },
            "xml"
        );
    });

});