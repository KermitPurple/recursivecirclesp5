const width = window.innerHeight-20;
const height = window.innerHeight-20;
var offsetSlider
var scaleSlider
var up
var down
var left
var right

function setup(){
	createCanvas(height, width).parent('canvas');
	createP("Offset").parent('sliders')
	offsetSlider = createSlider(2,4,2, 0.1);
	offsetSlider.parent('sliders');
	createP("Scale").parent('sliders')
	scaleSlider = createSlider(0,0.6,0.5,0.01);
	scaleSlider.parent('sliders');
	up = createCheckbox("Up", false);
	up.parent('controls');
	down = createCheckbox("Down", false);
	down.parent('controls');
	left = createCheckbox("Left", true);
	left.parent('controls');
	right = createCheckbox("Right", true);
	right.parent('controls');
}

function draw(){
	background(0);
	translate(width/2, height/2)
	stroke(255);
	noFill();
	drawRecursiveCircles(0, 0, width/2);
}

function drawRecursiveCircles(x, y, d){
	var scl = scaleSlider.value()
	var offset = offsetSlider.value()
	if(d > 2){
		ellipse(x, y, d);
		if(right.checked())
			drawRecursiveCircles(x + d/offset, y, d*scl);
		if(left.checked())
			drawRecursiveCircles(x - d/offset, y, d*scl);
		if(down.checked())
			drawRecursiveCircles(x, y + d/offset, d*scl);
		if(up.checked())
			drawRecursiveCircles(x, y - d/offset, d*scl);
	}
}
