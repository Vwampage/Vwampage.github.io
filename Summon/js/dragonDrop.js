$('.draggable').draggable();
$('.include').droppable();
$('.exclude').droppable();
$('.include').on("drop", function(event, ui){
		var newimg = $("<img>");
		ui.draggable.hide();
		newimg.attr("class", "draggable ui-draggable");
		newimg.attr("src", ui.draggable.context.src);
		console.log(ui.draggable.context.src);

		// $(newimg).class += "draggable";
		// $(newimg).addclass("draggable");
		// var newarticle = $("<article>").append(newimg);
		// var newli = $("<li>").append(newarticle);
		//newimg =newimg.wrap("<article></article>");
		//newimg =newimg.wrap("<li></li>");
		$('.dropzone').append(newimg);	
	});

$('.exclude').on("drop", function(event, ui){
		ui.draggable.hide();
		var newimg = $("<img>");
		newimg.attr("class", "draggable ui-draggable");
		newimg.attr("src", ui.draggable.context.src);
		console.log(ui.draggable.context.src);
		// $(newimg).addclass("draggable");
		// var newarticle = $("<article>").append(newimg);
		// var newli = $("<li>").append(newarticle);
		//newimg =newimg.wrap("<article></article>");
		//newimg =newimg.wrap("<li></li>");
		$('.dropplace').append(newimg);	
	});

$('.dropzone').change(function(){

})