var icon,iconImg;

var spike,spike2,spikeImg;

var block1,block2,block3,block4;

var BG,BGImg;

var orb,orb2,orbImg;
var jumpPad,jumpPad2,jumpPadImg;

var bluePortal,bluePortalImg;
var yellowPortal,yellowPortalImg;

var bigSizePortal,bigSizePortal2,bigSizePortalImg;
var smallSizePortal,smallSizePortal2,smallSizePortalImg;

var ballImg;
var ballPortal,ballPortal2,ballPortalImg;

var cubePortal,cubePortal2,cubePortalImg;

var speedPortal,speedPortalImg;

var invisibleFloor;
var edges;

var gravityState = 0;
var vehicleState = 0;

function preload(){
  iconImg = loadImage("Imagenes/icon.png");
  iconImgInverted = loadImage("Imagenes/icon_invertido.png");

  spikeImg = loadImage("Imagenes/spike.png");
  spikeImgInverted = loadImage("Imagenes/spike_invertido.png");

  orbImg = loadImage("Imagenes/orb.png");

  jumpPadImg = loadImage("Imagenes/jump_pad.png");
  jumpPadImgInverted = loadImage("Imagenes/jump_pad_invertido.png");

  bluePortalImg = loadImage("Imagenes/normal_gravity_portal.png");
  yellowPortalImg = loadImage("Imagenes/inverted_portal.png");

  bigSizePortalImg = loadImage("Imagenes/big_size_portal.png");
  smallSizePortalImg = loadImage("Imagenes/small_size_portal.png");

  ballImg = loadImage("Imagenes/ball.png");
  ballPortalImg = loadImage("Imagenes/BallPortal.png");

  cubePortalImg = loadImage("Imagenes/CubePortal.png")

  speedPortalImg = loadImage("Imagenes/speed_impulse.png");

  BGImg = loadImage("Imagenes/fondo.jpg");
}
function setup() {
  createCanvas(1250,600);
  
  icon = createSprite(625,200,50,50);
  icon.addImage("icono",iconImg);
  icon.addImage("vBall",ballImg);
  icon.scale = 0.3
  

  invisibleFloor = createSprite(width/2,height-80,1300,10);
  invisibleFloor.visible = false;

  invisibleFloor2 = createSprite(width/2,-5,1300,10);
  invisibleFloor2.visible = false;


  orb = createSprite(500,400,50,50);
  orb.addImage("orbe",orbImg);
  orb.scale = 0.2;

  orb2 = createSprite(500,105,50,50);
  orb2.addImage("orbe",orbImg);
  orb2.scale = 0.2;
  

  jumpPad = createSprite(500,505.5,50,10);
  jumpPad.addImage("pad de salto",jumpPadImg);
  jumpPad.scale = 0.55;

  jumpPad2 = createSprite(500,6.5,50,10);
  jumpPad2.addImage("pad de salto",jumpPadImgInverted);
  jumpPad2.scale = 0.55;
  

  smallSizePortal = createSprite(275,450,20,80);
  smallSizePortal.addImage("s size portal",smallSizePortalImg);
  smallSizePortal.scale = 1

  smallSizePortal2 = createSprite(275,60,20,80);
  smallSizePortal2.addImage("s size portal",smallSizePortalImg);
  smallSizePortal2.scale = 1
  

  bigSizePortal = createSprite(970,450,20,80);
  bigSizePortal.addImage("b size portal",bigSizePortalImg);
  bigSizePortal.scale = 1;
  
  bigSizePortal2 = createSprite(970,60,20,80);
  bigSizePortal2.addImage("b size portal",bigSizePortalImg);
  bigSizePortal2.scale = 1;


  yellowPortal = createSprite(700,450,20,80);
  yellowPortal.addImage("yellowPortalImg",yellowPortalImg);
  yellowPortal.scale = 0.85;

  bluePortal = createSprite(700,60,20,80);
  bluePortal.addImage("bluePortalImg",bluePortalImg);
  bluePortal.scale = 0.85;


  ballPortal = createSprite(50,450,20,80);
  ballPortal.addImage("portal vB",ballPortalImg);
  ballPortal.scale = 0.27;

  ballPortal2 = createSprite(50,60,20,80);
  ballPortal2.addImage("portal vB",ballPortalImg);
  ballPortal2.scale = 0.27;


  cubePortal = createSprite(1200,450,20,80);
  cubePortal.addImage("portal vC",cubePortalImg);
  cubePortal.scale = 0.27;

  cubePortal2 = createSprite(1200,60,20,80);
  cubePortal2.addImage("portal vC",cubePortalImg);
  cubePortal2.scale = 0.27;


  spike = createSprite(840,488,20,50);
  spike.addImage("pico",spikeImg);
  spike.scale = 0.4;

  spike2 = createSprite(840,23,20,50);
  spike2.addImage("pico",spikeImgInverted);
  spike2.scale = 0.4;


  //block1 = new Block(625,250);
}
function draw(){
  background(BGImg)
  
  console.log("vehículo:" + vehicleState);
  console.log("gravedad:" + gravityState);

  if(gravityState === 0){
    icon.velocityY = icon.velocityY + 1;
  
    if(keyDown("SPACE") && icon.y >= height-120 && vehicleState === 0){
      icon.velocityY = -13;
    }
    if(keyDown("SPACE") && icon.isTouching(orb)||icon.isTouching(orb2)){
      icon.velocityY = -16;
    }

    if(icon.isTouching(jumpPad)){
      icon.velocityY = -18;
    }

    if(icon.isTouching(smallSizePortal)){
      icon.scale = 0.15
    }
    if(icon.isTouching(bigSizePortal)){
      icon.scale = 0.3
    }

    if(icon.isTouching(spike)){
      icon.changeImage("icono");

      icon.x = width/2;

      vehicleState = 0;
    }

    if(icon.isTouching(yellowPortal)){
      gravityState = 1;
    }

    if(icon.isTouching(ballPortal) && vehicleState === 0){
      icon.changeImage("vBall");
      icon.scale = 0.15;

      vehicleState = 1;
    }
    if(vehicleState === 1 && icon.y >= height-120){
      if(keyDown("SPACE")){
        gravityState = 1;
      }
    }

    if(icon.isTouching(cubePortal) && vehicleState === 1){
      icon.changeImage("icono");
    
      vehicleState = 0;
    }

    if(keyDown("D")){
      icon.velocityX = 10;
    }
    if(keyWentUp("D")){
      icon.velocityX = 0;
    }
    if(keyDown("A")){
      icon.velocityX = -10;
    } 
    if(keyWentUp("A")){
      icon.velocityX = 0;
    }
  }
  else if(gravityState === 1){
    icon.velocityY = icon.velocityY - 1;

    icon.addImage("icono invertido",iconImgInverted);

    if(keyDown("SPACE") && icon.y <= 33 && vehicleState === 0){
      icon.velocityY = 13;
    }
    if(keyDown("SPACE") && icon.isTouching(orb)||icon.isTouching(orb2)){
      icon.velocityY = 16;
    }

    if(icon.isTouching(jumpPad2)){
      icon.velocityY = 18;
    }
  
    if(icon.isTouching(bluePortal)){
      gravityState = 0;
    }

    if(icon.isTouching(ballPortal2) && vehicleState === 0){
      icon.changeImage("vBall");
    
      vehicleState = 1;
    }
    if(vehicleState === 1 && icon.y <= 50){
      if(keyDown("SPACE")){
        gravityState = 0;
      }
    }

    if(icon.isTouching(cubePortal2) && vehicleState === 1){
      icon.changeImage("icon");
    
      vehicleState = 0;
    }

    if(icon.isTouching(smallSizePortal2)){
      icon.scale = 0.15
    }
    if(icon.isTouching(bigSizePortal2)){
      icon.scale = 0.3
    }

    if(icon.isTouching(spike2)){
      icon.changeImage("icono");
      
      icon.x = width/2;

      vehicleState = 0;
    }

    if(keyDown("D")){
      icon.velocityX = 10;
    }
    if(keyWentUp("D")){
      icon.velocityX = 0;
    }
    if(keyDown("A")){
      icon.velocityX = -10;
    } 
    if(keyWentUp("A")){
      icon.velocityX = 0;
    }
  }

  icon.collide(invisibleFloor);
  icon.collide(invisibleFloor2);

  edges = createEdgeSprites();
  icon.bounceOff(edges);
  
  drawSprites();
}