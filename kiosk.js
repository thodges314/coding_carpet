$(document).ready(function(){
	var selected;
	$(".wfca-num-col .wfca-col span").click(function(){
		selected = $(this).text();
		console.log(selected);
		$("#popup-container-"+selected).removeClass("hide");
		$("#overlay-"+selected).removeClass("hide");
		$("#popup-container-"+selected).addClass("show");
		$("#overlay-"+selected).addClass("show");
	});
	$(".close-button").click(function(){
		$("#popup-container-"+selected).removeClass("show");
		$("#overlay-"+selected).removeClass("show");
		$("#popup-container-"+selected).addClass("hide");
		$("#overlay-"+selected).addClass("hide");
	});
});