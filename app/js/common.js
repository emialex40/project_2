$(document).ready(function() {

	$('.btn-white').hover(
		function() {
			$('.s-video__btn-line').css({
				"right": "-15px",
				"background": "#FFB30C",
				"transition": "1s"
			});
			$('.btn-white').css("color", "#FFB30C");
		},

		function() {
			$('.s-video__btn-line').css({
				"right": "0",
				"background": "#fe9200",
				"transition": "1s"
			});
			$('.btn-white').css("color", "#fe9200");
		});

});
