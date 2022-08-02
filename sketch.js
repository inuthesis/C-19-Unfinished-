var raf, rafImg, RAFbullet, RAFbulletImg;
var ReichT, ReichTImg;
var scenery, sceneryImg;
var score = 0;
var welpTry;
var gameState = "play";
var gameOver
var score = 0;
function preload(){

    rafImg = loadImage("raf irish - Copy.png")
    RAFbulletImg = loadImage("RAFbullet.png")
    ReichTImg = loadImage("ReichkorpPlane.png")
    ReichTbulletImg = loadImage("NaziBullet.png")
    sceneryImg = loadImage("Sky.png")
    gameOverImg = loadImage("WelpTry.png")

}

function setup() {
    createCanvas(1000, 600);
        scenery = createSprite(400, 300);
        scenery.addImage(sceneryImg);
        scenery.velocityX = -2;

        welpTry = createSprite(400, 300)
        welpTry.addImage(gameOverImg);
        welpTry.visible = false;

        raf = createSprite(190,230,50,50);
        raf.scale = 0.7;
        raf.addImage("raf",rafImg);
        raf.visible = true;
        raf.setCollider("circle",0 ,0 ,40);
        
        ReichT = createSprite(700,111,50,50);
        ReichT.scale = 0.69;
        ReichT.y = raf.y;
        ReichT.VelocityX = -1;
        ReichT.addImage("ReichT",ReichTImg);
        ReichT.setCollider("circle",0 , 0, 10);
       
  }
  
  function draw() {
    drawSprites();
    text("Crashing Chances: "+ score, 300,50);
  
    createEdgeSprites;
    if(gameState === "play"){
        raf.velocityY = raf.velocityY + 0.2;
        if(keyDown("UP_ARROW")){
            raf.velocityY = -4;
        }
        if(keyDown("SPACE")){
           bullets(); 
        }
        
        
     if(raf.isTouching(ReichT)){
        score += 5
     }
     
     if(score >= 100){
      gameState = "end"
      welpTry.visible = true;
      raf.visible = true;
     }
     
     if(scenery.x < 300){
      scenery.x = scenery.x + 100;
    }
    
  }
  
}




    function bullets(){
      if(frameCount % 30 === 0){
        RAFbullet = createSprite(148,69,50,50);
        RAFbullet.addImage("RAFbullet",RAFbulletImg);
        RAFbullet.velocityX = 6;
        RAFbullet.y = raf.y + 5
        RAFbullet.x = raf.x - 1; 
        RAFbullet.visible = true;
        RAFbullet.scale = 0.3;
        RAFbullet.x = 290
        RAFbullet.y = raf.y + 90;
      }
  
    }




    
    

  

