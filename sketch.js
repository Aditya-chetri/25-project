

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;



function preload()
{

}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  
  platform = new Ground(400, 680, 800, 40);
  paper = new Ball(100, 672, 35, 35);
  part1 = new BottomPart(550, 700, 140, 85);
  part2 = new DustbinPart(550, 620, 10, 80);
  part3 = new DustbinPart(690, 620, 10, 80);
  
}

function draw() {
  background(250);
  platform.display();
  part2.display();
  part3.display();
  paper.display();
  part1.display();
  
  drawSprites();
}
function keyPressed(){ 
  if(keyCode === UP_ARROW){ 
    Matter.Body.applyForce(paper.body, paper.body.position, {x: 160, y: -200}); 
  } 
}



