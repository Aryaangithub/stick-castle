
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,wall1,wall2,wall3;
var border;
var door;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
  var ground_options ={
    isStatic: true
}

var wall1_options ={
  isStatic:true
}


ground = Bodies.rectangle(400,390,900,20,ground_options);
World.add(world,ground);

wall1 = Bodies.rectangle(100,390,30,900,wall1_options);
World.add(world,wall1);

wall2 = Bodies.rectangle(130,390,30,900,wall1_options);
World.add(world,wall1);

wall3 = Bodies.rectangle(160,390,30,900,wall1_options);
World.add(world,wall1);

wall4 = Bodies.rectangle(205,390,60,900,wall1_options);
World.add(world,wall1);
}

door = Bodies.rectangle(400,200,60,60,30,wall1_options);
World.add(world,wall1);

function draw() {
  background(255,255,255); 
  
  Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,900,20);
    rectMode(CENTER);
    rect(wall1.position.x,ground.position.y,30,900);
    rectMode(CENTER);
    rect(wall2.position.x,ground.position.y,30,900);

    rectMode(CENTER);
    rect(wall3.position.x,ground.position.y,30,900);
    rectMode(CENTER);
    rect(wall4.position.x,ground.position.y,60,900);

    rectMode(CENTER);
    rect(wall4.position.x,ground.position.y,60,60);
  drawSprites();
}