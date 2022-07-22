var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

}

// Add an event listener and call the required function
window.addEventListener("keydown", my_keydown);

// Define the my_keydown function
function my_keydown(e) {
keypressed = e.keyCode;
console.log(keypressed);



// Check if the SHIFT and P keys are pressed together
if(e.shiftKey == true && keypressed == "80") {
	console.log("P and shift key pressed tpogether");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
	console.log("size of the block has be increased");
}







// Check if the SHIFT and M keys are pressed together
if(e.shiftKey == true && keypressed == "77") {
	console.log("M and shift key pressed tpogether");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
	console.log("size of the block has be decressed");
}







    // Check if the key value is equal to the UP arrow key value 38
    if(keypressed == "38") {
		up();
		console.log("up arrow is pressed");
	}
	
	// Check if the key value is equal to the DOWN arrow key value 40
	if(keypressed == "40") {
		down();
		console.log("down arrow is pressed");
	}
	



	// Check if the key value is equal to the LEFT arrow key value 37
	if(keypressed == "37") {
		left();
		console.log("left arrow is pressed");
	}




	// Check if the key value is equal to the RIGHT arrow key value 39
	if(keypressed == "39") {
		right();
		console.log("right arrow is pressed");
	}




	// Check if the key value is equal to the 'W' key value 87
	if(keypressed == "87") {
		new_image ("wall.jpg");
		console.log("W");
	}




	// Check if the key value is equal to the 'G' key value 71
	if(keypressed == "71") {
		new_image ("ground.png");
		console.log("G");
	}




	// Check if the key value is equal to the 'L' key value 76
	if(keypressed == "76") {
		new_image ("light_green.png");
		console.log("L");
	}




	// Check if the key value is equal to the 'T' key value 84
	if(keypressed == "84") {
		new_image ("trunk.jpg");
		console.log("T");
	}




	// Check if the key value is equal to the 'R' key value 82
	if(keypressed == "82") {
		new_image ("roof.jpg");
		console.log("R");
	}

	if(keypressed == "") {
		new_image ("beacon.png");
		console.log("b");
	}




	// Check if the key value is equal to the 'Y' key value 89
	if(keypressed == "89") {
		new_image ("yellow_wall.png");
		console.log("Y");
	}




	// Check if the key value is equal to the 'D' key value 68
	if(keypressed == "68") {
		new_image ("dark_green.png");
		console.log("D");
	}




	// Check if the key value is equal to the 'U' key value 85
	if(keypressed == "85") {
		new_image ("unique.png");
		console.log("U");
	}




	// Check if the key value is equal to the 'C' key value 67
	if(keypressed == "67") {
		new_image ("cloud.jpg");
		console.log("C");
	}
    if(keypressed == "66") {
		new_image ("beacon.png");
		console.log("b");
	}
	
    if(keypressed == "65") {
		new_image ("A.png");
		console.log("a");
	}





// Function to move the player up when UP arrow key is pressed
}
function up() {
	if(player_y >= 0) {
		player_y = player_y - block_image_height;
		console.log("block_image_height = " + block_image_height );
		console.log("when up arrow is pressed, x =" + player_x +"y = "+ player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function down() {
	if(player_y <= 500 ) {
		player_y = player_y + block_image_height;
		console.log("block_image_height = " + block_image_height );
		console.log("when up arrow is pressed, x =" + player_x +"y = "+ player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function left() {
	if(player_x >= 0) {
		player_x = player_x - block_image_width;
		console.log("block_image_width = " + block_image_width );
		console.log("when up arrow is pressed, x =" + player_x +"y = "+ player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function  right() {
	if(player_x <= 850) {
		player_x = player_x + block_image_width;
		console.log("block_image_width = " + block_image_width );
		console.log("when up arrow is pressed, x =" + player_x +"y = "+ player_y);
		canvas.remove(player_object);
		player_update();
	}
}