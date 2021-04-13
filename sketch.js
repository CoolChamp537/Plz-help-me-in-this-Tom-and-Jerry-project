var tom,tomImg,tomImg2,tomImg3,tomImg4;
var jerry,jerryImg,jerryImg2,jerryImg3,jerryImg4;
var gameState = play();

function preload() {
    //load the images here
tomImg = loadAnimation("cat1.png")
tomImg2 = loadAnimation("cat2")
tomImg3 = loadAnimation("cat3.png")
tomImg4 = loadAnimation("cat4.png")

jerryImg = loadAnimation("mouse1.png")
jerryImg2 = loadAnimation("mouse2.png")
jerryImg3 = loadAnimation("mouse3.png")
jerryImg4 = loadAnimation("mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create Tom and Jerry sprites here
    tom.addAnimation("tom1",tomImg)
    jerry.addAnimation("jerry1",jerryImg)
    jerry.addAnimation("jerry2",jerryImg2)
    jerry.addAnimation("jerry3",jerryImg3)
    jerry.addAnimation("jerry4",jerryImg4)

}

function draw() {

    background(255);

    if(gameState === "play"){

    //condition to evalute if Tom and Jerry collide
    if(jerry.x - tom.x < jerry.width/2 + tom.width/2 &&
        tom.x - jerry.x < jerry.width/2 + tom.width/2 &&
        jerry.y - tom.y < jerry.height/2 + tom.height/2 &&
        tom.y - jerry.y < jerry.height/2 + tom.height/2){
            gameState = "collide"
        }
    }

    if(gameState === "collide"){
        tom.velocityX = 0
        tom.velocityY = 0

        jerry.velocityX = 0
        jerry.velocityY = 0
    }
    drawSprites();
    keyPressed()
}


function keyPressed(){
  //For moving and changing animation write code here
if(keyDown("right") || keyDown("d")){
    tom.velocityX = -5
}

}
