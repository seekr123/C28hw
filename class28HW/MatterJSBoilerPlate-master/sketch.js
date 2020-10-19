
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var tree;
var ground;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6
var boy,boyimg


function preload()
{

	boyimg=loadImage('boy.png')
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy=createSprite(200,500,50,50);
	boy.addImage('boy',boyimg);

	ground=new Ground(600,490,1200,20);
	
	stone=new Stone(100,480,20);

	mango1=new Mango(480,480);
	mango2=new Mango(480,480);
	mango3=new Mango(480,480);
	mango4=new Mango(480,480);
	mango5=new Mango(480,480);
	
	tree=new Tree();
	rope= new Rope(boy,stone);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


	tree.display();
	 
	ground.display();

	//stone.display();
	  
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	
  
  drawSprites();


 
}



