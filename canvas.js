
var canvas = document.querySelector('canvas');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
var c = canvas.getContext('2d');
	c.fillStyle = "Pink";
	c.fillRect(100,100,100,100);
	c.fillStyle = "white";
	c.fillRect(300,100,100,100);
	c.fillStyle = "blue";
	c.fillRect(100,300,100,100);

	
	
	
//LINE

c.beginPath();
	c.moveTo(50,300);
	c.lineTo(300, 100);
	c.strokeStyle = "yellow";
	c.stroke();
	
	
//ARCS

c.arc(300,300,30,0, Math.PI * 2, false);
c.stroke();
	
	
	
	
	
console.log(canvas);
