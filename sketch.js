
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine ,world
var bottom,side1,side2

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;
 
	
  bottom = new Dustbin(610, 660, 100, 20);

  side1 = new Dustbin(550, 620, 20, 100);

  side2 = new Dustbin(670, 620, 20, 100);
 
  paper = new Paper(100,600,10)

  ground = new Ground(400,680,800,20)

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  bottom.display()
  side1.display()
  side2.display()
paper.display()
ground.display()
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x:7, y: -7})
  }
}

