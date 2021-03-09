
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

	bobObject1= new Bob(400,350,10,10);
	bobObject2= new Bob(410,350,10,10)
	bobObject3= new Bob(420,350,10,10)
	bobObject4= new Bob(430,350,10,10)
	bobObject5= new Bob(440,350,10,10)
    roof=new Roof(400,150,)
    rope1=new rope(bobObject.body,bobDianeter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display()
  bobObject1.display()
  bobObject1.display()
  bobObject1.display()
  bobObject1.display()
  roof.display()
	roop.display  ()
 
  drawSprites();
 
}



