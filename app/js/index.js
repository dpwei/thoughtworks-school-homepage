import "./imports";

(function ($) {
	"use strict";

	// Custom
	const stickyToggle = function (sticky) {
		const scrollElement = $(window);
		if (scrollElement.scrollTop() >= 57) {
			sticky.addClass("bg-inverse");
		} else {
			sticky.removeClass("bg-inverse");
		}
	};

	const hiddenToggle = function (element) {
		const scrollElement = $(window);
		if (scrollElement.scrollTop() >= 195) {
			element.removeClass("hidden");
		} else {
			element.addClass("hidden");
		}
	};

	// Scroll & resize events
	$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
		stickyToggle($('#navbar'));
		hiddenToggle($('#navbar-logo'));
	});

	// On page load
	stickyToggle($('#navbar'));
	hiddenToggle($('#navbar-logo'))

})(jQuery);
