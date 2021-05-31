//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var vy = 10;
var PlayerWins = 0;
var gravity = 1;
var force = 3;

//This is used to stop the player from moving through obstacles.
var prevX;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	ctx = canvas.getContext("2d");
	
	//Instantiate the Player
	callobjects();

	setvalues();

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	ctx.font = "30px Arial"
	ctx.fillText("Score: ", 25, 40)
	ctx.fillText(PlayerWins, 120, 40)
	ctx.color = "#555555";

	MoveObjects();

	checkbelow();
	
	//Move the Player left
	if(a)
	{
		player.vx += -1;
	}
	if (player.x < 0 + player.width)
	{
		player.x = 0 + player.width;
	}
	
	//Move the Player right
	if(d)
	{
		player.vx += 1 * 1;
	}
	if (player.x > 800 - player.width)
	{
		player.x = 800 - player.width;
	}

	if (player.hitTestObject(ball))
	{
		player.color = "#FF0000"
		ball.x = Math.floor(Math.random() * 800);
		ball.y = Math.floor(Math.random()*301) - 300
		ball2.x = Math.floor(Math.random() * 800);
		ball2.y = Math.floor(Math.random()*301) - 300
		ball3.x = Math.floor(Math.random() * 800);
		ball3.y = Math.floor(Math.random()*301) - 300
		ball4.x = Math.floor(Math.random() * 800);
		ball4.y = Math.floor(Math.random()*301) - 300
		ball5.x = Math.floor(Math.random() * 800);
		ball5.y = Math.floor(Math.random()*301) - 300
		square.x = Math.floor(Math.random() * 800);
		square.y = Math.floor(Math.random()*301) - 300
		square2.x = Math.floor(Math.random() * 800);
		square2.y = Math.floor(Math.random()*301) - 300
		square3.x = Math.floor(Math.random() * 800);
		square3.y = Math.floor(Math.random()*301) - 300
		square4.x = Math.floor(Math.random() * 800);
		square4.y = Math.floor(Math.random()*301) - 300
		square5.x = Math.floor(Math.random() * 800);
		square5.y = Math.floor(Math.random()*301) - 300
		PlayerWins = 0;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(ball2))
	{
		player.color = "#FF0000"
		ball.x = Math.floor(Math.random() * 800);
		ball.y = Math.floor(Math.random()*301) - 300
		ball2.x = Math.floor(Math.random() * 800);
		ball2.y = Math.floor(Math.random()*301) - 300
		ball3.x = Math.floor(Math.random() * 800);
		ball3.y = Math.floor(Math.random()*301) - 300
		ball4.x = Math.floor(Math.random() * 800);
		ball4.y = Math.floor(Math.random()*301) - 300
		ball5.x = Math.floor(Math.random() * 800);
		ball5.y = Math.floor(Math.random()*301) - 300
		square.x = Math.floor(Math.random() * 800);
		square.y = Math.floor(Math.random()*301) - 300
		square2.x = Math.floor(Math.random() * 800);
		square2.y = Math.floor(Math.random()*301) - 300
		square3.x = Math.floor(Math.random() * 800);
		square3.y = Math.floor(Math.random()*301) - 300
		square4.x = Math.floor(Math.random() * 800);
		square4.y = Math.floor(Math.random()*301) - 300
		square5.x = Math.floor(Math.random() * 800);
		square5.y = Math.floor(Math.random()*301) - 300
		PlayerWins = 0;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(ball3))
	{
		player.color = "#FF0000"
		ball.x = Math.floor(Math.random() * 800);
		ball.y = Math.floor(Math.random()*301) - 300
		ball2.x = Math.floor(Math.random() * 800);
		ball2.y = Math.floor(Math.random()*301) - 300
		ball3.x = Math.floor(Math.random() * 800);
		ball3.y = Math.floor(Math.random()*301) - 300
		ball4.x = Math.floor(Math.random() * 800);
		ball4.y = Math.floor(Math.random()*301) - 300
		ball5.x = Math.floor(Math.random() * 800);
		ball5.y = Math.floor(Math.random()*301) - 300
		square.x = Math.floor(Math.random() * 800);
		square.y = Math.floor(Math.random()*301) - 300
		square2.x = Math.floor(Math.random() * 800);
		square2.y = Math.floor(Math.random()*301) - 300
		square3.x = Math.floor(Math.random() * 800);
		square3.y = Math.floor(Math.random()*301) - 300
		square4.x = Math.floor(Math.random() * 800);
		square4.y = Math.floor(Math.random()*301) - 300
		square5.x = Math.floor(Math.random() * 800);
		square5.y = Math.floor(Math.random()*301) - 300
		PlayerWins = 0;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(ball4))
	{
		player.color = "#FF0000"
		ball.x = Math.floor(Math.random() * 800);
		ball.y = Math.floor(Math.random()*301) - 300
		ball2.x = Math.floor(Math.random() * 800);
		ball2.y = Math.floor(Math.random()*301) - 300
		ball3.x = Math.floor(Math.random() * 800);
		ball3.y = Math.floor(Math.random()*301) - 300
		ball4.x = Math.floor(Math.random() * 800);
		ball4.y = Math.floor(Math.random()*301) - 300
		ball5.x = Math.floor(Math.random() * 800);
		ball5.y = Math.floor(Math.random()*301) - 300
		square.x = Math.floor(Math.random() * 800);
		square.y = Math.floor(Math.random()*301) - 300
		square2.x = Math.floor(Math.random() * 800);
		square2.y = Math.floor(Math.random()*301) - 300
		square3.x = Math.floor(Math.random() * 800);
		square3.y = Math.floor(Math.random()*301) - 300
		square4.x = Math.floor(Math.random() * 800);
		square4.y = Math.floor(Math.random()*301) - 300
		square5.x = Math.floor(Math.random() * 800);
		square5.y = Math.floor(Math.random()*301) - 300
		PlayerWins = 0;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(ball5))
	{
		player.color = "#FF0000"
		ball.x = Math.floor(Math.random() * 800);
		ball.y = Math.floor(Math.random()*301) - 300
		ball2.x = Math.floor(Math.random() * 800);
		ball2.y = Math.floor(Math.random()*301) - 300
		ball3.x = Math.floor(Math.random() * 800);
		ball3.y = Math.floor(Math.random()*301) - 300
		ball4.x = Math.floor(Math.random() * 800);
		ball4.y = Math.floor(Math.random()*301) - 300
		ball5.x = Math.floor(Math.random() * 800);
		ball5.y = Math.floor(Math.random()*301) - 300
		square.x = Math.floor(Math.random() * 800);
		square.y = Math.floor(Math.random()*301) - 300
		square2.x = Math.floor(Math.random() * 800);
		square2.y = Math.floor(Math.random()*301) - 300
		square3.x = Math.floor(Math.random() * 800);
		square3.y = Math.floor(Math.random()*301) - 300
		square4.x = Math.floor(Math.random() * 800);
		square4.y = Math.floor(Math.random()*301) - 300
		square5.x = Math.floor(Math.random() * 800);
		square5.y = Math.floor(Math.random()*301) - 300
		PlayerWins = 0;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(square))
	{
		player.color = "#00FF00"
		square.x = Math.floor(Math.random() * 800);
		square.y = Math.floor(Math.random()*301) - 300
		PlayerWins += 1;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(square2))
	{
		player.color = "#00FF00"
		square2.x = Math.floor(Math.random() * 800);
		square2.y = Math.floor(Math.random()*301) - 300
		PlayerWins += 1;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(square3))
	{
		player.color = "#00FF00"
		square3.x = Math.floor(Math.random() * 800);
		square3.y = Math.floor(Math.random()*301) - 300
		PlayerWins += 1;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(square4))
	{
		player.color = "#00FF00"
		square4.x = Math.floor(Math.random() * 800);
		square4.y = Math.floor(Math.random()*301) - 300
		PlayerWins += 1;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(square5))
	{
		player.color = "#00FF00"
		square5.x = Math.floor(Math.random() * 800);
		square5.y = Math.floor(Math.random()*301) - 300
		PlayerWins += 1;
		setTimeout(ResetPlayerColor, 500)
	}

	player.vx *= .95;

	//Update the Screen
	player.move();
	player.drawRect();

	ball.drawCircle();
	ball2.drawCircle();
	ball3.drawCircle();
	ball4.drawCircle();
	ball5.drawCircle();

	square.drawRect();
	square2.drawRect();
	square3.drawRect();
	square4.drawRect();
	square5.drawRect();
}
function ResetPlayerColor()
	{
		player.color = "#ffff00"
	}
function checkbelow()
{
	if (ball.y > player.y + ball.height)
	{
		ball.x = Math.floor(Math.random() * 800);
		ball.y = Math.floor(Math.random()*301) - 300
	}
	if (ball2.y > player.y + ball.height)
	{
		ball2.x = Math.floor(Math.random() * 800);
		ball2.y = Math.floor(Math.random()*301) - 300
	}
	if (ball3.y > player.y + ball.height)
	{
		ball3.x = Math.floor(Math.random() * 800);
		ball3.y = Math.floor(Math.random()*301) - 300
	}
	if (ball4.y > player.y + ball.height)
	{
		ball4.x = Math.floor(Math.random() * 800);
		ball4.y = Math.floor(Math.random()*301) - 300
	}
	if (ball5.y > player.y + ball.height)
	{
		ball5.x = Math.floor(Math.random() * 800);
		ball5.y = Math.floor(Math.random()*301) - 300
	}
	if (square.y > player.y + square.height)
	{
		square.x = Math.floor(Math.random() * 800);
		square.y = Math.floor(Math.random()*301) - 300
	}
	if (square2.y > player.y + square2.height)
	{
		square2.x = Math.floor(Math.random() * 800);
		square2.y = Math.floor(Math.random()*301) - 300
	}
	if (square3.y > player.y + square3.height)
	{
		square3.x = Math.floor(Math.random() * 800);
		square3.y = Math.floor(Math.random()*301) - 300
	}
	if (square4.y > player.y + square4.height)
	{
		square4.x = Math.floor(Math.random() * 800);
		square4.y = Math.floor(Math.random()*301) - 300
	}
	if (square5.y > player.y + square5.height)
	{
		square5.x = Math.floor(Math.random() * 800);
		square5.y = Math.floor(Math.random()*301) - 300
	}
}

function setvalues()
	{
		player.x = canvas.width/2;
		player.y = 750;
		player.width = 50;
		player.height = 50;
		player.color = "#ffff00";
	
		square.x = Math.floor(Math.random() * 800);
		square.y = Math.floor(Math.random()*301) - 300;
		square.vx = 4;
		square.vy = -8;
		square.width = 30;
		square.height = 30;
		square.color = "#00FF00";
	
		square2.x = Math.floor(Math.random() * 800);
		square2.y = Math.floor(Math.random()*301) - 300;
		square2.vx = 4;
		square2.vy = -8;
		square2.width = 30;
		square2.height = 30;
		square2.color = "#00FF00";
	
		square3.x = Math.floor(Math.random() * 800);
		square3.y = Math.floor(Math.random()*301) - 300;
		square3.vx = 4;
		square3.vy = -8;
		square3.width = 30;
		square3.height = 30;
		square3.color = "#00FF00";
	
		square4.x = Math.floor(Math.random() * 800);
		square4.y = Math.floor(Math.random()*301) - 300;
		square4.vx = 4;
		square4.vy = -8;
		square4.width = 30;
		square4.height = 30;
		square4.color = "#00FF00";
	
		square5.x = Math.floor(Math.random() * 800);
		square5.y = Math.floor(Math.random()*301) - 300;
		square5.vx = 4;
		square5.vy = -8;
		square5.width = 30;
		square5.height = 30;
		square5.color = "#00FF00";
		
		ball.x = Math.floor(Math.random() * 800);
		ball.y = Math.floor(Math.random()*301) - 300
		ball.vx = 4;
		ball.vy = -8;
		ball.width = 40;
		ball.color = "#FF0000";
	
		ball2.x = Math.floor(Math.random() * 800);
		ball2.y = Math.floor(Math.random()*301) - 300
		ball2.vx = 4;
		ball2.vy = -8;
		ball2.width = 40;
		ball2.color = "#FF0000";
	
		ball3.x = Math.floor(Math.random() * 800);
		ball3.y = Math.floor(Math.random()*301) - 300
		ball3.vx = 4;
		ball3.vy = -8;
		ball3.width = 40;
		ball3.color = "#FF0000";
	
		ball4.x = Math.floor(Math.random() * 800);
		ball4.y = Math.floor(Math.random()*301) - 300
		ball4.vx = 4;
		ball4.vy = -8;
		ball4.width = 40;
		ball4.color = "#FF0000";
	
		ball5.x = Math.floor(Math.random() * 800);
		ball5.y = Math.floor(Math.random()*301) - 300
		ball5.vx = 4;
		ball5.vy = -8;
		ball5.width = 40;
		ball5.color = "#FF0000";
	}
function callobjects()
	{
		player = new GameObject();
		ball = new GameObject();
		ball2 = new GameObject();
		ball3 = new GameObject();
		ball4 = new GameObject();
		ball5 = new GameObject();
		square = new GameObject();
		square2 = new GameObject();
		square3 = new GameObject();
		square4 = new GameObject();
		square5 = new GameObject();
	}
function MoveObjects()
{
	ball.y -= ball.vy;
	ball2.y -= ball2.vy;
	ball3.y -= ball2.vy;
	ball4.y -= ball2.vy;
	ball5.y -= ball2.vy;

	square.y -= square.vy;
	square2.y -= square2.vy;
	square3.y -= square3.vy;
	square4.y -= square4.vy;
	square5.y -= square5.vy;
}