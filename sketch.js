var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(400, 50, 50, 20);
  fixedRect = createSprite(400, 350, 50, 50);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  movingRect.velocityY = 3
  fixedRect.velocityY = -3
}

function draw() {
  background(0,0,255);  

  if(movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2
    && fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2){
    
      fixedRect.velocityX = -(fixedRect.velocityX)
      movingRect.velocityX = -(movingRect.velocityX);
  }

  if(movingRect.y - fixedRect.y < fixedRect.height / 2 + movingRect.height / 2
    && fixedRect. y - movingRect. y < fixedRect.height / 2 + movingRect.height / 2){

      fixedRect.velocityY = -(fixedRect.velocityY)
      movingRect.velocityY = -(movingRect.velocityY);
    }

  drawSprites();
}