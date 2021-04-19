var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rectY = 300
var rectX = 50

function animate() 
{

	ctx.clearRect(0,0,canvas.width, canvas.height);

	ctx.beginPath();
	ctx.fillRect(rectX, rectY, 25, 100)
	ctx.fillStyle = "#00FFF9";
	ctx.fill();

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
