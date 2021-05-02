const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var holder,ball,ground;
var stand1,stand2;
var slingShot;
var ball;
var polygon_img;

function preload(){
polygon_img = loadImage("polygon.png");
}



function setup() {
	engine = Engine.create();
    world = engine.world;
    
    createCanvas(900, 400);
    
    //Create the Bodies Here.
	ground = new Ground();
	
	 stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);


    // Set 1
    // Level 1 
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
   

    // Level 2 
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    
    

    // Level 3 
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    
    
    

    
    

    //Level 5
    block16 = new Block(390,155,30,40);



    // Set 2 
    // Level 1 
    block22 = new Block(640,175,30,40);
    block23 = new Block(670,175,30,40);
    block24 = new Block(700,175,30,40);
    block25 = new Block(730,175,30,40);
    block26 = new Block(760,175,30,40);

    // Level 2 
    block27 = new Block(670,135,30,40);
    block28 = new Block(700,135,30,40);
    block29 = new Block(730,135,30,40);

    // Level 3 
    block30 = new Block(700,95,30,45);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingShot = new Slingshot(this.ball,{x:200,y:200});


	
	Engine.run(engine);
  
}


function draw() {
  
  background("white");

  Engine.update(engine);
  
  ground.display();
  
  stand1.display();
  stand2.display();
   
  stroke(15)
  fill("blue")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    
    stroke(15)
  fill("orange")
    block8.display();
    block9.display();
    block10.display();
    block11.display()    ;
    block12.display()   ;
    
    stroke(15)
    fill("pink")
    block13.display()    ;
    block14.display()    ;
   block15.display();
  

  

  stroke(15)
  fill("blue")
  block16.display();


  stroke(15)
  fill("purple")
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  stroke(15)
  fill("green")
  block27.display();
  block28.display();
  block29.display();

  stroke(15)
  fill("red")
  block30.display();

 imageMode(CENTER)
 image(polygon_img,ball.position.x,ball.position.y,40,40)
 slingShot.display();
 
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}


function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.ball);
  }
}



