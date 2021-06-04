var canvas = document.getElementById("canvas");
	canvas.addEventListener("mousemove", track);
	canvas.addEventListener("click", startGame);
	canvas.addEventListener("click", Instructions);
	
var context = canvas.getContext("2d");

var image = document.getElementById('image')

var interval = 1000/60;
var timer = setInterval(animate, interval);

var mouse = {x:0,y:0};

var currentState ="play2";
var states = [];
var balls = [];
var squares = [];
var numBalls = 10;
var numSquares = 10;
var randomColor = Math.floor(Math.random()*16777215).toString(16);
var vy = 10;

player2 = new GameObject({x:100, y:canvas.height/2-100});

player3 = new GameObject();
player4 = new GameObject();
player3.x = 100;
player4.x = 900;
player3.width = 25;
player4.width = 25;
ball = new GameObject();
ball.width = 30;
ball.vx = 4;
ball.vy = -4;

player5 = new GameObject();
player5.x = canvas.width/2;
player5.width = 250;
player5.height = 40;
player5.y = 750;
player5.color = "#00ffff";
ball2 = new GameObject();

platform0 = new GameObject();
platform0.width = canvas.width-300;
platform0.x = platform0.width/2;
platform0.color = "#66ff33";
		
	
platform1 = new GameObject();
platform1.x = 500;
platform1.y = platform0.y- platform0.height/2 - platform1.height/2;
platform1.color = "#ffff00";
		
platform2 = new GameObject();
platform2.width = canvas.width-300;
platform2.x = platform0.width/2;
platform2.color = "#66ff33";
platform2.y = platform0.y- 200;
platform2.color = "#66ff33";

var goal = new GameObject({width:24, height:50, x:20, y:platform0.y-100, color:"#00ffff"});
var goal2 = new GameObject({width:24, height:50, x:650, y:platform0.y-100, color:"#00ffff"});

player = new GameObject();
var dot = new GameObject({width:100, height:100, color:"black"})
var dot2 = new GameObject({width:100, height:100, color:"black"})

callobjects();

dot.y = 650;
dot.x = 200;
dot2.y = 650;
dot2.x = 800;

var fX = .85;
var fY = .97;

var Score = 0;
var Score2 = 0;
var score = 0;

var startX = player.x;
var startY = player.y;

var gravity = 1;

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

	context.drawImage(asteroid2,110,590,dot.width + 80,dot.height + 20)

	context.drawImage(asteroid2,710,590,dot2.width + 80,dot2.height + 10)

	context.save();
		context.fillStyle = "white";
		context.font = "bold 58px Arial"
		context.textAlign = "center";
		context.fillText("Space Destroyer", canvas.width/2, canvas.height/2-350)
		context.font = "bold 20px Arial"
		context.fillText("Ryan Bell", canvas.width/2, canvas.height/2-310)
		context.fillStyle = "white";
		context.font = "bold 58px Arial"
		context.textAlign = "center";
		context.fillStyle = "white";
		context.fillText("Click either asteroid to begin.", canvas.width/2, canvas.height/1.5-450/4)
		context.font = "bold 40px Arial"
		context.fillStyle = "white";
		context.fillText("Play", 200, 580)
		context.font = "bold 40px Arial"
		context.fillStyle = "white";
		context.fillText("Instructions", 800, 580)
	context.restore();
}

states["instructions"] = function()
{
	context.drawImage(image,0,0,canvas.width,canvas.height)

	context.drawImage(asteroid2,420,600,dot.width + 70,dot.height + 10)

context.save();
	context.font = "bold 40px Arial"
	context.fillStyle = "white";
	context.fillText("Instructions:", canvas.width/2-400, canvas.height/2 - 360)
	context.fillText("Beat each game to progress.", canvas.width/2-150, canvas.height/2 - 360)
	context.strokeStyle = 'black';
	context.lineWidth = 10;
	//Lines
	context.beginPath();
	context.moveTo(0, 60);
	context.lineTo(1000, 60);
	context.stroke();
	context.moveTo(canvas.width/2, 60);
	context.lineTo(canvas.width/2, 535);
	context.stroke();
	context.moveTo(0, 535);
	context.lineTo(1000, 535);
	context.stroke();
	context.moveTo(0, 300);
	context.lineTo(1000, 300);
	context.stroke();
	//Game 1 Instructions
	context.font = "bold 20px Arial"
	context.fillStyle = "white";
	context.fillText("Game 1", 5, 90)
	context.fillText("-A and D to move.", 30, 140)
	context.fillText("-P to pause.", 30, 170)
	context.fillText("-Hit the emeralds.", 30, 200)
	context.fillText("-Avoid asteroids.", 30, 230)
	context.fillText("-Get 30 points to win.", 30, 260)
	//Game 2 Instructions
	context.font = "bold 20px Arial"
	context.fillText("Game 2", 510, 90)
	context.fillText("-A and D to move.", 535, 140)
	context.fillText("-Space to change color.", 535, 170)
	context.fillText("-Get both pearls.", 535, 200)
	context.fillText("-Open the door.", 535, 230)
	//Game 3 Instructions
	context.font = "bold 20px Arial"
	context.fillText("Game 3", 5, 330)
	context.fillText("-W and S to move left player.", 30, 380)
	context.fillText("-Up and Down arrow to move right player.", 30, 410)
	context.fillText("-Don't let the ball pass you.", 30, 440)
	context.fillText("-First player to 5 wins.", 30, 470)
	//Game 4 Instructions
	context.font = "bold 20px Arial"
	context.fillText("Game 4", 510, 330)
	context.fillText("-A and D to move.", 535, 380)
	context.fillText("-S to slow down the ball.", 535, 410)
	context.fillText("-Don't let ball hit bottom of screen.", 535, 440)
	context.fillText("-Get 20 points to win.", 535, 470)

context.restore();

	context.font = "bold 40px Arial"
	context.fillStyle = "white";
	context.fillText("Play", 460, 580)

	dot.x = 500;

}

states["play"] = function()
{

	checkbelow();

	context.drawImage(image,0,0,canvas.width,canvas.height)
	context.drawImage(ship,player.x - 35,player.y - 50,player.width-25 + 50,player.height + 50)

	for(var i = 0; i < numBalls; i++)
	{
		context.drawImage(asteroid, balls[i].x - 25, balls[i].y - 60, ball.width + 20, ball.height)
	}

	for(var i = 0; i < numSquares; i++)
	{
		context.drawImage(emerald, squares[i].x - 25, squares[i].y - 10, 50, 50)
	}


	context.save();
		context.fillStyle = "white";
		context.font = "30px Arial"
		context.fillText("Score: ", 25, 40)
		context.fillText("Earn 30 points to win!", 700, 40)
		context.fillText(Score, 120, 40)
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
		for (var i = 0; i < numBalls && numSquares; i++)
		{
			balls[i].ay = 0;
			squares[i].ay = 0;
			balls[i].vy *= 0
			squares[i].vy *= 0
		}
		player.vx *= 0;
	}
	if(p == false)
	{

		for (var i = 0; i < numBalls && numSquares; i++)
		{
			balls[i].ay = 1;
			squares[i].ay = 1;
		}
		player.vx *= .95;
	}

	for (var i = 0; i < numBalls && numSquares; i++)
	{
		if (player.hitTestObject(balls[i]))
		{
			player.color = "#FF0000"
			balls[0].x = Math.floor(Math.random() * 800);
			balls[0].y = Math.floor(Math.random()*301) - 300;
			balls[1].x = Math.floor(Math.random() * 800);
			balls[1].y = Math.floor(Math.random()*301) - 300;
			balls[2].x = Math.floor(Math.random() * 800);
			balls[2].y = Math.floor(Math.random()*301) - 300;
			balls[3].x = Math.floor(Math.random() * 800);
			balls[3].y = Math.floor(Math.random()*301) - 300;
			balls[4].x = Math.floor(Math.random() * 800);
			balls[4].y = Math.floor(Math.random()*301) - 300;
			balls[5].x = Math.floor(Math.random() * 800);
			balls[5].y = Math.floor(Math.random()*301) - 300;
			balls[6].x = Math.floor(Math.random() * 800);
			balls[6].y = Math.floor(Math.random()*301) - 300;
			balls[7].x = Math.floor(Math.random() * 800);
			balls[7].y = Math.floor(Math.random()*301) - 300;
			balls[8].x = Math.floor(Math.random() * 800);
			balls[8].y = Math.floor(Math.random()*301) - 300;
			balls[9].x = Math.floor(Math.random() * 800);
			balls[9].y = Math.floor(Math.random()*301) - 300;
			squares[0].x = Math.floor(Math.random() * 800);
			squares[0].y = Math.floor(Math.random()*301) - 300;
			squares[1].x = Math.floor(Math.random() * 800);
			squares[1].y = Math.floor(Math.random()*301) - 300;
			squares[2].x = Math.floor(Math.random() * 800);
			squares[2].y = Math.floor(Math.random()*301) - 300;
			squares[3].x = Math.floor(Math.random() * 800);
			squares[3].y = Math.floor(Math.random()*301) - 300;
			squares[4].x = Math.floor(Math.random() * 800);
			squares[4].y = Math.floor(Math.random()*301) - 300;
			squares[5].x = Math.floor(Math.random() * 800);
			squares[5].y = Math.floor(Math.random()*301) - 300;
			squares[6].x = Math.floor(Math.random() * 800);
			squares[6].y = Math.floor(Math.random()*301) - 300;
			squares[7].x = Math.floor(Math.random() * 800);
			squares[7].y = Math.floor(Math.random()*301) - 300;
			squares[8].x = Math.floor(Math.random() * 800);
			squares[8].y = Math.floor(Math.random()*301) - 300;
			squares[9].x = Math.floor(Math.random() * 800);
			squares[9].y = Math.floor(Math.random()*301) - 300;
			balls[i].vy = 0
			squares[i].vy = 0
			Score = 0;
			setTimeout(ResetPlayerColor, 500)
		}

		if (player.hitTestObject(squares[i]))
		{
			player.color = "#00FF00"
			squares[i].x = Math.floor(Math.random() * 800);
			squares[i].y = Math.floor(Math.random()*301) - 300
			squares[i].vy = 0
			Score += 1;
			setTimeout(ResetPlayerColor, 500)
		}
	}

	if (Score >= 30)
	{
		Score = 0;
		changeStates("play2");
	}

	player.move();
	//player.drawRect();
	console.log(balls[0])
	for(var i = 0; i < numBalls; i++)
	{
		balls[i].vy += balls[i].ay
		balls[i].vy *= 0.9

		balls[i].vx = 0
		balls[i].move()
		//balls[i].drawCircle();
	}
	for(var i = 0; i < numSquares; i++)
	{
		squares[i].vy += squares[i].ay
		squares[i].vy *= 0.9
		squares[i].vx = 0
		squares[i].move()
		//squares[i].drawRect();
	}
}

states["play2"] = function()
{

	context.drawImage(image,0,0,canvas.width,canvas.height)

	context.drawImage(pearl,goal.x - 10,goal.y - 15,goal.width,goal.height - 20)

	context.drawImage(pearl,goal2.x - 15,goal2.y - 13,goal2.width,goal2.height - 25)

	context.save();
		context.fillStyle = "white";
		context.font = "30px Arial"
		context.fillText("Get both pearls to proceed.", canvas.width/2-170, 40)
		context.color = "#555555";
	context.restore();


	if(w && player2.canJump && player2.vy ==0)
	{
		player2.canJump = false;
		player2.vy += player2.jumpHeight;
	}

	if(a)
	{
		player2.vx += -player2.ax * player2.force;
	}
	if(d)
	{
		player2.vx += player2.ax * player2.force;
	}
	if (space)
	{
		player2.color = "#" + randomNumberforColor();
	}

	player2.vx *= fX;
	player2.vy *= fY;
	
	//player2.vy += gravity;
	
	player2.x += Math.round(player2.vx);
	player2.y += Math.round(player2.vy);
	
	platform1.x += platform1.vx;

	while(platform0.hitTestPoint(player.bottom()) && player2.vy >=0)
	{
		player2.y--;
		player2.vy = 0;
		player2.canJump = true;
	}
	while(platform0.hitTestPoint(player2.left()) && player2.vx <=0)
	{
		player2.x++;
		player2.vx = 0;
	}
	while(platform0.hitTestPoint(player2.right()) && player2.vx >=0)
	{
		player2.x--;
		player2.vx = 0;
	}
	while(platform0.hitTestPoint(player2.top()) && player2.vy <=0)
	{
		player2.y++;
		player2.vy = 0;
	}
	while(platform2.hitTestPoint(player2.top()) && player2.vy <=0)
	{
		player2.y++;
		player2.vy = 0;
	}
	while(platform2.hitTestPoint(player2.bottom()) && player2.vy >=0)
	{
		player2.y--;
		player2.vy = 0;
		player2.canJump = true;
	}
	while(platform2.hitTestPoint(player2.left()) && player2.vx <=0)
	{
		player2.x++;
		player2.vx = 0;
	}
	while(platform2.hitTestPoint(player2.right()) && player2.vx >=0)
	{
		player2.x--;
		player2.vx = 0;
	}
	while(platform1.hitTestPoint(player2.top()) && player2.vy <=0)
	{
		player2.y++;
		player2.vy = 0;
	}
	while(platform1.hitTestPoint(player2.bottom()) && player2.vy >=0)
	{
		player2.y--;
		player2.vy = 0;
		player2.canJump = true;
	}
	while(platform1.hitTestPoint(player2.left()) && player2.vx <=0)
	{
		player2.x++;
		player2.vx = 0;
	}
	
	if(player2.hitTestObject(goal))
	{
		goal.y = 10000;
	}

	if(player2.hitTestObject(goal2))
	{
		goal2.y = 10000;
		changeStates("play3");
	}
	
	if(platform1.hitTestPoint(player2.right()) && player2.vx >=0 && goal.y >= 10000)
	{
		player2.x--;
		player2.vx = 0;
		platform1.color = "#fffff"
		platform1.y = 10000;
	}
	else if(platform1.hitTestPoint(player2.right()) && player2.vx >=0)
	{
		player2.x--;
		player2.vx = 0;
	}
	
	platform0.drawRect();
	platform2.drawRect();
	platform1.drawRect();
	player2.drawRect();
	
	//Show hit points
	//player2.drawDebug();
}

states["play3"] = function()
{
	context.drawImage(image,0,0,canvas.width,canvas.height)

	ball.x += ball.vx;
	ball.y += ball.vy;

	context.save();
	context.strokeStyle = "#FF0000"
	context.beginPath();
	context.moveTo(canvas.width/2, 0);
	context.lineTo(canvas.width/2, canvas.height);
	context.closePath();
	context.lineWidth = 4;
	context.stroke();
	context.restore();





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
		Score2 +=  1;
		console.log(Score);
		ball.x = canvas.width/2
		ball.y = canvas.height/2
	}

	if (ball.x < canvas.width/2 - 490)
	{
		Score +=  1;
		console.log(Score2);
		ball.x = canvas.width/2
		ball.y = canvas.height/2
	}
	
	//Move the Player to the up
	if(w)
	{
		player3.vy = -vy;
		
		if (player3.y < 50)
		{
			player3.y = canvas.height - 50;
		}
	}
	
	else if(s)
	{
		player3.vy = vy;

		if (player3.y > canvas.height - 50)
		{
			player3.y = 50;
		}
	}
	else
	{
		player3.vy = 0;
	}

	//Player 2 movement
	if(up)
	{
		player4.vy = -vy;
		
		if (player4.y < 50)
		{
			player4.y = canvas.height - 50;
		}
	}
	
	else if(down)
	{
		player4.vy = vy;

		if (player4.y > canvas.height - 50)
		{
			player4.y = 50;
		}
	}
	else
	{
		player4.vy = 0;
	}

	if (ball.hitTestObject(player3))
	{
		if(ball.y < player3.y - player3.height/6)
		{
			ball.vx = 8;
			ball.vy = -10;
		}
		else if(ball.y > player3.y + player3.height/6)
		{
			ball.vx = 8;
			ball.vy = 10;
		}
		else
		{
			ball.vx = 4;
			ball.vy = 0;
		}
	}

	if (ball.hitTestObject(player4))
	{
		if(ball.y < player4.y - player4.height/6)
		{
			ball.vx = -6;
			ball.vy = -10;
		}
		else if(ball.y > player4.y + player4.height/6)
		{
			ball.vx = -6;
			ball.vy = 10;
		}
		else
		{
			ball.vx = -4;
			ball.vy = 0;
		}
	}

	//Draws score to the screen
	context.fillStyle = "white";
	context.font = "20px Georgia";
	context.fillText(Score, 546, 50);
	context.font = "20px Georgia";
	context.fillText(Score2, 466, 50);
	context.font = "20px Georgia";
	context.fillText("Player 1 | Player 2", 435, 20);
	context.font = "20px Georgia";
	context.fillText("Earn 5 points to win.", 800,20)
	context.fillText("-", 508, 50);

	if (Score >= 5)
	{
		changeStates("play4");
	}
	if (Score2 >= 5)
	{
		changeStates("play4");
	}
	

	//Update the Screen
	player3.move();
	player4.move();
	player3.drawRect();
	player4.drawRect();
	ball.drawCircle();

}

states["play4"] = function()
{
	context.drawImage(image,0,0,canvas.width,canvas.height)


	context.font = "20px Arial"
	context.fillStyle = "white";
	context.fillText("Score: ", 50, 50)
	context.fillText(score, 125, 50)
	context.fillText("Get 20 hits in a row to win.", 720, 50)
	context.color = "#555555";

	//Moves the ball
	//ball.x += ball.vx;
	ball2.y += ball2.vy;

	ball2.vy += gravity;

	if (ball2.y < 0 + 50)
	{
		ball2.vy = -ball2.vy
	}

	if (ball2.x > canvas.width - 50)
	{
		ball2.vx = -ball2.vx
		ball2.x = canvas.width -50;
	}

	if (ball2.x < canvas.width - 1024 + 50)
	{
		ball2.vx = -ball2.vx
		ball2.x = canvas.width - 1024 + 50
	}

	if (ball2.y > canvas.height -50)
	{
		score = 0;
		ball2.vy = -ball2.vy * .67
		ball2.vx = -ball2.vx * .67
		ball2.y = canvas.height - 50
	}

	if (score >= 20)
	{
		changeStates("win");
	}
	
	//Move the Player left
	if(a)
	{
		player5.vx += -1;
	}
	if (player5.x < -120 + player5.width)
	{
		player5.x = -120 + player5.width;
	}
	
	//Move the Player right
	if(d)
	{
		player5.vx += 1 * 1;
	}
	if (player5.x > 1144 - player5.width)
	{
		player5.x = 1144 - player5.width;
	}
	if (s)
	{
		gravity = .25
		ball2.vy += gravity;
	}
	else
	{
		gravity = 1;
	}

	player5.vx *= .95;

	if (ball2.hitTestObject(player5))
	{
		score++;
		ball2.vy = -20;
		if(ball2.x < player5.x - player5.width/6)
		{
			ball2.vx = -10;

		}
		else if(ball2.x > player5.x + player5.width/6)
		{
			ball2.vx = 10;
		}
		else
		{
			ball2.vx = 0;
			
		}
	}

	//Update the Screen
	player5.move();
	ball2.move();
	player5.drawRect();
	ball2.drawCircle();

	context.moveTo(player5.x, player5.y)
	context.lineTo(ball2.x, ball2.y);
	context.stroke();
}

states["win"] = function()
{
	context.drawImage(image,0,0,canvas.width,canvas.height)

	context.save();
		context.fillStyle = "black";
		context.font = "bold 60px Arial"
		context.textAlign = "center";
		context.fillRect(0, canvas.height/2-100,canvas.width, 200);
		context.fillStyle = "white";
		context.fillText("You beat all the games.", canvas.width/2, canvas.height/2)
		context.fillText("Returning to menu...", canvas.width/2, canvas.height/2+(200/4))
	context.restore();

	setTimeout(function(){currentState = "start"}, 3000)
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
		for(var i = 0; i< numBalls; i++)
		{
			balls[i] = new GameObject();
			balls[i].x = Math.floor(Math.random() * 1000);
			balls[i].y = Math.floor(Math.random()*301) - 300
			//balls[i].vx = 4;
			//balls[i].vy = -8;
			balls[i].width = 40;
			balls[i].color = "#FF0000";
		}
		for(var j = 0; j< numSquares; j++)
		{
			squares[j] = new GameObject();
			squares[j].x = Math.floor(Math.random() * 1000);
			squares[j].y = Math.floor(Math.random()*301) - 300
			//squares[j].vx = 4;
			//squares[j].vy = -8;
			squares[j].width = 40;
			squares[j].height = 40;
			squares[j].color = "#00FF00";
		}
		player.x = canvas.width/2;
		player.y = 750;
		player.width = 50;
		player.height = 50;
		player.color = "#ffff00";
	}

function checkbelow()
	{

		for (var i =0; i < 10; i++)
		{
			if (balls[i].y > player.y + balls[i].height)
			{
				balls[i].x = Math.floor(Math.random() * 1000);
				balls[i].y = Math.floor(Math.random()*301) - 300
				balls[i].vy = 0
			}

			if (squares[i].y > player.y + squares[i].height)
			{
				squares[i].x = Math.floor(Math.random() * 1000);
				squares[i].y = Math.floor(Math.random()*301) - 300
				squares[i].vy = 0
			}
		}
	}
function randomNumberforColor(){
	return Math.floor(Math.random()*16777215).toString(16);
}



