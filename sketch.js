
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var leftside;
var rightside;
var groundObj;
var world
var radius=40



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball= Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	groundObj= new ground(width/2,670,width,20);
	leftside = new ground(1100,600,20,120);
	rightside = new ground(1300,600,20,120);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  fill("red");
 	textSize(40);
  	text("USE UP ARROW TO SHOOT THE PAPER BALL", width / 6, 90);

  ellipse(ball.position.x,ball.position.y,radius,radius)

  groundObj.display();
  leftside.display();
  rightside.display();
 
}

function keyPressed() {
	
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,ball.position, {x:85,y:-85})
	}

	
	
}

 

