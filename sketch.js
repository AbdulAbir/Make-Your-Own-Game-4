
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var SERVE = 2;
var PLAY = 1;
var END = 0;
var gameState = SERVE;

var Ninja,ninjaImg;

function preload()
{
	ninjaImg = loadAnimation("ninja.png");
	ninjaImg1 = loadAnimation("ninja1.png");
	ninjaImg2 = loadAnimation("ninja2.png");
	bg = loadImage("bg.png");
	bd = loadImage("Capture.PNG"); 
	bd1 = loadImage("Capture2.PNG");
	at = loadImage("ataker.png");
	st = loadImage("star.png");
	bg1 = loadImage("bg 2.png")
}

function setup() {
	createCanvas(500, 700);

	gr = createSprite(500,680,1200,20);
	gr.visible = false;

	bt = createSprite(250,350,20,20);
	bt.addImage(bg1);
	bt.scale = 1.5
	bt.visible = false;

	ninja = createSprite(250,600);
	ninja.addAnimation("x",ninjaImg);
	ninja.addAnimation("y",ninjaImg1);
	ninja.addAnimation("q",ninjaImg2);
	ninja.scale = 0.05

	

	

	bac = createSprite(10,450,20,2000);
	

	bac1 = createSprite(490,450,20,2000);
	


	engine = Engine.create();
	world = engine.world;

	starGroup = new Group();
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  if (gameState===SERVE) 
  {	
	  fill("#8B0000")
	  textSize(22)
	  text("Press Right Arrow To Start Game",60,40);

	  

	if (keyDown("right")) {
		gameState = PLAY
	}
  }

  if (gameState===PLAY) 
  {
	  
	  bt.velocityY = 2

	  	bt.visible = true;

	if(bt.y>400)
  {
    bt.y = 350; 
  }

  if(keyDown("right"))
  {
    ninja.x = 430;
	ninja.changeAnimation("q",ninjaImg2);
	ninja.scale = 0.5;
  }

   if(keyDown("left"))
  {
    ninja.x = 70;
	ninja.changeAnimation("y",ninjaImg1);
	ninja.scale = 0.5;
  }

  spawnStars();

  }


  
  drawSprites();
 
}

function spawnStars()
{
	if(frameCount%80===0)
    {
 
      star = createSprite(125,0);
	  star.addImage(st);
	  star.scale = 0.1
      star.velocityY = 8;    
      star.x = Math.round(random(50,600));
      star.lifetime = 100;
      starGroup.add(star);
      
    }
	
}

