//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var vy = 10;
var PlayerWins = 0;
var Player2Wins = 0;

//This is used to stop the player from moving through obstacles.
var prevX;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	ctx = canvas.getContext("2d");
	
	//Instantiate the Player
	player = new GameObject();
	player2 = new GameObject();
	ball = new GameObject();
	player.x = 100;
	player2.x = 900;
	

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

	if (ball.x > canvas.width/2 + 500)
	{
		PlayerWins +=  1;
		console.log(PlayerWins);
		ball.x = canvas.width/2
		ball.y = canvas.height/2
	}

	if (ball.x < canvas.width/2 - 490)
	{
		Player2Wins +=  1;
		console.log(Player2Wins);
		ball.x = canvas.width/2
		ball.y = canvas.height/2
	}
	
	//Move the Player to the up
	if(w)
	{
		player.vy = -vy;
		
		if (player.y < 50)
		{
			player.y = 50;
		}
	}
	
	else if(s)
	{
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

	//Player 2 movement
	if(up)
	{
		player2.vy = -vy;
		
		if (player2.y < 50)
		{
			player2.y = 50;
		}
	}
	
	else if(down)
	{
		player2.vy = vy;

		if (player2.y > 550)
		{
			player2.y = 550;
		}
	}
	else
	{
		player2.vy = 0;
	}

	if (ball.hitTestObject(player))
	{
		if(ball.y < player.y - player.height/6)
		{
			ball.vx = 4;
			ball.vy = -4;
		}
		else if(ball.y > player.y + player.height/6)
		{
			ball.vx = 4;
			ball.vy = 4;
		}
		else
		{
			ball.vx = 4;
			ball.vy = 0;
		}
	}

	if (ball.hitTestObject(player2))
	{
		if(ball.y < player2.y - player2.height/6)
		{
			ball.vx = -4;
			ball.vy = 4;
		}
		else if(ball.y > player2.y + player2.height/6)
		{
			ball.vx = -4;
			ball.vy = 4;
		}
		else
		{
			ball.vx = -4;
			ball.vy = 0;
		}
	}

	//Draws score to the screen
	ctx.font = "20px Georgia";
	ctx.fillText(PlayerWins, 550, 50);
	ctx.font = "20px Georgia";
	ctx.fillText(Player2Wins, 470, 50);
	ctx.font = "20px Georgia";
	ctx.fillText("Player 1 | Player 2", 440, 20);
	ctx.font = "20px Georgia";
	ctx.fillText("-", canvas.width/2, 50);
	

	//Update the Screen
	player.move();
	player2.move();
	player.drawRect();
	player2.drawRect();
	ball.drawCircle();


}

