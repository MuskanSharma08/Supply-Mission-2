var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var red1, red2, red3;

var options = {
	'restitution':0.5,
}
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10, options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-40, width,40);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

    packageBody=Bodies.circle(width/2,200,5,{restitution:0.5,isStatic:false});
	World.add(world, packageBody);
	
	red1 = createSprite(250, 600, 20, 100);
	red1.shapeColor = color("red");
	red2 = createSprite(450, 600, 20, 100);
	red2.shapeColor = color("red");
	red3 = createSprite(350, 650, 200, 20);
	red3.shapeColor = color("red");
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

	World.add(world, ground);

	Engine.run(engine);
  }
function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}