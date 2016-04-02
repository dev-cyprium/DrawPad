var drawWidth = 400;
var drawHeight = 400;
var mode = "default";

$(document).ready(function() {
	var i,j;

	// append all nodes
	generateGrid(16,16);

	$(".node").mouseenter(function() {
		draw(this);
	});

	$('#clear').click(function() {
		clearGrid();
	});
	$('#grid').click(function() {
		var size = prompt("Please enter grid size(limit 64): ");
		if(size < 64 && size > 2) {
			clearGrid();
			generateGrid(size,size);
		} else {
			alert("Wrong params.");
		}
	});
	$('#default').click(function() {
		$('#message span').text("Default");
		mode = "default";
	});
	$('#random').click(function() {
		$('#message span').text("Random");
		mode = "random";
	});
});

function generateGrid(rows, cols) {
	for(i=0;i<16;i++) {
		for(j=0;j<16;j++) {
			var $div = $("<div>", {id: i + "_" + j, class: "node"});
			var w = drawWidth / 16;
			var h = drawHeight / 16;
			$($div).css("width",w+"px");
			$($div).css("height",h+"px")
			$("#drawArea").append($div);
		}
	}
}


function clearGrid() {;
	$('.node').css("background-color","white");
}


function draw(caller) {
		var id = $(caller).attr('id');
		var r,g,b;
		if(mode === "default") {
			r = 0;
			g = 0;
			b = 255;
		} else {
			r = Math.floor(Math.random() * 255);
			g = Math.floor(Math.random() * 255);
			b = Math.floor(Math.random() * 255);
		}
		console.log(id);
		$("#"+id).css("background-color","rgb("+r+","+g+","+b+")");
}