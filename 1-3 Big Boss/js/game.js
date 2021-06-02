//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var vy = 10;
var score = 0;
var gravity = 1;
var force = 3;

//This is used to stop the player from moving through obstacles.
var prevX;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	ctx = canvas.getContext("2d");
	
	//Instantiate the Player
	player = new GameObject();
	ball = new GameObject();

	player.x = canvas.width/2;
	player.width = 250;
	player.height = 40;
	player.y = 550;
	player.color = "#00ffff";
	
	ball.vx = 4;
	ball.vy = -4;
	ball.width = 100;
	ball.color = "#ff00ff";

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	ctx.font = "16px Arial"
	ctx.fillText("Score: ", 25, 40)
	ctx.fillText(score, 75, 40)
	ctx.color = "#555555";

	//Moves the ball
	//ball.x += ball.vx;
	ball.y += ball.vy;

	ball.vy += gravity;

	if (ball.y < 0 + 50)
	{
		ball.vy = -ball.vy
	}

	if (ball.x > canvas.width - 50)
	{
		ball.vx = -ball.vx
		ball.x = canvas.width -50;
	}

	if (ball.x < canvas.width - 1024 + 50)
	{
		ball.vx = -ball.vx
		ball.x = canvas.width - 1024 + 50
	}

	if (ball.y > canvas.height -50)
	{
		score = 0;
		ball.vy = -ball.vy * .67
		ball.vx = -ball.vx * .67
		ball.y = canvas.height - 50
	}
	
	//Move the Player left
	if(a)
	{
		player.vx += -1;
	}
	if (player.x < -120 + player.width)
	{
		player.x = -120 + player.width;
	}
	
	//Move the Player right
	if(d)
	{
		player.vx += 1 * 1;
	}
	if (player.x > 1144 - player.width)
	{
		player.x = 1144 - player.width;
	}
	if (s)
	{
		gravity = .25
		ball.vy += gravity;
	}
	else
	{
		gravity = 1;
	}

	player.vx *= .95;

	if (ball.hitTestObject(player))
	{
		score++;
		ball.vy = -20;
		if(ball.x < player.x - player.width/6)
		{
			ball.vx = -10;

		}
		else if(ball.x > player.x + player.width/6)
		{
			ball.vx = 10;
		}
		else
		{
			ball.vx = 0;
			
		}
	}

	//Update the Screen
	player.move();
	ball.move();
	player.drawRect();
	ball.drawCircle();

	ctx.moveTo(player.x, player.y)
	ctx.lineTo(ball.x, ball.y);
	ctx.stroke();
}