var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = Math.floor(Math.random() * 762) + 100;
var y = Math.floor(Math.random() * 650) + 10;
var vx = 2;
var vy = -2;
var radius = 50

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI*2);
	ctx.fillStyle = "#5A00FF";
	ctx.fill();
	ctx.closePath();
	x += 1*vx;
	y += 1*vy;

	if (x + vx > canvas.width-radius)
	{
		vx = -vx
	}

	if (x + vx < 0+radius)
	{
		vx = -vx
	}

	if (y + vy > canvas.height - radius)
	{
		vy = -vy
	}

	if (y + vy < 0+radius)
	{
		vy = -vy
	}
}


setInterval(animate, 10);