var fixedRect, movingRect;
var ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  movingRect.velocityX = -5;
  fixedRect.velocityY = 5;
  fixedRect.velocityX = 5;
  //hello

  ob1 = createSprite(200, 400, 50, 80);
  ob2 = createSprite(900, 400, 50, 80);
  ob1.velocityX = 3;
  ob2.velocityX = -3;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  bounceOff(fixedRect, movingRect);
  bounceOff(ob1, ob2);
  if (isTouching(fixedRect, movingRect)){
    fixedRect.shapeColor = "purple";
  }
  
}
