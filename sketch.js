var player,player_img,screen,screen_img,button,img,imgimg;
//var start,play;
var welcome_screen,welcome_img;
var button_img;
var gameState;
var obImg;


function setup() {
  createCanvas(displayWidth,displayHeight-110);
  scroll=false;
  gameState="start";
  welcome_screen=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  welcome_screen.addImage(welcome_img);
  welcome_screen.scale=2.5;

  button=createSprite(displayWidth/2,500,200,200);
  button.addImage(button_img);
  button.scale=0.15;

  

}
 function preload(){
 welcome_img=loadImage("welc_screen.jpg");
  screen_img=loadImage("eh.jpg")
  button_img=loadImage("buttons_PNG34.png");
  img=loadImage("superhero-marvel-super-heroes-batman-comic-book-class-of-2018-removebg-preview (1).png")
  player_img=loadImage("sup-removebg-preview.png")
  obImg=loadImage("spaceship-removebg-preview.png")
 }
 
function draw() {
  background("black");  
  
 /* textSize(65)
  fill("black")
  stroke("black")
  //text("Camp Heroville",displayWidth/2-200,50);
  textSize(35)
  text("Hello cadet! Welcome to Devyansh Singh's superhero training camp, Camp Heroville!",20,300)
  textSize(20)
  text("We all wish to be superheroes.But only the ones who are just,kind and brave hearted succeed in being heroes.Worry not,for I will train you ",100,380)
  text("to be the the greatest hero ever seen by mankind.You will go down in history as a legend! But first,cadet ,I want to see the skill you already possess...",100,400)

if(gameState==="start"){
  textSize(70)
  fill("red")
  stroke("yellow")
  text("PLAY",displayWidth/2-80,520)

  imgimg=createSprite(650,200,50,50)
  imgimg.addImage(img)
  imgimg.scale=1;
}
  

  if(mousePressedOver(button)){
   gameState="play";
  }
  */
  //if(gameState==="play"){
    screen=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    screen.addImage(screen_img);
    screen.scale=3.0;
    screen.velocityX=50;

    player=createSprite(200,500,50,50)
    player.addImage(player_img)
    player.scale=0.5;
    if(keyDown("space")){
      player.velocityY=-10;
    }
    player.velocityY=player.velocityY+0.4;
    spawnObstacles();
//}
drawSprites();
}

function spawnObstacles(){
  if(frameCount % 40===0){
   bullet=createSprite(displayWidth,100,40,40)
   bullet.addImage(obImg);
   bullet.velocityX=-5;
  }
}