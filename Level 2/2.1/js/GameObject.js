var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var y = canvas.height / 2 - 50;

function animate() {
	ctx.beginPath();
	ctx.fillRect(50, y, 25, 100)
	ctx.fillStyle = "#00FFF9";
	ctx.fill();
	ctx.closePath();
	}

setInterval(animate, 10);