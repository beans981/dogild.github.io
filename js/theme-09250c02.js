$(function(){$(window).scroll(function(){$(this).scrollTop()>100?$(".navbar.navbar-fixed-top").addClass("scroll"):$(".navbar.navbar-fixed-top").removeClass("scroll"),$(this).scrollTop()>300?$(".scrolltop").fadeIn():$(".scrolltop").fadeOut()}),$(".scrolltop").click(function(){return $("html, body").animate({scrollTop:0},700),!1}),$(".scroller").click(function(){var t=this.hash.substring(1),o=$('[name="'+t+'"]');if(o.length){var a=o.offset().top;return $("html, body").animate({scrollTop:a},700,function(){window.location.hash=t}),!1}});var t=$("#faq .faq");t.click(function(){var t=$(this).find(".answer");t.slideToggle("fast")}),$.support.leadingWhitespace||$("body").addClass("old-ie"),$(".blog_post .post_content p img, .container .markdown p img").each(function(){$(this).wrap('<figure class="image"></figure>'),$(this).attr("alt")&&$(this).after("<figcaption>"+$(this).attr("alt")+"</figcaption>")})});