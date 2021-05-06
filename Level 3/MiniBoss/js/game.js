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
var img = new Image()
var img2 = new Image()
img.src = "../../images/baby.png"
img2.src = "../../images/space.jpg"
img.onload = function(){
	animate()
}

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
	
	ball.vx = 10;
	ball.vy = -10;
	ball.width = 30;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	context.drawImage(img2, 0, 0);

	//Moves the ball
	ball.x += ball.vx;
	ball.y += ball.vy;

	//Draws the net.
	
	/*context.save();
	context.strokeStyle = "#FF0000"
	context.beginPath();
	context.moveTo(canvas.width/2, 0);
	context.lineTo(canvas.width/2, 600);
	context.closePath();
	context.lineWidth = 4;
	context.stroke();
	context.restore();*/

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
			player.y = 550;
		}
	}
	
	else if(s)
	{
		player.vy = vy;

		if (player.y > 550)
		{
			player.y = 50;
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
			player2.y = 550;
		}
	}
	
	else if(down)
	{
		player2.vy = vy;

		if (player2.y > 550)
		{
			player2.y = 50;
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
			ball.vx = 10;
			ball.vy = -10;
		}
		else if(ball.y > player.y + player.height/6)
		{
			ball.vx = 10;
			ball.vy = 10;
		}
		else
		{
			ball.vx = 10;
			ball.vy = 0;
		}
	}

	if (ball.hitTestObject(player2))
	{
		if(ball.y < player2.y - player2.height/6)
		{
			ball.vx = -10;
			ball.vy = 10;
		}
		else if(ball.y > player2.y + player2.height/6)
		{
			ball.vx = -10;
			ball.vy = 10;
		}
		else
		{
			ball.vx = -10;
			ball.vy = 0;
		}
	}

	//Draws score to the screen
	context.fillStyle = "white";
	ctx.font = "20px Georgia";
	ctx.fillText(PlayerWins, 546, 50);
	ctx.font = "20px Georgia";
	ctx.fillText(Player2Wins, 466, 50);
	ctx.font = "20px Georgia";
	ctx.fillText("Player 1 | Player 2", 435, 20);
	ctx.font = "20px Georgia";
	ctx.fillText("-", 508, 50);

	if (PlayerWins > 4)
	{
		PlayerWins = 0;
		Player2Wins = 0;
	}
	
	if (Player2Wins > 4)
	{
		PlayerWins = 0;
		Player2Wins = 0;
	}

	//Update the Screen
	player.move();
	player2.move();
	player.drawRect();
	player2.drawRect();
	context.drawImage(img, ball.x-ball.width/2, ball.y-ball.width/2, ball.width, ball.width);
}

