$('.draggable').draggable();
$('.include').droppable();
$('.exclude').droppable();
$('.include').on("drop", function(event, ui){
		$(this).css("background-color", "pink");
		var newimg = $("<img>");
		ui.draggable.hide();
		newimg.attr("src", ui.draggable.context.src);
		console.log(ui.draggable.context.src);
		var newarticle = $("<article>").append(newimg);
		var newli = $("<li>").append(newarticle);

		//newimg =newimg.wrap("<article></article>");
		//newimg =newimg.wrap("<li></li>");
		$('.dropzone').append(newli);	
	});
//$('.dropzone').add('li')
//var person = 

$('.exclude').on("drop", function(event, ui){
		$(this).css("background-color", "pink");
		var newimg = $("<img>");
		ui.draggable.hide();
		newimg.attr("src", ui.draggable.context.src);
		console.log(ui.draggable.context.src);
		var newarticle = $("<article>").append(newimg);
		var newli = $("<li>").append(newarticle);

		//newimg =newimg.wrap("<article></article>");
		//newimg =newimg.wrap("<li></li>");
		$('.dropzone').append(newli);


	
	});

