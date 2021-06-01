var canvas = document.getElementById("canvas");
	canvas.addEventListener("mousemove", track);
	canvas.addEventListener("click", startGame);
	canvas.addEventListener("click", Instructions);
	
var context = canvas.getContext("2d");

var image = document.getElementById('image')

var interval = 1000/60;
var timer = setInterval(animate, interval);

var mouse = {x:0,y:0};

var currentState ="start";
var states = [];

player = new GameObject();
var dot = new GameObject({width:100, height:100, color:"black"})
var dot2 = new GameObject({width:100, height:100, color:"black"})

callobjects();

setvalues();

player.x = canvas.width/2;
player.y = 750;
player.width = 50;
player.height = 50;
player.color = "#ffff00";

dot.y = 650;
dot.x = 200;

dot2.y = 650;
dot2.x = 800;

var gravity = 1;
var force = 3;
var PlayerWins = 0;

var startX = player.x;
var startY = player.y;


function startGame()
{
	var dx = dot.x - mouse.x;
	var dy = dot.y - mouse.y;
	var dist = Math.sqrt(dx*dx + dy * dy);
	if(dist < dot.radius())
	{
		changeStates("play");
	}
}

function Instructions()
{
	var dx = dot2.x - mouse.x;
	var dy = dot2.y - mouse.y;
	var dist = Math.sqrt(dx*dx + dy * dy);
	if(dist < dot2.radius())
	{
		changeStates("instructions");
	}
}

function track(e)
{
	var rect = canvas.getBoundingClientRect();
	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;
}
	
function changeStates(stateName)
{
	currentState = stateName;
}


states["start"] = function()
{
	player.x = startX;
	player.y = startY;
	
	context.drawImage(image,0,0,canvas.width,canvas.height)

	context.save();
		context.fillStyle = "black";
		context.font = "bold 58px Arial"
		context.textAlign = "center";
		context.fillText("Space Destroyer", canvas.width/2, canvas.height/2-350)
		context.font = "bold 20px Arial"
		context.fillText("Ryan Bell", canvas.width/2, canvas.height/2-310)
		context.fillStyle = "black";
		context.font = "bold 58px Arial"
		context.textAlign = "center";
		context.fillStyle = "Black";
		context.fillText("Click either black dot to begin.", canvas.width/2, canvas.height/1.5-450/4)
		context.font = "bold 40px Arial"
		context.fillStyle = "Black";
		context.fillText("Play", 200, 580)
		context.font = "bold 40px Arial"
		context.fillStyle = "Black";
		context.fillText("Instructions", 800, 580)
	context.restore();
	
	dot.drawCircle();
	dot2.drawCircle();
	
}

states["instructions"] = function()
{
	context.font = "bold 40px Arial"
	context.fillStyle = "black";
	context.fillText("Instructions", canvas.width/2-100, canvas.height/2 - 350)
	context.fillText("-A and D to move left and right.", 25, canvas.height/2 - 225)
	context.fillText("-P to pause.", 25, canvas.height/2 - 300)
	context.fillText("-Each green block is 1 point.", 25, canvas.height/2 - 150)
	context.fillText("-Red circle makes you lose and game resets.", 25, canvas.height/2 - 75)
	context.fillText("-Get your score as high as possible.", 25, canvas.height/2 - 0)

	context.font = "bold 40px Arial"
	context.fillStyle = "Black";
	context.fillText("Play", 460, 580)

	dot.x = 500;

	dot.drawCircle();
}

states["play"] = function()
{
	MoveObjects();

	checkbelow();

	context.drawImage(image,0,0,canvas.width,canvas.height)

	context.save();
		context.fillStyle = "black";
		context.font = "30px Arial"
		context.fillText("Score: ", 25, 40)
		context.fillText(PlayerWins, 120, 40)
		context.color = "#555555";
	context.restore();

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
	if (player.x > 1000 - player.width)
	{
		player.x = 1000 - player.width;
	}

	if(p)
	{
		ball.vy = 0;
		ball2.vy = 0;
		ball2.vy = 0;
		ball2.vy = 0;
		ball2.vy = 0;
		square.vy = 0;
		square2.vy = 0;
		square3.vy = 0;
		square4.vy = 0;
		square5.vy = 0;
		player.vx *= 0;
	}
	if(p == false)
	{
		ball.vy = -8;
		ball2.vy = -8;
		ball2.vy = -8;
		ball2.vy = -8;
		ball2.vy = -8;
		square.vy = -8;
		square2.vy = -8;
		square3.vy = -8;
		square4.vy = -8;
		square5.vy = -8;
		player.vx *= .95;
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
		ball6.x = Math.floor(Math.random() * 800);
		ball6.y = Math.floor(Math.random()*301) - 300
		ball7.x = Math.floor(Math.random() * 800);
		ball7.y = Math.floor(Math.random()*301) - 300
		ball8.x = Math.floor(Math.random() * 800);
		ball8.y = Math.floor(Math.random()*301) - 300
		ball9.x = Math.floor(Math.random() * 800);
		ball9.y = Math.floor(Math.random()*301) - 300
		ball10.x = Math.floor(Math.random() * 800);
		ball10.y = Math.floor(Math.random()*301) - 300
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
		square6.x = Math.floor(Math.random() * 800);
		square6.y = Math.floor(Math.random()*301) - 300
		square7.x = Math.floor(Math.random() * 800);
		square7.y = Math.floor(Math.random()*301) - 300
		square8.x = Math.floor(Math.random() * 800);
		square8.y = Math.floor(Math.random()*301) - 300
		square9.x = Math.floor(Math.random() * 800);
		square9.y = Math.floor(Math.random()*301) - 300
		square10.x = Math.floor(Math.random() * 800);
		square10.y = Math.floor(Math.random()*301) - 300
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
		ball6.x = Math.floor(Math.random() * 800);
		ball6.y = Math.floor(Math.random()*301) - 300
		ball7.x = Math.floor(Math.random() * 800);
		ball7.y = Math.floor(Math.random()*301) - 300
		ball8.x = Math.floor(Math.random() * 800);
		ball8.y = Math.floor(Math.random()*301) - 300
		ball9.x = Math.floor(Math.random() * 800);
		ball9.y = Math.floor(Math.random()*301) - 300
		ball10.x = Math.floor(Math.random() * 800);
		ball10.y = Math.floor(Math.random()*301) - 300
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
		square6.x = Math.floor(Math.random() * 800);
		square6.y = Math.floor(Math.random()*301) - 300
		square7.x = Math.floor(Math.random() * 800);
		square7.y = Math.floor(Math.random()*301) - 300
		square8.x = Math.floor(Math.random() * 800);
		square8.y = Math.floor(Math.random()*301) - 300
		square9.x = Math.floor(Math.random() * 800);
		square9.y = Math.floor(Math.random()*301) - 300
		square10.x = Math.floor(Math.random() * 800);
		square10.y = Math.floor(Math.random()*301) - 300
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
		ball6.x = Math.floor(Math.random() * 800);
		ball6.y = Math.floor(Math.random()*301) - 300
		ball7.x = Math.floor(Math.random() * 800);
		ball7.y = Math.floor(Math.random()*301) - 300
		ball8.x = Math.floor(Math.random() * 800);
		ball8.y = Math.floor(Math.random()*301) - 300
		ball9.x = Math.floor(Math.random() * 800);
		ball9.y = Math.floor(Math.random()*301) - 300
		ball10.x = Math.floor(Math.random() * 800);
		ball10.y = Math.floor(Math.random()*301) - 300
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
		square6.x = Math.floor(Math.random() * 800);
		square6.y = Math.floor(Math.random()*301) - 300
		square7.x = Math.floor(Math.random() * 800);
		square7.y = Math.floor(Math.random()*301) - 300
		square8.x = Math.floor(Math.random() * 800);
		square8.y = Math.floor(Math.random()*301) - 300
		square9.x = Math.floor(Math.random() * 800);
		square9.y = Math.floor(Math.random()*301) - 300
		square10.x = Math.floor(Math.random() * 800);
		square10.y = Math.floor(Math.random()*301) - 300
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
		ball6.x = Math.floor(Math.random() * 800);
		ball6.y = Math.floor(Math.random()*301) - 300
		ball7.x = Math.floor(Math.random() * 800);
		ball7.y = Math.floor(Math.random()*301) - 300
		ball8.x = Math.floor(Math.random() * 800);
		ball8.y = Math.floor(Math.random()*301) - 300
		ball9.x = Math.floor(Math.random() * 800);
		ball9.y = Math.floor(Math.random()*301) - 300
		ball10.x = Math.floor(Math.random() * 800);
		ball10.y = Math.floor(Math.random()*301) - 300
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
		square6.x = Math.floor(Math.random() * 800);
		square6.y = Math.floor(Math.random()*301) - 300
		square7.x = Math.floor(Math.random() * 800);
		square7.y = Math.floor(Math.random()*301) - 300
		square8.x = Math.floor(Math.random() * 800);
		square8.y = Math.floor(Math.random()*301) - 300
		square9.x = Math.floor(Math.random() * 800);
		square9.y = Math.floor(Math.random()*301) - 300
		square10.x = Math.floor(Math.random() * 800);
		square10.y = Math.floor(Math.random()*301) - 300
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
		ball6.x = Math.floor(Math.random() * 800);
		ball6.y = Math.floor(Math.random()*301) - 300
		ball7.x = Math.floor(Math.random() * 800);
		ball7.y = Math.floor(Math.random()*301) - 300
		ball8.x = Math.floor(Math.random() * 800);
		ball8.y = Math.floor(Math.random()*301) - 300
		ball9.x = Math.floor(Math.random() * 800);
		ball9.y = Math.floor(Math.random()*301) - 300
		ball10.x = Math.floor(Math.random() * 800);
		ball10.y = Math.floor(Math.random()*301) - 300
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
		square6.x = Math.floor(Math.random() * 800);
		square6.y = Math.floor(Math.random()*301) - 300
		square7.x = Math.floor(Math.random() * 800);
		square7.y = Math.floor(Math.random()*301) - 300
		square8.x = Math.floor(Math.random() * 800);
		square8.y = Math.floor(Math.random()*301) - 300
		square9.x = Math.floor(Math.random() * 800);
		square9.y = Math.floor(Math.random()*301) - 300
		square10.x = Math.floor(Math.random() * 800);
		square10.y = Math.floor(Math.random()*301) - 300
		PlayerWins = 0;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(ball6))
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
		ball6.x = Math.floor(Math.random() * 800);
		ball6.y = Math.floor(Math.random()*301) - 300
		ball7.x = Math.floor(Math.random() * 800);
		ball7.y = Math.floor(Math.random()*301) - 300
		ball8.x = Math.floor(Math.random() * 800);
		ball8.y = Math.floor(Math.random()*301) - 300
		ball9.x = Math.floor(Math.random() * 800);
		ball9.y = Math.floor(Math.random()*301) - 300
		ball10.x = Math.floor(Math.random() * 800);
		ball10.y = Math.floor(Math.random()*301) - 300
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
		square6.x = Math.floor(Math.random() * 800);
		square6.y = Math.floor(Math.random()*301) - 300
		square7.x = Math.floor(Math.random() * 800);
		square7.y = Math.floor(Math.random()*301) - 300
		square8.x = Math.floor(Math.random() * 800);
		square8.y = Math.floor(Math.random()*301) - 300
		square9.x = Math.floor(Math.random() * 800);
		square9.y = Math.floor(Math.random()*301) - 300
		square10.x = Math.floor(Math.random() * 800);
		square10.y = Math.floor(Math.random()*301) - 300
		PlayerWins = 0;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(ball7))
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
		ball6.x = Math.floor(Math.random() * 800);
		ball6.y = Math.floor(Math.random()*301) - 300
		ball7.x = Math.floor(Math.random() * 800);
		ball7.y = Math.floor(Math.random()*301) - 300
		ball8.x = Math.floor(Math.random() * 800);
		ball8.y = Math.floor(Math.random()*301) - 300
		ball9.x = Math.floor(Math.random() * 800);
		ball9.y = Math.floor(Math.random()*301) - 300
		ball10.x = Math.floor(Math.random() * 800);
		ball10.y = Math.floor(Math.random()*301) - 300
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
		square6.x = Math.floor(Math.random() * 800);
		square6.y = Math.floor(Math.random()*301) - 300
		square7.x = Math.floor(Math.random() * 800);
		square7.y = Math.floor(Math.random()*301) - 300
		square8.x = Math.floor(Math.random() * 800);
		square8.y = Math.floor(Math.random()*301) - 300
		square9.x = Math.floor(Math.random() * 800);
		square9.y = Math.floor(Math.random()*301) - 300
		square10.x = Math.floor(Math.random() * 800);
		square10.y = Math.floor(Math.random()*301) - 300
		PlayerWins = 0;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(ball8))
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
		ball6.x = Math.floor(Math.random() * 800);
		ball6.y = Math.floor(Math.random()*301) - 300
		ball7.x = Math.floor(Math.random() * 800);
		ball7.y = Math.floor(Math.random()*301) - 300
		ball8.x = Math.floor(Math.random() * 800);
		ball8.y = Math.floor(Math.random()*301) - 300
		ball9.x = Math.floor(Math.random() * 800);
		ball9.y = Math.floor(Math.random()*301) - 300
		ball10.x = Math.floor(Math.random() * 800);
		ball10.y = Math.floor(Math.random()*301) - 300
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
		square6.x = Math.floor(Math.random() * 800);
		square6.y = Math.floor(Math.random()*301) - 300
		square7.x = Math.floor(Math.random() * 800);
		square7.y = Math.floor(Math.random()*301) - 300
		square8.x = Math.floor(Math.random() * 800);
		square8.y = Math.floor(Math.random()*301) - 300
		square9.x = Math.floor(Math.random() * 800);
		square9.y = Math.floor(Math.random()*301) - 300
		square10.x = Math.floor(Math.random() * 800);
		square10.y = Math.floor(Math.random()*301) - 300
		PlayerWins = 0;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(ball9))
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
		ball6.x = Math.floor(Math.random() * 800);
		ball6.y = Math.floor(Math.random()*301) - 300
		ball7.x = Math.floor(Math.random() * 800);
		ball7.y = Math.floor(Math.random()*301) - 300
		ball8.x = Math.floor(Math.random() * 800);
		ball8.y = Math.floor(Math.random()*301) - 300
		ball9.x = Math.floor(Math.random() * 800);
		ball9.y = Math.floor(Math.random()*301) - 300
		ball10.x = Math.floor(Math.random() * 800);
		ball10.y = Math.floor(Math.random()*301) - 300
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
		square6.x = Math.floor(Math.random() * 800);
		square6.y = Math.floor(Math.random()*301) - 300
		square7.x = Math.floor(Math.random() * 800);
		square7.y = Math.floor(Math.random()*301) - 300
		square8.x = Math.floor(Math.random() * 800);
		square8.y = Math.floor(Math.random()*301) - 300
		square9.x = Math.floor(Math.random() * 800);
		square9.y = Math.floor(Math.random()*301) - 300
		square10.x = Math.floor(Math.random() * 800);
		square10.y = Math.floor(Math.random()*301) - 300
		PlayerWins = 0;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(ball10))
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
		ball6.x = Math.floor(Math.random() * 800);
		ball6.y = Math.floor(Math.random()*301) - 300
		ball7.x = Math.floor(Math.random() * 800);
		ball7.y = Math.floor(Math.random()*301) - 300
		ball8.x = Math.floor(Math.random() * 800);
		ball8.y = Math.floor(Math.random()*301) - 300
		ball9.x = Math.floor(Math.random() * 800);
		ball9.y = Math.floor(Math.random()*301) - 300
		ball10.x = Math.floor(Math.random() * 800);
		ball10.y = Math.floor(Math.random()*301) - 300
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
		square6.x = Math.floor(Math.random() * 800);
		square6.y = Math.floor(Math.random()*301) - 300
		square7.x = Math.floor(Math.random() * 800);
		square7.y = Math.floor(Math.random()*301) - 300
		square8.x = Math.floor(Math.random() * 800);
		square8.y = Math.floor(Math.random()*301) - 300
		square9.x = Math.floor(Math.random() * 800);
		square9.y = Math.floor(Math.random()*301) - 300
		square10.x = Math.floor(Math.random() * 800);
		square10.y = Math.floor(Math.random()*301) - 300
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
	if (player.hitTestObject(square6))
	{
		player.color = "#00FF00"
		square6.x = Math.floor(Math.random() * 800);
		square6.y = Math.floor(Math.random()*301) - 300
		PlayerWins += 1;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(square7))
	{
		player.color = "#00FF00"
		square7.x = Math.floor(Math.random() * 800);
		square7.y = Math.floor(Math.random()*301) - 300
		PlayerWins += 1;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(square8))
	{
		player.color = "#00FF00"
		square8.x = Math.floor(Math.random() * 800);
		square8.y = Math.floor(Math.random()*301) - 300
		PlayerWins += 1;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(square9))
	{
		player.color = "#00FF00"
		square9.x = Math.floor(Math.random() * 800);
		square9.y = Math.floor(Math.random()*301) - 300
		PlayerWins += 1;
		setTimeout(ResetPlayerColor, 500)
	}
	if (player.hitTestObject(square10))
	{
		player.color = "#00FF00"
		square10.x = Math.floor(Math.random() * 800);
		square10.y = Math.floor(Math.random()*301) - 300
		PlayerWins += 1;
		setTimeout(ResetPlayerColor, 500)
	}

	player.move();
	player.drawRect();

	ball.drawCircle();
	ball2.drawCircle();
	ball3.drawCircle();
	ball4.drawCircle();
	ball5.drawCircle();
	ball6.drawCircle();
	ball7.drawCircle();
	ball8.drawCircle();
	ball9.drawCircle();
	ball10.drawCircle();

	square.drawRect();
	square2.drawRect();
	square3.drawRect();
	square4.drawRect();
	square5.drawRect();
	square6.drawRect();
	square7.drawRect();
	square8.drawRect();
	square9.drawRect();
	square10.drawRect();
}

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	states[currentState]();
}

function ResetPlayerColor()
	{
		player.color = "#ffff00"
	}

function callobjects()
	{
		ball = new GameObject();
		ball2 = new GameObject();
		ball3 = new GameObject();
		ball4 = new GameObject();
		ball5 = new GameObject();
		ball6 = new GameObject();
		ball7 = new GameObject();
		ball8 = new GameObject();
		ball9 = new GameObject();
		ball10 = new GameObject();
		square = new GameObject();
		square2 = new GameObject();
		square3 = new GameObject();
		square4 = new GameObject();
		square5 = new GameObject();
		square6 = new GameObject();
		square7 = new GameObject();
		square8 = new GameObject();
		square9 = new GameObject();
		square10 = new GameObject();
	}

function setvalues()
	{
		square.x = Math.floor(Math.random() * 1000);
		square.y = Math.floor(Math.random()*301) - 300;
		square.vx = 4;
		square.vy = -8;
		square.width = 30;
		square.height = 30;
		square.color = "#00FF00";
	
		square2.x = Math.floor(Math.random() * 1000);
		square2.y = Math.floor(Math.random()*301) - 300;
		square2.vx = 4;
		square2.vy = -8;
		square2.width = 30;
		square2.height = 30;
		square2.color = "#00FF00";
	
		square3.x = Math.floor(Math.random() * 1000);
		square3.y = Math.floor(Math.random()*301) - 300;
		square3.vx = 4;
		square3.vy = -8;
		square3.width = 30;
		square3.height = 30;
		square3.color = "#00FF00";
	
		square4.x = Math.floor(Math.random() * 1000);
		square4.y = Math.floor(Math.random()*301) - 300;
		square4.vx = 4;
		square4.vy = -8;
		square4.width = 30;
		square4.height = 30;
		square4.color = "#00FF00";
	
		square5.x = Math.floor(Math.random() * 1000);
		square5.y = Math.floor(Math.random()*301) - 300;
		square5.vx = 4;
		square5.vy = -8;
		square5.width = 30;
		square5.height = 30;
		square5.color = "#00FF00";

		square6.x = Math.floor(Math.random() * 1000);
		square6.y = Math.floor(Math.random()*301) - 300;
		square6.vx = 4;
		square6.vy = -8;
		square6.width = 30;
		square6.height = 30;
		square6.color = "#00FF00";

		square7.x = Math.floor(Math.random() * 1000);
		square7.y = Math.floor(Math.random()*301) - 300;
		square7.vx = 4;
		square7.vy = -8;
		square7.width = 30;
		square7.height = 30;
		square7.color = "#00FF00";

		square8.x = Math.floor(Math.random() * 1000);
		square8.y = Math.floor(Math.random()*301) - 300;
		square8.vx = 4;
		square8.vy = -8;
		square8.width = 30;
		square8.height = 30;
		square8.color = "#00FF00";

		square9.x = Math.floor(Math.random() * 1000);
		square9.y = Math.floor(Math.random()*301) - 300;
		square9.vx = 4;
		square9.vy = -8;
		square9.width = 30;
		square9.height = 30;
		square9.color = "#00FF00";

		square10.x = Math.floor(Math.random() * 1000);
		square10.y = Math.floor(Math.random()*301) - 300;
		square10.vx = 4;
		square10.vy = -8;
		square10.width = 30;
		square10.height = 30;
		square10.color = "#00FF00";
		
		ball.x = Math.floor(Math.random() * 1000);
		ball.y = Math.floor(Math.random()*301) - 300
		ball.vx = 4;
		ball.vy = -8;
		ball.width = 40;
		ball.color = "#FF0000";
	
		ball2.x = Math.floor(Math.random() * 1000);
		ball2.y = Math.floor(Math.random()*301) - 300
		ball2.vx = 4;
		ball2.vy = -8;
		ball2.width = 40;
		ball2.color = "#FF0000";
	
		ball3.x = Math.floor(Math.random() * 1000);
		ball3.y = Math.floor(Math.random()*301) - 300
		ball3.vx = 4;
		ball3.vy = -8;
		ball3.width = 40;
		ball3.color = "#FF0000";
	
		ball4.x = Math.floor(Math.random() * 1000);
		ball4.y = Math.floor(Math.random()*301) - 300
		ball4.vx = 4;
		ball4.vy = -8;
		ball4.width = 40;
		ball4.color = "#FF0000";
	
		ball5.x = Math.floor(Math.random() * 1000);
		ball5.y = Math.floor(Math.random()*301) - 300
		ball5.vx = 4;
		ball5.vy = -8;
		ball5.width = 40;
		ball5.color = "#FF0000";

		ball6.x = Math.floor(Math.random() * 1000);
		ball6.y = Math.floor(Math.random()*301) - 300
		ball6.vx = 4;
		ball6.vy = -8;
		ball6.width = 40;
		ball6.color = "#FF0000";

		ball7.x = Math.floor(Math.random() * 1000);
		ball7.y = Math.floor(Math.random()*301) - 300
		ball7.vx = 4;
		ball7.vy = -8;
		ball7.width = 40;
		ball7.color = "#FF0000";

		ball8.x = Math.floor(Math.random() * 1000);
		ball8.y = Math.floor(Math.random()*301) - 300
		ball8.vx = 4;
		ball8.vy = -8;
		ball8.width = 40;
		ball8.color = "#FF0000";

		ball9.x = Math.floor(Math.random() * 1000);
		ball9.y = Math.floor(Math.random()*301) - 300
		ball9.vx = 4;
		ball9.vy = -8;
		ball9.width = 40;
		ball9.color = "#FF0000";

		ball10.x = Math.floor(Math.random() * 1000);
		ball10.y = Math.floor(Math.random()*301) - 300
		ball10.vx = 4;
		ball10.vy = -8;
		ball10.width = 40;
		ball10.color = "#FF0000";
	}

function MoveObjects()
	{
		ball.y -= ball.vy;
		ball2.y -= ball.vy;
		ball3.y -= ball.vy;
		ball4.y -= ball.vy;
		ball5.y -= ball.vy;
		ball6.y -= ball.vy;
		ball7.y -= ball.vy;
		ball8.y -= ball.vy;
		ball9.y -= ball.vy;
		ball10.y -= ball.vy;
	
		square.y -= square.vy;
		square2.y -= square2.vy;
		square3.y -= square3.vy;
		square4.y -= square4.vy;
		square5.y -= square5.vy;
		square6.y -= square.vy;
		square7.y -= square.vy;
		square8.y -= square.vy;
		square9.y -= square.vy;
		square10.y -= square.vy;
	}

function checkbelow()
	{
		if (ball.y > player.y + ball.height)
		{
			ball.x = Math.floor(Math.random() * 1000);
			ball.y = Math.floor(Math.random()*301) - 300
		}
		if (ball2.y > player.y + ball.height)
		{
			ball2.x = Math.floor(Math.random() * 1000);
			ball2.y = Math.floor(Math.random()*301) - 300
		}
		if (ball3.y > player.y + ball.height)
		{
			ball3.x = Math.floor(Math.random() * 1000);
			ball3.y = Math.floor(Math.random()*301) - 300
		}
		if (ball4.y > player.y + ball.height)
		{
			ball4.x = Math.floor(Math.random() * 1000);
			ball4.y = Math.floor(Math.random()*301) - 300
		}
		if (ball5.y > player.y + ball.height)
		{
			ball5.x = Math.floor(Math.random() * 1000);
			ball5.y = Math.floor(Math.random()*301) - 300
		}
		if (ball6.y > player.y + ball.height)
		{
			ball6.x = Math.floor(Math.random() * 1000);
			ball6.y = Math.floor(Math.random()*301) - 300
		}
		if (ball7.y > player.y + ball.height)
		{
			ball7.x = Math.floor(Math.random() * 1000);
			ball7.y = Math.floor(Math.random()*301) - 300
		}
		if (ball8.y > player.y + ball.height)
		{
			ball8.x = Math.floor(Math.random() * 1000);
			ball8.y = Math.floor(Math.random()*301) - 300
		}
		if (ball9.y > player.y + ball.height)
		{
			ball9.x = Math.floor(Math.random() * 1000);
			ball9.y = Math.floor(Math.random()*301) - 300
		}
		if (ball10.y > player.y + ball.height)
		{
			ball10.x = Math.floor(Math.random() * 1000);
			ball10.y = Math.floor(Math.random()*301) - 300
		}
		if (square.y > player.y + square.height)
		{
			square.x = Math.floor(Math.random() * 1000);
			square.y = Math.floor(Math.random()*301) - 300
		}
		if (square2.y > player.y + square2.height)
		{
			square2.x = Math.floor(Math.random() * 1000);
			square2.y = Math.floor(Math.random()*301) - 300
		}
		if (square3.y > player.y + square3.height)
		{
			square3.x = Math.floor(Math.random() * 1000);
			square3.y = Math.floor(Math.random()*301) - 300
		}
		if (square4.y > player.y + square4.height)
		{
			square4.x = Math.floor(Math.random() * 1000);
			square4.y = Math.floor(Math.random()*301) - 300
		}
		if (square5.y > player.y + square5.height)
		{
			square5.x = Math.floor(Math.random() * 1000);
			square5.y = Math.floor(Math.random()*301) - 300
		}
		if (square6.y > player.y + square.height)
		{
			square6.x = Math.floor(Math.random() * 1000);
			square6.y = Math.floor(Math.random()*301) - 300
		}
		if (square7.y > player.y + square.height)
		{
			square7.x = Math.floor(Math.random() * 1000);
			square7.y = Math.floor(Math.random()*301) - 300
		}
		if (square8.y > player.y + square.height)
		{
			square8.x = Math.floor(Math.random() * 1000);
			square8.y = Math.floor(Math.random()*301) - 300
		}
		if (square9.y > player.y + square.height)
		{
			square9.x = Math.floor(Math.random() * 1000);
			square9.y = Math.floor(Math.random()*301) - 300
		}
		if (square10.y > player.y + square.height)
		{
			square10.x = Math.floor(Math.random() * 1000);
			square10.y = Math.floor(Math.random()*301) - 300
		}
	}



