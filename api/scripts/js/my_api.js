$(document).ready(function () {

	var positionArray = new Array();
	

		$("body").on("click", function(e) {
			if(!$(e.target).hasClass("subNavActive") && $(".subNavActive").length == 1) { 
				$(".subNavActive").prev().removeClass("active");
				$(".subNavActive").animate({
						left: "0px"
					}, 200).removeClass("subNavActive");
			}
		});
		
		$("body").on("click", "#triggerReference", function(e) {
			$("#referenceTab").tab("show");
		});
		
		$(window).on("scroll resize", function() {
			var $menu = $("#sideNav"),
				windowWidth = $(window).innerWidth(),
				containerWidth = $("#container").innerWidth(),
				whiteSpace = windowWidth - containerWidth,
				menuWidth = $menu.innerWidth(),
				calculatedLeftPosition = (whiteSpace / 2) - menuWidth - 22;
				calculatedHorizontalLeftPosition = (whiteSpace / 2);
			var topPosition = $(this).scrollTop();

			positionArray.push(topPosition);
			if (positionArray.length > 10) {
				var previousPosition = positionArray.shift();
			}
			
			if(topPosition >= 120) {
				if (topPosition < previousPosition) {
					$("#topNav").css("position", "fixed")
								.addClass("top")
								.removeClass("bottom");
				}
				else {
					$("#topNav").css("position", "absolute")
								.removeClass("top")
								.addClass("bottom");
				}
			}
			else {
					$("#topNav").css("position", "absolute")
								.removeClass("top")
								.addClass("bottom");
				}
			
			
			//overview
			if(topPosition < $("#intro").position().top) {
				$("#sideNav a").removeClass("active");
			}
			else if(topPosition >= $("#intro").position().top - 40 && topPosition < $("#fee").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#intro]").addClass("active");
			}
			//vt
			else if (topPosition >= $("#fee").position().top - 40 && topPosition < $("#transaction").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#fee]").addClass("active");
			}
			//partner
			else if (topPosition >= $("#transaction").position().top - 40 && topPosition < $("#vt").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#transaction]").addClass("active");
			}
			//training
			else if (topPosition >= $("#vt").position().top - 40 && topPosition < $("#manatron").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#vt]").addClass("active");
			}
			else if (topPosition >= $("#manatron").position().top - 40 && topPosition < $("#tokenization").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#manatron]").addClass("active");
			}
			else if (topPosition >= $("#tokenization").position().top - 40 && topPosition < $("#void").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#tokenization]").addClass("active");
			}
			else if (topPosition >= $("#void").position().top - 40 && topPosition < $("#export-detailed-trans").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#void]").addClass("active");
			}
			else if (topPosition >= $("#export-detailed-trans").position().top - 40 && topPosition < $("#export-check-credits").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#export-detailed-trans]").addClass("active");
			}
			else if (topPosition >= $("#export-check-credits").position().top - 40 && topPosition < $("#export-check-returns").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#export-check-credits]").addClass("active");
			}
			else if (topPosition >= $("#export-check-returns").position().top - 40 && topPosition < $("#export-credit-card-credits").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#export-check-returns]").addClass("active");
			}
			else if (topPosition >= $("#export-credit-card-credits").position().top - 40 && topPosition < $("#export-credit-card-fee-structure").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#export-credit-card-credits]").addClass("active");
			}
			else if (topPosition >= $("#export-credit-card-fee-structure").position().top - 40 && topPosition < $("#verify-transaction").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#export-credit-card-fee-structure]").addClass("active");
			}
			else if (topPosition >= $("#verify-transaction").position().top - 40 && topPosition < $("#verify-payment-id").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#verify-transaction]").addClass("active");
			}
			else if (topPosition >= $("#verify-payment-id").position().top - 40 && topPosition < $("#test-values").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#verify-payment-id]").addClass("active");
			}
			else if (topPosition >= $("#test-values").position().top - 40 && topPosition < $("#test-connectivity").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#test-values]").addClass("active");
			}
			else if (topPosition >= $("#test-connectivity").position().top - 40 && topPosition < $("#invalid-chars").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#test-connectivity]").addClass("active");
			}
			else if (topPosition >= $("#invalid-chars").position().top - 40 && topPosition < $("#methods").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#invalid-chars]").addClass("active");
			}
			else if (topPosition >= $("#methods").position().top - 40 && topPosition < $("#response-codes").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#methods]").addClass("active");
			}
			else if (topPosition >= $("#response-codes").position().top - 40 && topPosition < $("#changes").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#response-codes]").addClass("active");
			}
			else if (topPosition >= $("#changes").position().top - 40) {
				$("#sideNav a").removeClass("active");
				$("a[href=#changes]").addClass("active");
			}
				
			if (windowWidth > 1300) {
				if($(this).scrollTop() > 165) {
					$menu.css('position', 'fixed');
					$menu.css('top', '-19px');
				} else {
					$menu.css('position', 'absolute')
						 .css('top', '-5px')
				}
			}
			else {
				if($(this).scrollTop() > 316) {
				$menu.css('position', 'fixed');
				$menu.css('top', '-30px');
				$menu.css('left', calculatedHorizontalLeftPosition + 'px');
				}
				else {
				$menu.css('position', 'relative');
				$menu.css('top', '0px');
				$menu.css('left', '0px');
				}
			}
			
		});
		
		if( window.location.hash ) {
	
			var hash = (window.location.hash).replace("#", "");
			var elem = $("a[name="+hash+"]");	
			var position = elem.offset();
			
			$('html,body').animate({scrollTop: (position.top-40)},'slow');
	
		}

		$("#sideNav").on("click", "a", function (event) {
		
			//var hashPattern = /^#[A-Za-z0-9]*/;
			var urlWithAnchor = $(this).attr("href");
			var anchor = getAnchor(urlWithAnchor).replace("#", "");
			var elem = $("a[name="+anchor+"]");
			var position = elem.offset();
		
			event.preventDefault();
		
			$('html,body').animate({scrollTop: (position.top-40)},'slow');
			
		});
		$("#sideNav > li > i").click(function(e) {
			if($(e.target).hasClass("active")) {
				$(e.target).removeClass("active");
				$(e.target).next().animate({
					left: "0px"
				}, 200).removeClass("subNavActive");
			}
			else {
				$(".subNavActive").animate({
					left: "0px"
				}, 200).removeClass("subNavActive");
				$("i.active").removeClass("active");
				$(e.target).addClass("active");
				$(e.target).next().animate({
					left: "255px"
				}, 200).addClass("subNavActive");
				e.stopPropagation();
			}
		});
		
		$('body').tooltip({"placement": "right", "selector": "[rel=tooltip]"});
		function getFileName() {
			//this gets the full url
			var url = document.location.href;
			//this removes the anchor at the end, if there is one
			url = removeAnchor(url);
			//this removes the query after the file name, if there is one
			url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
			//this removes everything before the last slash in the path
			url = url.substring(url.lastIndexOf("/") + 1, url.length);
			//return
			return url;
		}
		
		function removeAnchor(prev_url) {
		
			var _url = prev_url.substring(0, (prev_url.indexOf("#") == -1) ? prev_url.length : prev_url.indexOf("#"));
			
			return _url;
		
		}
		
		function getAnchor(prev_url) {
		
			var _anchor = prev_url.substring(prev_url.indexOf("#"), (prev_url.length));
			
			return _anchor;
		
		}
	
});