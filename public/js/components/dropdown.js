(function($) { 
	$.fn.dropdown= function(options, val) {

		var that = this;

		var settings = $.extend({
			open: 'is-open',
		}, options);

		$(".js-dropdown").on('click', function(e) {
			
			e.preventDefault();
			
			var target = $(this).data('dropdown');
			
			$("#"+target).toggleClass("is-open");
		});

		function closeDropdown() {
			that.removeClass("is-open");
		}

		$("body").on('click', function() {
			closeDropdown();
		});

		that.on('click', function(e) {
			e.stopPropagation();
		});
	};
})(jQuery);