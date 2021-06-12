const Engine = Matter.Engine; //Namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;

function setup() {
  createCanvas(400,400);
 engine=Engine.create();// a 'world' is created by default
 world=engine.world;

 ground=new Ground();

 box1 = new Box(200,50,50,70);

 box2 = new Box(220, -20, 50, 70)
}


function draw() {
  background("black"); 
  Engine.update(engine);
ground.display();
box1.display();
box2.display();
}

