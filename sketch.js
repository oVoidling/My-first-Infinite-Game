var diver, diverImg;
var appletreasure, irontreasure, goldentreasure;
var appletreasureImg, irontreasureImg, goldentreasureImg;
var ocean, oceanImg;
var appletreasuresGroup, irontreasuresGroup, goldentreasuresGroup;
var shark, sharkImg, sharksGroup
var END = 0;
var PLAY = 1;
var gameState = PLAY;

var treasure = 0

function preload(){
  diverImg = loadAnimation("swim1.png","swim2.png","swim3.png","swim4.png","swim5.png","swim6.png","swim7.png","swim8.png");
  oceanImg = loadImage("ocean.png")
  appletreasureImg = loadImage("appletreasure.png")
  irontreasureImg = loadImage("irontreasure.png")
  goldentreasureImg = loadImage("goldtreasure.png")
  sharkImg = loadImage("shark.png")
}

function setup() {
  createCanvas(400,200);

  ocean = createSprite(200,100,400,400)
  ocean.addImage(oceanImg)
  ocean.scale = 1.8

  diver = createSprite(100,100);
  diver.addAnimation("swiming",diverImg);
  diver.scale = 0.6

  appletreasuresGroup = new Group()
  irontreasuresGroup = new Group()
  goldentreasuresGroup = new Group()
  sharksGroup = new Group()
  


}

function draw() {
  background(200);
if(gameState === PLAY){
ocean.velocityX = -1


if (ocean.x < 130){
  ocean.x = 200;
}

if(keyDown("a")){
  diver.y -= 1
}
if(keyDown("d")){
  diver.y += 1
}

if(appletreasuresGroup.isTouching(diver)){
appletreasuresGroup.destroyEach();
treasure += 50
}

if(goldentreasuresGroup.isTouching(diver)){
  goldentreasuresGroup.destroyEach();
  treasure += 150
}
if(irontreasuresGroup.isTouching(diver)){
  irontreasuresGroup.destroyEach();
  treasure += 100


}
if(sharksGroup.isTouching(diver)){
  gameState = END
  ocean.destroy()
  diver.destroy()
  sharksGroup.destroyEach()
  appletreasuresGroup.destroyEach()
  irontreasuresGroup.destroyEach()
  goldentreasuresGroup.destroyEach()

  sharksGroup.visible = false
  appletreasuresGroup.visible = false
  irontreasuresGroup.visible = false
  goldentreasuresGroup.visible = false
}

spawnappleTreasure();
spawngoldTreasure();
spawnironTreasure();
spawnShark();

}

if(gameState === END){
  stroke("white")
  fill("white")
  background("black")
  text("GameOver Your Score was : "+ treasure,100,100)
}

drawSprites();
textSize(10);
  fill(255);
  text("Treasure: "+ treasure,10,30);
}

function spawnappleTreasure(){
  if(frameCount % 200 === 0){
  appletreasure = createSprite(300,100,10,10);
  appletreasure.addImage(appletreasureImg);
  appletreasure.scale = 0.1;
  appletreasure.velocityX = -1;
  appletreasure.y = Math.round(random(10,180));
  appletreasuresGroup.add(appletreasure);
  }
}

function spawngoldTreasure(){
  if(frameCount % 320 === 0){
  goldentreasure = createSprite(300,100,10,10);
  goldentreasure.addImage(goldentreasureImg);
  goldentreasure.scale = 0.3;
  goldentreasure.velocityX = -1;
  goldentreasure.y = Math.round(random(10,180));
  goldentreasuresGroup.add(goldentreasure);
  }
}

function spawnironTreasure(){
  if(frameCount % 450 === 0){
  irontreasure = createSprite(300,100,10,10);
  irontreasure.addImage(irontreasureImg);
  irontreasure.scale = 0.3;
  irontreasure.velocityX = -1;
  irontreasure.y = Math.round(random(10,180));
  irontreasuresGroup.add(irontreasure);
  }
}

function spawnShark(){
  if(frameCount % 200 === 0){
  shark = createSprite(300,100,10,10);
  shark.addImage(sharkImg);
  shark.scale = 0.3;
  shark.velocityX = -1;
  shark.y = Math.round(random(10,180));
  sharksGroup.add(shark);
  }
}