var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rectY = 300
var rectX = 50
var x = canvas.width/2;
var y = canvas.height/2;
var vx = 2;
var vy = -2;
var radius = 30

function animate() 
{

	ctx.clearRect(0,0,canvas.width, canvas.height);

	ctx.beginPath();
	ctx.fillRect(rectX, rectY, 25, 100)
	ctx.fillStyle = "#00FFF9";
	ctx.fill();
	ctx.closePath();

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

	document.addEventListener("keydown", press);
	document.addEventListener("keyup", release);

	function press(e)
	{
		if(e.keyCode == 87)
		{
			console.log("Moving Up");
			rectY = rectY - .1;

			if (rectY < 0)
			{
				rectY = 0;
			}
		}

		if(e.keyCode == 83)
		{
			console.log("Moving Down");
			rectY = rectY + .1;

			if (rectY > 700)
			{
				rectY = 700;
			}
		}
	}
	ctx.drawRect();
}

setInterval(animate, 10);
