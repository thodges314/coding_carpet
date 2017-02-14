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


	/*generate popups */
	console.log(people);
	var peopleData = people[0];
	console.log(peopleData);

	$.each(people, function(index, person){
		var entry = "<div style=\"clear:both;\"></div>"
		entry += "<div class=\"overlay hide\" id=\"overlay-"+(index+1)+"\"></div>"
		entry += "<div class=\"popup-container hide\" id=\"popup-container-"+(index+1)+"\">"
		console.log(entry);


		$('#popupData').append(entry);
	})

});