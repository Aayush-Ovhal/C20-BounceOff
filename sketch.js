
var fixedRect,movingRect;

var obj1,obj2;

function setup(){
  createCanvas(1200,800);

  fixedRect = createSprite(1000,400,50,80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  movingRect = createSprite(100,400,80,50);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  movingRect.velocityX = 5;
    fixedRect.velocityX = -5;

}

function draw(){
  background("red");

   BounceOff(fixedRect,movingRect)
    
  drawSprites();
}

