var roof,rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

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
  rope1= new Rope(bob1.body,roof.body,-70*2,0);
  rope2= new Rope(bob2.body,roof.body,-35*2,0);
  rope3=new Rope(bob3.body,roof.body,0*2,0);
  rope4=new Rope(bob4.body,roof.body,35*2,0);
  rope5 = new Rope(bob5.body,roof.body,70*2,0);
 
  
}


function draw() {
  rectMode(CENTER);
  background(5,5,55);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed() { if (keyCode === UP_ARROW) { 
	//Matter.Body.setStatic(paperBall,false); 
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-60,y:-40}); } }




