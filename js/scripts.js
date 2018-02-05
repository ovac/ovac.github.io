 // all functions ------------------
function initKvest() {
	"use strict";
    $(".loader-holder").fadeOut(500, function() {
        $("#main").animate({
            opacity: "1"
        }, 500);
    });
    var bgImage = $(".bg");
    bgImage.each(function(a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
    var bgi2 = $(".fbgs").data("bgscr");
    var bgt2 = $(".fbgs").data("bgtex");
    $(".bg-scroll").css("background-image", "url(" + bgi2 + ")");
    $(".bg-title span").html(bgt2);
    function a() {
        $(".alt").each(function() {
            $(this).css({
                "margin-top": -$(this).height() / 2 + "px"
            });
        });

        $(".full-screen-slider-holder .full-screen-item").css({
            height: $(".full-screen-slider-holder").outerHeight(true)
        });
         $(".hero-carousel .item").css({
            height: $(".hero-carousel").outerHeight(true)
        });
         $(".slideshow-slider .item").css({
            height: $(".slideshow-slider").outerHeight(true)
        });
    }
    a();
    $(window).on("resize", function() {
        a();
    });
	// twitter ------------------
	if ($("#footer-twiit").length > 0) {
		var config1 = {
		  "profile": {"screenName": 'envatomarket'},
		  "domId": 'footer-twiit',
		  "maxTweets": 2,
		  "enableLinks": true,
		  "showImages": false
		};
		twitterFetcher.fetch(config1);
	}
	// owl ------------------
    var fss = $(".full-screen-slider"),sauto = fss.data("autoplayslider");
    fss.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
		thumbs: false,
		autoplay:sauto,
		onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
        dotsContainer: ".panel-dots",
        onInitialized:
		function(a) {
			startProgressBar();
            $(".num-holder").text("1" + " / " + this.items().length);
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
        $(".num-holder").text((1 > b ? b + a : b > a ? b - a : b) + " / " + a);
    });
    $(".full-screen-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".full-screen-slider-holder").find(fss).trigger("next.owl.carousel");
        return false;
    });
    $(".full-screen-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".full-screen-slider-holder").find(fss).trigger("prev.owl.carousel");
        return false;
    });
	function startProgressBar() {
		$('.slide-progress').css({
		  'width': '100%',
		  'transition': 'width 5000ms'
		});
	}
	function resetProgressBar() {
		$('.slide-progress').css({
		  'width': 0,
		  'transition': 'width 0s'
		});
	}
	var fhcr = $(".fullheight-carousel");
    fhcr.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 3,
        dots: false,
        center: true,
        autoHeight: false,
        smartSpeed: 1500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            764: {
                items: 3
            }
        }
    });
    $(".fullheight-carousel-holder a.next-slide").on("click", function() {
        $(".fullheight-carousel-holder").find(fhcr).trigger("next.owl.carousel");
        return false;
    });
    $(".fullheight-carousel-holder a.prev-slide").on("click", function() {
        $(".fullheight-carousel-holder").find(fhcr).trigger("prev.owl.carousel");
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
		return false;
    });
    $(".testimonials-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".testimonials-slider-holder").find(testiSlider).trigger("prev.owl.carousel");
		return false;
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
		center:true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
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
    $(".fix-bar").scrollToFixed({
        minWidth: 1391,
        marginTop:   110,
        removeOffsets: true,
        limit: function() {
            var a = $(".limit-box").offset().top - $(".fix-bar").outerHeight(true) - 10;
            return a;
        }
    });
	if ($("#feedback").length > 0) {
		jQuery.event.special.scrolldelta = {
			delegateType: "scroll",
			bindType: "scroll",
			handle: function (event) {
				var handleObj = event.handleObj;
				var targetData = jQuery.data(event.target);
				var ret = null;
				var elem = event.target;
				var isDoc = elem === document;


				targetData.top = isDoc ? elem.documentElement.scrollTop + elem.body.scrollTop : elem.scrollTop;

				event.scrollTop = targetData.top;

				event.type = handleObj.origType;
				ret = handleObj.handler.apply(this, arguments);
				event.type = handleObj.type;
				return ret;
			}
		};
		$(window).on('scrolldelta', function (e) {
			var top = e.scrollTop;
			var feedbackText =   top.toString() + 'px ';
			document.getElementById('feedback').innerHTML = feedbackText;
		});
	}
	// isotope------------------
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
    $(".single-popup").lightGallery({
        selector: "this",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        counter: false
    });
	// lightgallery------------------
    var $lg = $(".lightgallery"), dlt = $lg.data("looped");
    $lg.lightGallery({
        selector: " .lightgallery  a.popgal",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        loop: false
    });
    $lg.on("onBeforeNextSlide.lg", function(a) {
        ss.trigger("next.owl.carousel");
		return false;
    });
    $lg.on("onBeforePrevSlide.lg", function(a) {
        ss.trigger("prev.owl.carousel");
		return false;
    });

    $(".filter-button").on("click", function() {
        $(".gallery-filters").slideToggle(500);
    });
	// scroll animation------------------
    $(".stats").appear(function() {
        $(".num").countTo();
    });
    $(".piechart-holder").appear(function() {
        $(this).find(".chart").each(function() {
            $(".chart").easyPieChart({
                barColor: "#ffa500",
                trackColor: "#ccc",
                scaleColor: "#ffa500",
                size: "140",
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
    $(".scroll-nav  ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 70,
        threshold: 120,
        speed: 1200,
        currentClass: "act-link"
    });
	// share------------------
    var shcm = $(".share-container"),
		shs = eval(shcm.attr("data-share")),
		ssr =  $(".show-share") ;
    shcm.share({
        networks: shs
    });
    function hideShare() {
        ssr.addClass("isShare");
        shcm.fadeOut(400);
    }
    function showShare() {
		shcm.fadeIn(400);
        ssr.removeClass("isShare");
    }
    ssr.on("click", function(a) {
        a.preventDefault();
        if (ssr.hasClass("isShare")) showShare(); else hideShare();
		return false;
    });
	// tabs------------------
    $("ul.tabs li").on("click", function() {
        var a = $(this).attr("data-tab");
        $("ul.tabs li").removeClass("current");
        $(".tab-content").removeClass("current");
        $(this).addClass("current");
        $("#" + a).addClass("current");
        return false;
    });
		// scroll ------------------
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
    $(".to-top").on("click", function() {

        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
	$(window).on("scroll", function(a) {
        if ($(this).scrollTop() > 150) {

            $(".to-top").fadeIn(500);
        } else {

            $(".to-top").fadeOut(500);
        }
		var a = $(document).height();
        var b = $(window).height();
        var c = $(window).scrollTop();
        var d = c / (a - b) * 100;
        $(".progress-bar").css({
            height: d + "%"
        });

    });
    $(".scroll-con-sec").ctscroll();
    $(".arrowpagenav a").on("click", function(a) {
        a.preventDefault();
    });

	var timestamp_mousewheel = 0,
	mwcon = $(".mousecontr");
	mwcon.on("mousewheel", ".owl-stage", function(a) {
		var d = new Date();
		if((d.getTime() - timestamp_mousewheel) > 1000){
			timestamp_mousewheel = d.getTime();
		if (a.deltaY < 0) mwcon.trigger("next.owl"); else mwcon.trigger("prev.owl");
			a.preventDefault();
		}
	});
    $(".carousel-item h3").on({
        mouseenter: function() {
            $(this).parents(".single-carousel .item").find(".bg").addClass("hov-rot");
        },
        mouseleave: function() {
            $(this).parents(".single-carousel .item").find(".bg").removeClass("hov-rot");
        }
    });
    var mobileHover = function () {
        $('.box-item').on('touchstart', function () {
            $(this).trigger('hover');
        }).on('touchend', function () {
            $(this).trigger('hover');
        });
    };
    mobileHover();
	// contactform ------------------
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
	// video ------------------
    var vid = $(".background-vimeo").data("vim");
    $(".background-vimeo").append('<iframe src="//player.vimeo.com/video/' + vid + '?background=1"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>');
    $(".video-holder").height($(".media-container").height());
    if ($(window).width() > 1024) {
        if ($(".video-holder").size() > 0) if ($(".media-container").height() / 9 * 16 > $(".media-container").width()) {
            $(".background-vimeo iframe ").height($(".media-container").height()).width($(".media-container").height() / 9 * 16);
            $(".background-vimeo iframe ").css({
                "margin-left": -1 * $("iframe").width() / 2 + "px",
                top: "-75px",
                "margin-top": "0px"
            });
        } else {

            $(".background-vimeo iframe ").width($(window).width()).height($(window).width() / 16 * 9);
            $(".background-vimeo iframe ").css({
                "margin-left": -1 * $("iframe").width() / 2 + "px",
                "margin-top": -1 * $("iframe").height() / 2 + "px",
                top: "50%"
            });
        }
    } else if ($(window).width() < 760) {
        $(".video-holder").height($(".media-container").height());
        $(".background-vimeo iframe ").height($(".media-container").height());
    } else {
        $(".video-holder").height($(".media-container").height());
        $(".background-vimeo iframe ").height($(".media-container").height());
    }
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
    $(".about-wrap").on({
		mousemove: function(a) {
        var b = Math.ceil(window.innerWidth / 1.5), c = Math.ceil(window.innerHeight / 1.5), d = a.pageX - b, e = a.pageY - c, f = e / c, g = -(d / b), h = Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)), i = 7 * h;
        $one.css(browserPrefix + "transform", "rotate3d(" + f + ", " + g + ", 0, " + i + "deg)");
		}
    });
	// nav------------------
    var cm = $(".nav-button-wrap");
    var nh = $(".nav-holder");

    cm.on("click", function() {
       nh.slideToggle(500);

		return false;
    });
	$(".nav-button-wrap").attr("onclick","return true");
  //=============== subscribe form  ==============
    // Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx

    $('#subscribe').ajaxChimp({
        language: 'eng',
        url: 'http://kwst.us9.list-manage1.com/subscribe/post?u=992ebe1f14864e841317ca145&id=163340d9c8'
    });

    // Mailchimp translation
    //
    // Defaults:
    //'submit': 'Submitting...',
    //  0: 'We have sent you a confirmation email',
    //  1: 'Please enter a value',
    //  2: 'An email address must contain a single @',
    //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
    //  4: 'The username portion of the email address is invalid (the portion before the @: )',
    //  5: 'This email address looks fake or invalid. Please enter a real email address'

    $.ajaxChimp.translations.eng = {
        'submit': 'Submitting...',
        0: '<i class="fa fa-check"></i> We will be in touch soon!',
        1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
        2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
    }
}
// parallax ------------------
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
    initKvest();
});
