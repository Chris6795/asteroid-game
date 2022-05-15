var bg,bgImg;
var player, shooterImg, shooter_shooting;
var asteroidGroup, asteroid1Img, asteroid2Img, asteroid4Img, asteroid5Img, shootingAsteroidImg
var asteroid1Grp, asteroid2Grp, shootingAsteroidGrp, asteroid4Grp, asteroid5Grp
var bangImage


function preload(){
  shooterImg = loadImage("assets/rocket.png")
  shooter_shooting = loadImage("assets/rocket.png")
  asteroid1Img = loadImage("assets/asteroid_1.png")
  asteroid2Img = loadImage("assets/asteroid_2.png")
  asteroid4Img = loadImage("assets/asteroid_4.png")
  asteroid5Img = loadImage("assets/asteroid_5.png")
  shootingAsteroidImg = loadImage("assets/shootingAsteroid.png")
  bgImg = loadImage("assets/background.jpeg")
  bangImage = loadImage("assets/bang.png")
  asteroid1Grp=new Group()
asteroid2Grp=new Group()
shootingAsteroidGrp=new Group()
asteroid4Grp=new Group()
asteroid5Grp=new Group()

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1


  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
 
  player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 

  


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-20
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+20
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-10
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 player.x = player.x+10
}



spawnAsteroids()

if(asteroid1Grp.isTouching(player) || asteroid2Grp.isTouching(player) || shootingAsteroidGrp.isTouching(player) || asteroid4Grp.isTouching(player) || asteroid5Grp.isTouching(player)){

  asteroid1Grp.setVelocityYEach(0)
  asteroid1Grp.setVelocityXEach(0)

  asteroid2Grp.setVelocityYEach(0)
  asteroid2Grp.setVelocityXEach(0)

  asteroid4Grp.setVelocityYEach(0)
  asteroid4Grp.setVelocityXEach(0)

  asteroid5Grp.setVelocityYEach(0)
  asteroid5Grp.setVelocityXEach(0)

  shootingAsteroidGrp.setVelocityYEach(0)
  shootingAsteroidGrp.setVelocityXEach(0)

  player.addImage(bangImage)
}

drawSprites();
textSize(30)
text(mouseX+','+mouseY,mouseX,mouseY)
}

function spawnAsteroids(){

  if(World.frameCount % 50 === 0) {

    var rand=Math.round(random(1,6))
    switch(rand){
      case 1: asteroid1();
      break;
      case 2: asteroid2();
      break;
      case 3: asteroid4();
      break;
      case 4: asteroid5();
      break;

      case 5: shootingAsteroidRight()
      break;
      case 6: shootingAsteroidLeft()
      break;
    }
    
  }
}

function asteroid1() {
  var asteroid1 = createSprite(Math.round(random(191,1500)),Math.round(random(20, 370)), 10, 10);
  asteroid1.addImage(asteroid1Img);
  asteroid1.velocityY = 3;
  asteroid1.lifetime = 500;
  asteroid1.scale = 0.5;
  asteroid1Grp.add(asteroid1)
}

function asteroid2() {
  var asteroid2 = createSprite(Math.round(random(191,1500)),Math.round(random(20, 370)), 10, 10);
  asteroid2.addImage(asteroid2Img);
  asteroid2.velocityY = 3;
  asteroid2.lifetime = 500;
  asteroid2.scale = 0.5;
  console.log(asteroid2.x)
  asteroid2Grp.add(asteroid2)
}

function asteroid4() {
  var asteroid4 = createSprite(Math.round(random(191,1500)),Math.round(random(20, 370)), 10, 10);
  asteroid4.addImage(asteroid4Img);
  asteroid4.velocityY = 3;
  asteroid4.lifetime = 500;
  asteroid4.scale = 0.5;
  asteroid4Grp.add(asteroid4)
}

function asteroid5() {
  var asteroid5 = createSprite(Math.round(random(191,1500)),Math.round(random(20, 370)), 10, 10);
  asteroid5.addImage(asteroid5Img);
  asteroid5.velocityY = 3;
  asteroid5.lifetime = 500;
  asteroid5.scale = 0.25;
  asteroid5Grp.add(asteroid5)
}

function shootingAsteroidRight() {
  var shootingAsteroid = createSprite(Math.round(random(191,1500)),Math.round(random(20, 370)), 10, 10);
  shootingAsteroid.addImage(shootingAsteroidImg);
  shootingAsteroid.velocityY = 8;
  shootingAsteroid.velocityX = -4
  shootingAsteroid.lifetime = 500;
  shootingAsteroid.scale = 0.5;
  shootingAsteroidGrp.add(shootingAsteroid)
}

function shootingAsteroidLeft() {
  var shootingAsteroid = createSprite(Math.round(random(191,1500)),Math.round(random(20, 370)), 10, 10);
  shootingAsteroid.addImage(shootingAsteroidImg);
  shootingAsteroid.velocityY = 8;
  shootingAsteroid.velocityX = 4
  shootingAsteroid.lifetime = 500;
  shootingAsteroid.scale = 0.5;
  shootingAsteroidGrp.add(shootingAsteroid)
}