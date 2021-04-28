//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var vy = 10;

//This is used to stop the player from moving through obstacles.
var prevX;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	ctx = canvas.getContext("2d");
	
	//Instantiate the Player
	player = new GameObject();
	ball = new GameObject();
	player.x = 100;
	

	ball.vx = 4;
	ball.vy = -4;
	ball.width = 30;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	//Moves the ball
	ball.x += ball.vx;
	ball.y += ball.vy;

	if (ball.y < 0 + 30)
	{
		ball.vy = -ball.vy
	}

	if (ball.y > canvas.height -30)
	{
		ball.vy = -ball.vy
	}

	if (ball.x > canvas.width - ball.width/2)
	{
		ball.vx = -ball.vx
	}

	if (ball.x < canvas.width/2 - 490)
	{
		ball.x = canvas.width/2
		ball.y = canvas.height/2
	}
	
	//Move the Player to the up
	if(w)
	{
		//console.log("Moving Up");
		player.vy = -vy;
		
		if (player.y < 50)
		{
			player.y = 50;
		}
	}
	
	else if(s)
	{
		//console.log("Moving Down");
		player.vy = vy;

		if (player.y > 550)
		{
			player.y = 550;
		}
	}
	else
	{
		player.vy = 0;
	}

	if (ball.hitTestObject(player))
	{
		ball.vx *= -1
	}

	//Update the Screen
	player.move();
	player.drawRect();
	ball.drawCircle();


}

