$(document).ready(function(){
	
	$(".fa-times").click(function(){
		$(".menu").addClass("hide_menu");
		$(".toggle_menu").addClass("opacity_one");
	});

	$(".toggle_menu").click(function(){
		$(".menu").removeClass("hide_menu");
		$(".toggle_menu").removeClass("opacity_one");
	});

});