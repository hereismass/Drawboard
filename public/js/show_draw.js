$(document).ready(function(){
	var D = new DrawingClass("show_drawing", null, false);
	D.lines = JSON.parse(drawingBody);
	D.drawFromStorage();
});