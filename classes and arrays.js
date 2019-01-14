var cube1;
var cube2;
arr1 = ['red','orange','yellow','green','blue','indigo','violet'];



function setup() {
  createCanvas(400, 400);
	cube1 = new Cube(150,150,40,175);
	cube2 = new Cube(250,250,30,10);
}

function draw() {
  background(200);
	cube1.move();
	cube1.show();
	cube2.move();
	cube2.show();
	c = random(255);
	for (var i = 0; i < 8; i++){
	text(arr1[i],100,i * 50 + 50);}
}

class Cube {
	constructor(x,y,r,c) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.c = c
	}
	move() {
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);		
	}
	show() {
		fill(this.c);
	 ellipse(this.x, this.y, this.r, this.r);
	}
	// color(){
	// 	fill(this.c);
}