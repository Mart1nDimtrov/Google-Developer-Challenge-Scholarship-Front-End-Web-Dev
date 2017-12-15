$(document).ready(function () {
	// Select color input
	// Select size input
	var rows, cols, color = "black";

	// When size is submitted by the user, call makeGrid()
	$("#sizePicker").on("submit", function(event){
		event.preventDefault();
		rows = $("#input_height").val();
		cols = $("#input_width").val();
		makeGrid(rows, cols);
	});

	function makeGrid(rows, cols) {
	var table = $("#pixel_canvas");
	table.empty();
	for (var row = 0; row < rows; row++) {
		var completeRow = "<tr>"
		for (var col = 0; col < cols; col++) {
			completeRow += "<td></td>";
		};
		completeRow += "</tr>"
		table.append(completeRow);
	};
	}

	$("#colorPicker").on("change", function() {
		color = $(event.target).val();
	});

	$('#pixel_canvas').on('click', 'td', function(event) { 
		$(event.target).css("background-color", color);
	});

});
