
var monkey , monkey_running;
var ground,invisibleGround;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
 
 
}



function setup() {
  createCanvas(600, 600);
  
   
   monkey = createSprite(80,515,10,10);
   monkey.addAnimation("moving" ,monkey_running);
   monkey.scale=0.1;
  
    ground = createSprite(400,550,900,10);
    ground.velocityX=-4;
    ground.x=ground.width/2;
  
   //invisibleGround = createSprite(400,550,900,10);
   //invisibleGround.visible = false;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
   
}


function draw() {
  background("white");
  
  
   if (keyDown("space")){
      monkey.velocityY = -11;
   }
   monkey.velocityY = monkey.velocityY +0.8;
  
 if (monkey.isTouching(obstacleGroup)){
     monkey.velocityY=0;
 }
  
  
  
  
  if(ground.x<0){
   ground.x=400;                       
  }
  
  
  
  
  
  
  
  
  stroke("white");
  textSize(20);
  fill("white");  
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime,220,70);
  
     monkey.collide(ground);  
  bananas();
  obstacles();
  drawSprites(); 
}
function obstacles(){
  if (frameCount%60 === 0){
   var obstacle=createSprite(600,525,1,1);
   obstacle.addImage(obstaceImage);
   obstacle.velocityX = -7;
   obstacle.scale=0.1 
   obstacle.x=random(590,600);
   obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
    
    }
  
}

function bananas(){
  
 if (frameCount%60===0){
   var banana=createSprite(600,300,1,1);  
   banana.addImage(bananaImage);
   banana.velocityX=-3;
   banana.scale=0.1;
   banana.y=random(300,400);
   banana.lifetime = 200; 
   FoodGroup.add(banana);
 } 
 }
 