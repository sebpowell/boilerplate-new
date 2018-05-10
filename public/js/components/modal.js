(function($) { 
	$.fn.modal = function(options, val) {

		var that = this;

		var settings = $.extend({
			open: 'is-open',
		}, options);

		$("[data-modal]").on('click', function(e) {
			
			e.preventDefault();
			
			var target = $(this).data('modal');
			
			$("#"+target).addClass("is-open");
			
			$("body").addClass("overflow-hidden");
		});

		function closeModal() {
			that.removeClass("is-open");
			$("body").removeClass("overflow-hidden");
		}

		$(".modal-close").on('click', function() {
			closeModal();
		});

		$(".modal").on('click', function(e) {
			e.stopPropagation();
		});

		that.on('click', function() {
			$(".modal-container").removeClass("is-open");
			$("body").removeClass("overflow-hidden");
		});
	};
})(jQuery);