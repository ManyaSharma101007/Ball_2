var paperSprite;
var paperBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  
}

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperBody = new Paper(50 , 600 , 15);
	
	//Create a Ground
	ground =new Ground(width/2, 650, width, 10);

	baseBody = new Basket(712,640,130,20);
	rightBody = new Basket(775,600,10,150);
	leftBody = new Basket(650,600,10,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
 Engine.update(engine)
 // rightBody.display();
  //leftBody.display();
  baseBody.display();
  ground.display();
  paperBody.display();

 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x : 10, y : -9});
    
  }
}



