 
canvas= document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;
var background_img1 ="parkingLot.jpg";
var greencar_img1 = "car2.png";

//Set initial position for a car image.
greencar_x = 5;
greencar_y = 225;
function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_img1;

	greencar_imgTag= new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_img1;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("whenn up arrow is pressed, x = "+ greencar_x +" | y =" +greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_y <=300)
	{
		greencar_y = greencar_y + 10;
		console.log("when down arrow is pressed, x = "- greencar_x -" | y =" -greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greencar_x > 0)
		{
			greencar_x = greencar_x - 10;
			console.log("when left arrow is pressed, x = "- greencar_x -" | y =" -greencar_y);
			uploadBackground();
			uploadgreencar();
		}
		//Define function to move the car left side
	console.log("inside left");
}

function right()
{
	if(greencar_x <=800)
		{
			greencar_x = greencar_x + 10;
			console.log("when right arrow is pressed, x = "- greencar_x -" | y =" -greencar_y);
			uploadBackground();
			uploadgreencar();
		}
	//Define function to move the car right side
	console.log("inside right");
}