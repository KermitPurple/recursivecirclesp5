const width = 600;
const height = 600;
var offsetSlider
var scaleSlider

function setup(){
	createCanvas(height, width);
	offsetSlider = createSlider(2,4,2);
	scaleSlider = createSlider(0,0.6,0.5,0.01);
}

function draw(){
	background(0);
	translate(width/2, height/2)
	stroke(255);
	noFill();
	drawRecursiveCircles(0, 0, width/2);
}

function drawRecursiveCircles(x, y, d){
	scale = scaleSlider.value()
	offset = offsetSlider.value()
	if(d > 2){
		ellipse(x, y, d);
		drawRecursiveCircles(x + d/offset, y, d*scale);
		drawRecursiveCircles(x - d/offset, y, d*scale);
		//drawRecursiveCircles(x, y + d/2, d/2);
		//drawRecursiveCircles(x, y - d/2, d/2);
	}
}
