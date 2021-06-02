var a = false;
var p = false;
var s = false;
var d = false;
var w = false;
var up = false;
var down = false;
var space = false;


document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

function press(e)
{
	//---This logs key codes into the browser's console.
	console.log(e.keyCode);

	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 65)
	{
		a = true;
	}
	if(e.keyCode == 38)
	{
		up = true;
	}

	if(e.keyCode == 40)
	{
		down = true;
	}
	if(e.keyCode == 80)
	{
		p = !p
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
	if(e.keyCode == 68)
	{
		d = true;
	}
	if(e.keyCode == 32)
	{
		space = true;
	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log(e.keyCode);

	if(e.keyCode == 65)
	{
		a = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
	}
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 32)
	{
		space = false;
	}
	if(e.keyCode == 38)
	{
		up = false;
	}

	if(e.keyCode == 40)
	{
		down = false;
	}
}
