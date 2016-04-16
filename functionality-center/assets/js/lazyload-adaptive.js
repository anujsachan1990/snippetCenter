var lazyloadResponsive = lazyloadResponsive || {};
(function($, ns, window, document, undefined){
	"use strict";
	var _resplazyloading = function(){
		var viewportDetected;
		var getViewPort = function(mobilewidth,tabletwidth,desktopwidth){
			var width = $(window).width();
			if(width <= mobilewidth){
				if(window.devicePixelRatio >= 2)
					return "mobileRetina";
				else
					return "mobile";
			}
			else if (width > mobilewidth  && width <= tabletwidth){
				return "tablet";
			}
			else {
				return "desktop";
			}
		};
		var isVisible = function(data){
			var rangeTop = $(document).scrollTop(),
				rangeBottom = $(document).scrollTop() + $(window).height();
			$("img").each(function(){
				var elementPosition = $(this).offset();
				if((elementPosition.top > rangeTop) && ( elementPosition.top < rangeBottom)){
					this.setAttribute("src",this.getAttribute("data-"+data));
				}
			});
		};
		this.init = function(mobilewidth,tabletwidth,desktopwidth){
			viewportDetected = getViewPort(mobilewidth,tabletwidth,desktopwidth);
			isVisible(viewportDetected);
			$(window).resize(function(){
				viewportDetected = getViewPort(mobilewidth,tabletwidth,desktopwidth);
				isVisible(viewportDetected);
			});
			$(window).scroll(function(){
				viewportDetected = getViewPort(mobilewidth,tabletwidth,desktopwidth);
				isVisible(viewportDetected);
			});
		};
		this.init(480,768,1024);
	};
	ns.resp = new _resplazyloading();
})((typeof jQuery !== "undefined") ? jQuery : null, lazyloadResponsive || {}, window, window.document);