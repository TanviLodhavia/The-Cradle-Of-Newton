var roof,rope1;
var bob1,bob2,bob3,bob4,bob5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);

  roof = new Roof(400,150,400,50); 
  bob1 = new Bob(260,450); 
  bob2 = new Bob(330,450);
  bob3 = new Bob(400,450);
  bob4 = new Bob(470,450);
  bob5 = new Bob(540,450);
  rope1= new Rope(bob1.body,roof.body,-bobDiameter*2,0);
  
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  
  drawSprites();
 
}



