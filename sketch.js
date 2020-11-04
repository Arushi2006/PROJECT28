var ground,tree,stone,boy,mango,elastic;
var m1,m2,m3,m4,m5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  boy=loadImage("FRUITS/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(750,350,20,5);
	tree=new Tree(230,400,80,70);
  stone=new Stone(230,40,78,90);
  mango=new Mango(300,50,40,89);
  elastic=new Elastic(300,40,8,60);
  m1=new Mango(300,500,30,50);
  m2=new Mango(300,400,30,50);
  m3=new Mango(399,300,30,40);
  m4=new Mango(299,399,40,90);
  m5=new Mango(100,300,40,50);

	//Create the Bodies Here.
   this.boy=Bodies.rectangle(200,40,78,90);
   World.add(world,this.boy);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  tree.display();
  stone.display();
  boy.display();
  mango.display();
  elastic.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
}
function mouseDragged()
{
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
 elastic.fly();
}

function detectcollision(stone,mamgo)
{
  mangoBodyPosition=mango.body.setPosition;
  stoneBodyPosition=stone.body.position;
  
  var distance=dist(stoneBodyPosition.x,stoneBody.position.y,mangoBodyPosition.y)
  {
    if(distance<-mango+stone)
    {
      Matter.Body.setStatic(mango.body,false);
    }
  }
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stone,{x:235,y:420})
    elastic.attach(stone.body);
  }
}





