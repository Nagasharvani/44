var gameState="begin"
var mazeImg,bgImage;


function preload(){
mazeImg=loadImage("maze.jpg");
bgImage=loadImage("wonderland.jpg");
bgImage.scale=0.5
}

function setup(){
createCanvas(700,600);



}

function draw(){
  
  if (gameState==="begin"){
    background(bgImage)
  textSize(40);
  fill("yellow");
  text("Instructions",300,80);
  textSize(25);
  fill("lightblue")
  text("To reach your home",20,150)
  text("First,reach the end point",20,200)
  text("of the maze.",20,250)
  stroke(20)
  fill("green")
  text("Press the spaceBar to start playing the game",20,350)
  }

   if(keyDown("SPACE")){
    gameState="maze";
  }

  if(gameState=== "maze")
  {
    background(mazeImg);
    var block = createSprite(25, 25,20,20);
var cardboard1 = createSprite(70, 60,20,120);
var  cardboard2 = createSprite(125, 50,120,20);


var  cardboard3 = createSprite(50, 160,120,20);
var cardboard4 = createSprite(150, 130,20,165);
var cardboard5 = createSprite(150, 100,20,60);

var cardboard6  = createSprite(100, 220,120,20);
 var cardboard7 = createSprite(50, 250,20,75);
 var cardboard8 = createSprite(50, 370,20,100);
var cardboard9 = createSprite(100, 280,20,130);
var cardboard10 = createSprite(100, 390,120,20);
var cardboard11 = createSprite(150, 350,20,60);
var cardboard12 = createSprite(200, 270,120,20);
var cardboard13 = createSprite(180, 50,100,20);
var cardboard14 = createSprite(200, 270,120,20);
 var cardboard15 = createSprite(205, 150,20,120);
 var cardboard16 = createSprite(260, 100,120,20);
 var cardboard17 = createSprite(250, 210,20,110);
 var cardboard18 = createSprite(270, 50,20,95);
 var cardboard19 = createSprite(220, 320,155,20);
 var cardboard20 = createSprite(300, 245,20,170);
 var cardboard21 = createSprite(275, 150,70,20);
 var cardboard22 = createSprite(370, 5,20,500);
var cardboard23 = createSprite(300, 320,120,20);
 var cardboard24 = createSprite(380, 380,220,20);
 //cardboard25 is the end block
 var cardboard25 = createSprite(200, 390,50,20);
  createEdgeSprites();
  block.bounceOff(edges);
  //the block will only move on pressing the arrows
   block.velocityX="0";
   block.velocityY="0";
   


 //the direction in which the  block goes when pressed each key
if (keyDown(DOWN_ARROW)) {block.setVelocity(0, 2);
  }
  if (keyDown(LEFT_ARROW)) {block.setVelocity(-2, 0);
  }
  if (keyDown(RIGHT_ARROW)) {block.setVelocity(2, 0);
  }
  if (keyDown(UP_ARROW)) {block.setVelocity(0,-2);
  }

//giving colour to block and end bar(cardboard25)
cardboard25.shapeColor="BLACK";
block.shapeColor="red";
 
 //the block goes back to initial position when touching any of these carboards
 if (block.isTouching(cardboard1) || (block.isTouching(cardboard2)) || (block.isTouching(cardboard3)) || (block.isTouching(cardboard4)) || (block.isTouching(cardboard5)) || (block.isTouching(cardboard6)) || (block.isTouching(cardboard7))|| (block.isTouching(cardboard8))||(block.isTouching(cardboard9))||(block.isTouching(cardboard10))||(block.isTouching(cardboard11))||(block.isTouching(cardboard12))||(block.isTouching(cardboard13))||(block.isTouching(cardboard14))||(block.isTouching(cardboard15))||(block.isTouching(cardboard16))||(block.isTouching(cardboard17))||(block.isTouching(cardboard18))||(block.isTouching(cardboard19))||(block.isTouching(cardboard20))||(block.isTouching(cardboard21))||(block.isTouching(cardboard22))||(block.isTouching(cardboard23))||(block.isTouching(cardboard24))) 
 {
   block.x=25;
   block.y=25;
   
 }

//
   if (block.isTouching(cardboard25)) {

      
   
    textSize(30); 
   text("YOU WIN",150, 200);
   
   
   
   }
}
}

   
    
  
 
  
   
 
