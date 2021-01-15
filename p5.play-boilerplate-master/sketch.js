const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world,engine;
var ground,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var ground_Option={
    isStatic : true
  }
  ground=Bodies.rectangle(400,350,800,30,ground_Option);
  World.add(world,ground);


  var ballOption={
    restitution: 2.0
  }
  ball=Bodies.circle(200,100,10,ballOption);
  World.add(world,ball);
}

function draw() {
  background(220,185,100);  
  Engine.update(engine);
  fill("red");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,30);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,30,30);
}