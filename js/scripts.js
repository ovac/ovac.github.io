function initCooper() {
    "use strict";
	/*
	  =======================================================================
		  		Window Load
	  =======================================================================
	*/
    $(".loader-holder").fadeOut(500, function() {
        $("#main").animate({
            opacity: "1"
        }, 500);
    });
    var bgImage = $(".bg");
    bgImage.each(function(a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
	/*
	  =======================================================================
		  		Tabs
	  =======================================================================
	*/
    $("ul.tabs li").on("click", function() {
        var a = $(this).attr("data-tab"), b = $("ul.tabs li");
        b.removeClass("current");
        $(".tab-content").removeClass("current");
        $(this).addClass("current");
        $("#" + a).addClass("current");
        return false;
    });
	/*
	  =======================================================================
		  		Page nav
	  =======================================================================
	*/
    var bgi2 = $(".fbgs").data("bgscr");
    var bgt2 = $(".fbgs").data("bgtex");
    $(".bg-scroll").css("background-image", "url(" + bgi2 + ")");
    $(".bg-title span").html(bgt2);
    $(".scroll-nav  ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 70,
        threshold: 120,
        speed: 1200,
        currentClass: "act-link"
    });
    $(".scroll-nav-holder").scrollToFixed({
        minWidth: 540,
        zIndex: 12,
        preUnfixed: function() {
            $(this).css("margin-top", "0");
        },
        preFixed: function() {
            if ($(window).width() < 1064) $(this).css("margin-top", "70px");
        }
    });
    function a() {
        $(".alt").each(function() {
            $(this).css({
                "margin-top": -$(this).height() / 2 + "px"
            });
        });
        var a = $(".scroll-nav li").length;
        var b = $(".scroll-nav").width();
        $(".scroll-nav li").css({
            width: b / a - 0.5
        });
        $(".hero-slider .item").css({
            height: $(".hero-slider").outerHeight(true)
        });
        $(".single-carousel-holder .item").css({
            height: $(".single-carousel-holder").outerHeight(true)
        });
    }
    a();
    var $window = $(window);
    $window.resize(function() {
        a();
    });
	/*
	  =======================================================================
		  		Owl carousel
	  =======================================================================
	*/
    var sync2 = $(".fscs");
    sync2.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        onInitialized: function() {
            $(".num-holder3").text("1" + " / " + this.items().length);
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
        $(".num-holder3").text((1 > b ? b + a : b > a ? b - a : b) + " / " + a);
    });
    $(".hero-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".hero-slider-holder").find(sync2).trigger("next.owl.carousel");
        return false;
    });
    $(".hero-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".hero-slider-holder").find(sync2).trigger("prev.owl.carousel");
        return false;
    });
    var testiSlider = $(".testimonials-slider");
    testiSlider.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        thumbs: false,
        onInitialized: function() {
            $(".teti-counter").text("1" + " / " + this.items().length);
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
        $(".teti-counter").text((1 > b ? b + a : b > a ? b - a : b) + " / " + a);
    });
    $(".testimonials-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".testimonials-slider-holder").find(testiSlider).trigger("next.owl.carousel");
    });
    $(".testimonials-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".testimonials-slider-holder").find(testiSlider).trigger("prev.owl.carousel");
    });
    var ss = $(".single-slider"), dlt2 = ss.data("loppsli");
    ss.owlCarousel({
        margin: 0,
        items: 1,
        smartSpeed: 1300,
        loop: dlt2,
        nav: false,
        autoHeight: false,
        thumbs: false
    });
    $(".single-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".single-slider-holder").find(ss).trigger("next.owl.carousel");
        return false;
    });
    $(".single-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".single-slider-holder").find(ss).trigger("prev.owl.carousel");
        return false;
    });
    var sync4 = $(".slideshow-slider");
    sync4.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        autoplaySpeed: 3600,
        items: 1,
        dots: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoHeight: false,
        onInitialized: function() {
            $(".num-holder3").text("1" + " / " + this.items().length);
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
        $(".num-holder3").text((1 > b ? b + a : b > a ? b - a : b) + " / " + a);
    });
    var e = $(".single-carousel");
    e.owlCarousel({
        margin: 0,
        items: 3,
        smartSpeed: 1300,
        loop: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    });
    $(".single-carousel-holder a.next-slide").on("click", function() {
        $(this).closest(".single-carousel-holder").find(e).trigger("next.owl.carousel");
        return false;
    });
    $(".single-carousel-holder a.prev-slide").on("click", function() {
        $(this).closest(".single-carousel-holder").find(e).trigger("prev.owl.carousel");
        return false;
    });
	/*
	  =======================================================================
		  		Isotope
	  =======================================================================
	*/
    function n() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three"
            });
            a.imagesLoaded(function() {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function(b) {
                b.preventDefault();
                var c = $(this).attr("data-filter"), d = $(this).text();
                a.isotope({
                    filter: c
                });
                $(".gallery-filters a").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
                var e = window.navigator.userAgent;
                var f = e.indexOf("MSIE ");
                if (f > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) $(".filt-text").text(d); else $(".filt-text").text(d).shuffleLetters({});
                return false;
            });
        }
        $(".gallery-items").isotope("on", "layoutComplete", function(a, b) {
            var b = a.length;
            $(".num-album").html(b);
        });
        var b = $(".gallery-item").length;
        $(".all-album , .num-album").html(b);
    }
    n();
    var gat = $(".gallery-filter-active").text();
    $(".filt-text").text(gat);
	/*
	  =======================================================================
		  		LightGallery
	  =======================================================================
	*/
    $(".image-popup").lightGallery({
        selector: "this",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        counter: false
    });
    var $lg = $(".lightgallery"), dlt = $lg.data("looped");
    $lg.lightGallery({
        selector: ".lightgallery a.popup-image , .lightgallery  a.popgal",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        loop: false
    });
    $lg.on("onBeforeNextSlide.lg", function(a) {
        ss.trigger("next.owl.carousel");
    });
    $lg.on("onBeforePrevSlide.lg", function(a) {
        ss.trigger("prev.owl.carousel");
    });
    $(".hde  .portfolio_item , .hde .gallery-item").each(function() {
        $(this).hoverdir();
    });
    $(".filter-button").on("click", function() {
        $(".gallery-filters").slideToggle(500);
    });
    var count = $(".bg-title").text().length;
    if (count > 10) $(".bg-title").css({
        "font-size": "64px"
    }); else $(".bg-title").css({
        "font-size": "94px"
    });
	/*
	  =======================================================================
		  		Scroll animation
	  =======================================================================
	*/
    $(".stats").appear(function() {
        $(".num").countTo();
    });
    $(".piechart-holder").appear(function() {
        $(this).find(".chart").each(function() {
            $(".chart").delay(600).easyPieChart({
                barColor: "#ffa500",
                trackColor: "#ccc",
                scaleColor: "#ffa500",
                size: "134",
                lineWidth: "10",
                lineCap: "butt",
                easing: 'easeOutBounce',
                onStep: function(a, b, c) {
                    $(this.el).find(".percent").text(Math.round(c));
                }
            });
        });
    });
    $(".skillbar-box").appear(function() {
        $(this).find("div.skillbar-bg").each(function() {
            $(this).find(".custom-skillbar").delay(600).animate({
                width: $(this).attr("data-percent")
            }, 1500);
        });
    });
	/*
	  =======================================================================
		  		Share
	  =======================================================================
	*/
    var shcm = $(".share-container"), shs = eval(shcm.attr("data-share")), ssr = $(".show-share");
    shcm.share({
        networks: shs
    });
    function hideShare() {
        ssr.addClass("isShare");
        $(".share-container a").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 0
                }, 300);
            }, 50 * a);
        });
        setTimeout(function() {
            shcm.removeClass("visshare");
        }, 300);
    }
    function showShare() {
        ssr.removeClass("isShare");
        shcm.addClass("visshare");
        setTimeout(function() {
            $(".share-container a").each(function(a) {
                var b = $(this);
                setTimeout(function() {
                    b.animate({
                        opacity: 1
                    }, 300);
                }, 50 * a);
            });
        }, 300);
    }
    ssr.on("click", function(a) {
        a.preventDefault();
        if (ssr.hasClass("isShare")) showShare(); else hideShare();
        return false;
    });
	/*
	  =======================================================================
		  		Progress
	  =======================================================================
	*/
    $window.on("scroll", function(a) {
        var a = $(document).height();
        var b = $(window).height();
        var c = $(window).scrollTop();
        var d = c / (a - b) * 100;
        $(".progress-bar").css({
            width: d + "%"
        });
    });
    $(".scroll-con-sec").ctscroll();
    $(".arrowpagenav a").on("click", function(a) {
        a.preventDefault();
    });
	/*
	  =======================================================================
		  		Scroll To Object
	  =======================================================================
	*/
    $(".custom-scroll-link").on("click", function() {
        var a = 20;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
    $(".to-top").on("click", function(a) {
        a.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $(".carousel-item h3").on({
        mouseenter: function() {
            $(this).parents(".single-carousel .item").find(".bg").addClass("hov-rot");
        },
        mouseleave: function() {
            $(this).parents(".single-carousel .item").find(".bg").removeClass("hov-rot");
        }
    });
	/*
	  =======================================================================
		  		Menu
	  =======================================================================
	*/
    var Menu = {
        el: {
            ham: $(".nav-button"),
            menuTop: $(".menu-top"),
            menuMiddle: $(".menu-middle"),
            menuBottom: $(".menu-bottom")
        },
        init: function() {
            Menu.bindUIactions();
        },
        bindUIactions: function() {
            Menu.el.ham.on("click", function(a) {
                Menu.activateMenu(a);
                a.preventDefault();
            });
        },
        activateMenu: function() {
            Menu.el.menuTop.toggleClass("menu-top-click");
            Menu.el.menuMiddle.toggleClass("menu-middle-click");
            Menu.el.menuBottom.toggleClass("menu-bottom-click");
        }
    };
    Menu.init();
    $("#hid-men").menu();
	/*
	  =======================================================================
		  		Contact form
	  =======================================================================
	*/
    $("#contactform").submit(function() {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function() {
            $("#message").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name").val(),
                email: $("#email").val(),
                comments: $("#comments").val()
            }, function(a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function() {
        $("#message").slideUp(1500);
    });
	/*
	  =======================================================================
		  		Video
	  =======================================================================
	*/
    var l = $(".background-video").data("vid");
    var m = $(".background-video").data("mv");
    $(".background-video").YTPlayer({
        fitToBackground: true,
        videoId: l,
        pauseOnScroll: false,
        mute: m,
        callback: function() {
            var a = $(".background-video").data("ytPlayer").player;
        }
    });
    var $one = $(".mm-parallax"), browserPrefix = "", usrAg = navigator.userAgent;
    if (usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) browserPrefix = "-webkit-"; else if (usrAg.indexOf("Opera") > -1) browserPrefix = "-o"; else if (usrAg.indexOf("Firefox") > -1) browserPrefix = "-moz-"; else if (usrAg.indexOf("MSIE") > -1) browserPrefix = "-ms-";
    $("body").mousemove(function(a) {
        var b = Math.ceil(window.innerWidth / 1.5), c = Math.ceil(window.innerHeight / 1.5), d = a.pageX - b, e = a.pageY - c, f = e / c, g = -(d / b), h = Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)), i = 10 * h;
        $one.css(browserPrefix + "transform", "rotate3d(" + f + ", " + g + ", 0, " + i + "deg)");
    });
}
/*
=======================================================================
		  		Parallax
=======================================================================
*/
function initparallax() {
	"use strict";
    var a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
   var trueMobile = a.any();
    if (null == trueMobile) {
        var b = new Scrollax();
        b.reload();
        b.init();
    }
    if (trueMobile) $(".background-video").remove();
}
/*
=======================================================================
		  Init all
=======================================================================
*/
$(function() {
    initparallax();
    initCooper();
});
