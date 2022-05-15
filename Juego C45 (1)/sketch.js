var icon,iconImg;
var spike,spikeImg;
var BG,BGImg;
var orb,orbImg;
var bluePortal,bluePortalImg;
var yellowPortal,yellowPortalImg;
var bigSizePortal,bigSizePortalImg;
var smallSizePortal,smallSizePortalImg;
var jumpPad,jumpPadImg;
var speedImpulse,speedImpulseImg;
var invisibleFloor;
var PLAY = 1;
var OVER = 0;
var gameState = PLAY;
var spikeGroup,orbGroup,padGroup;
var bPortalGroup,sPortalGroup;
var restart0,restartImg;
var gd,gdLogo;
var gdImg,gdImgImg;

function preload(){
  iconImg = loadImage("Imagenes/icon.png");
  spikeImg = loadImage("Imagenes/spike.png");
  orbImg = loadImage("Imagenes/orb.png");
  bluePortalImg = loadImage("Imagenes/normal_gravity_portal.png");
  yellowPortalImg = loadImage("Imagenes/inverted_portal.png");
  bigSizePortalImg = loadImage("Imagenes/big_size_portal.png");
  smallSizePortalImg = loadImage("Imagenes/small_size_portal.png");
  jumpPadImg = loadImage("Imagenes/jump_pad.png");
  speedImpulseImg = loadImage("Imagenes/speed_impulse.png");
  BGImg = loadImage("Imagenes/fondo.jpg");
  restartImg = loadImage("Imagenes/restart.png");
}
function setup() {
  createCanvas(1250,600);
  
  icon = createSprite(width/3,height-105,50,50);
  icon.addImage("icono",iconImg);
  icon.scale = 0.3
  
  restart0 = createSprite(width/3+120,height/2+45,10,10);
  restart0.addImage("reset",restartImg);
  restart0.scale = 0.5
  restart0.visible = false;
  
  invisibleFloor = createSprite(width/2,height-80,windowWidth,10);
  invisibleFloor.visible = false;
  
  spikeGroup = new Group();
  orbGroup = new Group();
  padGroup = new Group();
  bPortalGroup = new Group();
  sPortalGroup = new Group();
}
function draw() {
  background(BGImg);
  
    if(gameState === PLAY){
  restart.visible = false;     
    icon.velocityY = icon.velocityY + 1; 
  if(keyDown("SPACE") && icon.y >= height-120){
    icon.velocityY = -15;
  }
    if(icon.isTouching(spikeGroup)){
      icon.x = width/3;
      gameState = OVER;
    }
  spawnSpikes();
}
  else if(gameState === OVER){
    fill("white");
    textSize(25);
    text("Presiona espacio para",windowWidth/3,windowHeight/3);
    text("volver a empezar",windowWidth/3+25,windowHeight/3+25);
    icon.velocityX = 0;
    icon.velocityY = 0;
    restart0.visible = true;
    spikeGroup.destroyEach();
    if(keyDown("SPACE")){
      restart();
    }
  }
  
  icon.collide(invisibleFloor);
  
  drawSprites();
}
function spawnSpikes(){
 if(frameCount%120 === 0){
  spike = createSprite(width+10,488,20,50);
  spike.addImage("pico",spikeImg);
  spike.velocityX = -10;
  spike.lifetime = width+10;
  spike.scale = 0.4;
  spikeGroup.add(spike);
 }
}
function restart(){
  restart0.visible = false;
  gameState = PLAY;
}