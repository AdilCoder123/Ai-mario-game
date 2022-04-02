function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	gameover_mario=loadSound("gameover.wav");
	mario_die=loadSound("mariodie.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_console");
	posenet=ml5.poseNet(video,modelloaded);
	posenet.on('pose',gotPoses);
}

 function modelloaded()
{
	console.log("checking the model")
}
function gotPoses(result)
{
	if (result.length > 0)
{
noseX= result[0].pose.nose.x;
noseY=result[0].pose.nose.y;
console.log(result);
}
}
function draw() {
	game()
}






