const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball,ground;
var box1,box2;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(200,200,25,25);
  box2 = new Box(200,300,25,25);


  
 
}

function draw() {
  background(0); 
  Engine.update(engine); 
  box1.display()
  box2.display()
 
}