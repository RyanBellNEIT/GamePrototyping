var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height/2;
var vx = 2;

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
	ctx.arc(x, y, 50, 0, Math.PI*2);
	ctx.fillStyle = "#5A00FF";
	ctx.fill();
	ctx.closePath();
	x += vx;
}
setInterval(animate, 10);