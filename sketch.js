var bgImg;
var sleepAnm;
var brushAnm;
var gymAnm;
var eatAnm;
var drinkAnm;
var moveAnm;
var astronaut;
var bathAnm

function preload(){
  bgImg=loadImage("images/iss.png");
  sleepAnm=loadAnimation("images/sleep.png");
  brushAnm=loadAnimation("images/brush.png");
  gymAnm=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  eatAnm=loadAnimation("images/eat1.png","images/eat2.png");
  drinkAnm=loadAnimation("images/drink1.png","images/drink2.png");
  moveAnm=loadAnimation("images/move.png","images/move1.png");
  bathAnm=loadAnimation("images/bath1.png","images/bath2.png");

}

function setup() {
  createCanvas(600, 500);

  astronaut=createSprite(300,230);
  astronaut=addAnimation("sleeping",sleepAnm);
  astronaut.scale=0.1;
  
}

function draw() {
  background(bgImg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brushAnm);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gymAnm);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eatAnm);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bathAnm);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", moveAnm);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  
}
}