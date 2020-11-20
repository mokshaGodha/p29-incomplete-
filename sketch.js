const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground1, ground2;
function setup() {
  createCanvas(1200,600);
  engine=Engine.create()
  world=engine.world;
  ground=new Ground(600,400,250,10)
  ground2=new Ground(1000, 290, 250,10)

  box=new Box(100,390,30,10)

}

function draw() {
  background(0);  
  drawSprites();
  ground.display();
  ground2.display();
  box.display();
}