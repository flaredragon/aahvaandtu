
  jQuery.noConflict();
    (function ($) {
        function readyFn() {
            $(function () {
				newYearsDay = new Date("2018-01-28");
				$('#countdown').countdown({until: newYearsDay});
			});
			
			
			
        }

        $(document).ready(readyFn); 
    })(jQuery);
