$(document).ready(function () {

	$(".sliderContainerWordWrapper").fadeIn("slow");

		$("a[rel=tooltip]").mouseover( function (e) {
		
			var tip = $(this).attr("title");
			
			$(this).attr("title", "");
			
			$("body").append('<div id="tooltip">'+tip+'</div>');
			
			$("#tooltip").css("top", e.pageY+10);
			$("#tooltip").css("left", e.pageX-50);
			
			$("#tooltip").fadeIn("100");
			$("#tooltip").fadeTo("10",1.0);
			
				var position = $(this).position();
				
				/*$("#tooltipHighlighter").fadeIn("500").css({
					display: "block",
					width: "50px",
					height: "50px",
					top: position.top-25,
					left: position.left+20
				})*/ 

			
			}).mousemove( function (e) {
			
			
			$("#tooltip").css("top", e.pageY+10);
			$("#tooltip").css("left", e.pageX-50);
			
			}).mouseout( function () {
			
				var position = $(this).position();
			
				/*$("#tooltipHighlighter").animate({
					width: 0,
					height: 0,
					top: position.top,
					left: position.left+45,
					display: "none"
				}, "100");*/
				
			$(this).attr("title", $("#tooltip").text());
				
			$("body").children("div#tooltip").remove();
			
		});
		
		$("#panelContainer div").click( function (e) {
			
			var currentMainContainer = $("#panelContainer div.panel2");
			//if the target is a div
			if( $(e.target).is($("div")) || $(e.target).is($("div p")) || $(e.target).is($("div h1")) ) {
			
				if ( $(e.target).is($("div")) ) 
				{	var self = $(e.target);				  }
				else if ( $(e.target).is($("div p")) )
				{	var self = $(e.target).parent("div"); }
				else if ( $(e.target).is($("div h1")) )
				{	var self = $(e.target).parent("div"); }
			
				//if it's already in focus
				if( self.hasClass("panel2") ) {
					//do not animate
					e.stopPropagation();
				}
				else {
				
					var selfClass = self.attr("class");
					var clickedContainerPositionLeft = self.css("left");
					var clickedContainerPositionTop = self.css("top");
				
					var currentMainContainerClass = currentMainContainer.attr("class");
					var currentMainContainerPositionLeft = currentMainContainer.css("left");
					var currentMainContainerPositionTop = currentMainContainer.css("top");
				
					self.animate({
						width: 420,
						height: 550,
						left: currentMainContainerPositionLeft,
						top: currentMainContainerPositionTop
					}, "100");
				
					currentMainContainer.animate({
					
						width: 300,
						height: 500,
						left: clickedContainerPositionLeft,
						top: clickedContainerPositionTop
						
					}, "100");
				
					currentMainContainer.removeClass("panel2");
					currentMainContainer.addClass(selfClass);
					self.removeClass(selfClass);
					self.addClass("panel2");
				
				}
				
			
			}
		
		});
		
		$("#quickLogin a").click( function (e) {
			e.preventDefault();
			$("#quickLoginPanel").slideToggle("fast", function() {
			
				/*$("body").click( function () {
					
					if( $("#quickLoginPanel").css("display", "block") ) {
					
					$("#quickLoginPanel").slideUp("fast");	
					
					}
				});*/
			
			});
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

			//overview
			if(topPosition >= 261 && topPosition < 1020) {
				$("#sideNav a").removeClass("active");
				$("a[href=#overview]").addClass("active");
			}
			//vt
			else if (topPosition >= 1020 && topPosition < 1650) {
				$("#sideNav a").removeClass("active");
				$("a[href=#vt]").addClass("active");
			}
			//partner
			else if (topPosition >= 1650 && topPosition < 2527) {
				$("#sideNav a").removeClass("active");
				$("a[href=#partners]").addClass("active");
			}
			//training
			else if (topPosition >= 2527 && topPosition < 3169) {
				$("#sideNav a").removeClass("active");
				$("a[href=#training]").addClass("active");
			}
			//more questions
			else if (topPosition >= 3169) {
				$("#sideNav a").removeClass("active");
				$("a[href=#questions]").addClass("active");
			}
				
			if (windowWidth > 1300) {
				if($(this).scrollTop() > 559) {
					$menu.css('position', 'fixed');
					$menu.css('top', '-20px');
					$menu.css('left', calculatedLeftPosition + 'px');
				} else {
					$menu.css('position', 'absolute')
						 .css('top', '535px')
						 .css('left', '-173px');
				}
			}
			else {
				if($(this).scrollTop() > 316) {
				$menu.css('position', 'fixed');
				$menu.css('top', '-30px');
				$menu.css('left', calculatedHorizontalLeftPosition + 'px');
				$menu.css('z-index', '999');
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
			
			$('html,body').animate({scrollTop: (position.top-100)},'slow');
	
		}

		$("#sideNav").on("click", "a", function (event) {
		

			//var hashPattern = /^#[A-Za-z0-9]*/;
			var urlWithAnchor = $(this).attr("href");
			var anchor = getAnchor(urlWithAnchor).replace("#", "");
			var elem = $("a[name="+anchor+"]");
			var position = elem.offset();
		
			event.preventDefault();
		
			$('html,body').animate({scrollTop: (position.top-75)},'slow');
			
		});
		
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