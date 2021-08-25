var hero, enemy,treasure;
var enemyImg, heroImg, treasureImg;
var left, right;

function preload() {
 enemyImg=loadImage("enemy.png");
 heroImg=loadImage("hero.png");
 treasureImg=loadImage("treasure.png");
}

function setup() {
createCanvas(700,700);

enemy=createSprite(20,480,10,10);
enemy.addImage(enemyImg);
enemy.scale=0.5;
//enemy.velocityX=4


treasure=createSprite(50,650,10,10);
treasure.addImage(treasureImg);
treasure.scale=0.5;

hero=createSprite(630,90,10,10);
hero.addImage(heroImg);
hero.scale=0.6;

left=createSprite(10,500,10,200);
left.visible=false

right=createSprite(690,500,10,200);
right.visible=false

hero.debug=false;
hero.setCollider("rectangle",0,0,102,243)
}

function draw() {
  background("lightBlue"); 
  
  if(keyDown("LEFT_ARROW")){
    hero.x= hero.x+-20
  }

  if(keyDown("RIGHT_ARROW")){
    hero.x= hero.x+20;
  }

  if(keyDown("UP_ARROW")){
    hero.y= hero.y+-20
  }

  if(keyDown("DOWN_ARROW")){
    hero.y= hero.y+20
  }

  if(left.isTouching(enemy)){
    enemy.velocityX=4
  }

  if(right.isTouching(enemy)){
    enemy.velocityX=-4
  }

  if(hero.isTouching(enemy)){
   enemy.velocityX=0;
   hero.velocityX=0;
   hero.velocityY=0;
   fill("black")
   text("GameOver",350,350);
   
  }

  if(hero.isTouching(treasure)){
    enemy.velocityX=0;
   hero.velocityX=0;
   hero.velocityY=0;
    fill("green")
    text("you Won",350,350);
    
   }
  drawSprites();
}