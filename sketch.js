
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1115,100,30);
	mango3=new mango(1120,100,30);
	mango4=new mango(1125,100,30);
	mango5=new mango(1100,100,30);
	mango6=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  groundObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

	if (stone.isTouching(mango1)){
       mango1.velocityY = -5;
	}

	if (stone.isTouching(mango2)){
		mango2.velocityY = -5;
	 }

	 if (stone.isTouching(mango3)){
		mango3.velocityY = -5;
	 }

	 if (stone.isTouching(mango4)){
		mango4.velocityY = -5;
	 }

	 if (stone.isTouching(mango5)){
		mango5.velocityY = -5;
	 }

	 if (stone.isTouching(mango6)){
		mango6.velocityY = -5;
	 }
}


function mouseReleased(){
    slingshot.fly();
}