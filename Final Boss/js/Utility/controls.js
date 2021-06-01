var a = false;
var p = false;
var d = false;


document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

function press(e)
{
	//---This logs key codes into the browser's console.
	console.log(e.keyCode);

	if(e.keyCode == 65)
	{
		a = true;
	}
	if(e.keyCode == 80)
	{
		p = !p
	}
	if(e.keyCode == 68)
	{
		d = true;
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
}
