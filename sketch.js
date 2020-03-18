const width = 600;
const height = 600;

function setup(){
	createCanvas(height, width);
}

function draw(){
	background(0);
	translate(width/2, height/2)
	stroke(255);
	strokeWeight(width/2);
	point(0,0);
}
