const width = 600;
const height = 600;

function setup(){
	createCanvas(height, width);
}

function draw(){
	background(0);
	translate(width/2, height/2)
	stroke(255);
	noFill();
	drawRecursiveCircles(0, 0, width/2);
}

function drawRecursiveCircles(x, y, d){
	if(d > 2){
		ellipse(x, y, d);
		drawRecursiveCircles(x + d/2, y, d/2);
		drawRecursiveCircles(x - d/2, y, d/2);
		//drawRecursiveCircles(x, y + d/2, d/2);
		//drawRecursiveCircles(x, y - d/2, d/2);
	}
}
