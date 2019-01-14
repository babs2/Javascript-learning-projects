


function setup(){
createCanvas (windowWidth, windowHeight);
background(255,200,0);

}

function draw() {
  fill(100,100,100);
ellipse(100,100,100,100);
fill(Math.random()*255,Math.random()*255,Math.random()*255);
ellipse(Math.random()*800,Math.random()*800,Math.random()*200,Math.random()*200);
rect(Math.random()*800,Math.random()*800,Math.random()*200,Math.random()*200);

text('hello',Math.random()*300,Math.random()*300,Math.random()*300,Math.random()*300);



}

















/*var x;
var y;
var z;
var o;
var circleX = 0;

function setup() {

createCanvas(windowWidth, windowHeight);

}
function draw() {
  x = random(0,350);
  y = random(0,350);
  z = mouseX
  o = mouseY
//  background(x,y,x+y/2);
//  stroke(x,y,z,o);
  ellipse(circleX,100,z,o);
circleX = circleX + 2;

//  fill(y,x,0);
//  rect(z,o,z,o);
}



// control + alt + q will stop the server
// control +alt + l will launch the program

/*
function mousePressed(){
background(x,y,o);
circleX = 0;
''print(x,y,o,100,100)

}



*/
