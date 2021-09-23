  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background("black");
  
  if (gameState === "play") {
    
    if(keyDown("LEFT_ARROW")){
  
      // write a code to move left when left arrow is pressed

      ghost.x = ghost.x -4;
    }
    if(keyDown("RIGHT_ARROW")){
    
        
            // write a code to move right when right arrow is pressed

            ghost.x = ghost.x +4;
          }

          if(keyDown("SPACE")){
  
            ghost.velocityY = -10;
         
               
             }
         
      
   
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower

      console.log(tower.y);

      if(tower.y >500){

        tower.y = 300;
      }
    
      spawnDoors();

  
      //write a code to make climbersGroup collide with ghost change the ghost velocity  

      if(climbersGroup.collide(ghost)){
        ghost.velocityY = 0;
      }
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.

if(invisibleBlockGroup.isTouching(ghost) || ghost.y >500){
  gameState = "end"
}
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    invisibleBlock.debug = true;
    //add the random function

    var rand = Math.round(random(300,500));

    door.x = rand;
    climber.x = rand;
    invisibleBlock.x = rand;
    //
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //change the depth of the ghost and door

    ghost.depth = door.depth
    ghost.depth +=1;
    
     

    
    //assign lifetime to the obstacle.lifetime = 300; here  obstacle are door, climber and invisible block

    door.lifetime = 500;
    climber.lifetime = 500;
    invisibleBlock.lifetime = 500;


    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block

    doorsGroup.add(door);
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock)


  }
}

