const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bin,binImg,groundObj,paper,paperImg;	
var world,engine;




function setup() {
	createCanvas(1000, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObj = new ground(width/2,670,width,20);
    paper = new Paper();
	 
	bin = new dustbin(1200,650);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObj.display();
  bin.display();
  paper.display();

}
