var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = Math.floor(Math.random() * 762) + 100;
var y = Math.floor(Math.random() * 650) + 10;
var vx = 2;
var vy = -2;
var radius = 50
var counter = 0;

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
		counter++
	}

	if (x + vx < 0+radius)
	{
		vx = -vx
		counter++
	}

	if (y + vy > canvas.height - radius)
	{
		vy = -vy
		counter++
	}

	if (y + vy < 0+radius)
	{
		vy = -vy
		counter++
	}

	ctx.font = '50px serif';
	ctx.fillStyle = "#00F2FF";
	ctx.fillText("Collisions: "+counter, 10, 50);

}


setInterval(animate, 10);