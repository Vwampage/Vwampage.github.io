$('.draggable').draggable();
$('.droppable').droppable();
$('.droppable').on("drop", function(event, ui){
		$(this).css("background-color", "pink");
		console.log("dropped");
	});
