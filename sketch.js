var canvas;
var music;
var edges
var gameObj1;
var gameObj2;
var gameObj3;
var gameObj4;
var box1;
function preload(){
music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    gameObj1=createSprite(100,580,200,10)
    gameObj1.shapeColor="blue"
    gameObj2=createSprite(300,580,200,10)
    gameObj2.shapeColor="orange"
    gameObj3= createSprite(500,580,200,10);
    gameObj3.shapeColor="red";
    gameObj4= createSprite(700,580,200,10);
    gameObj4.shapeColor="green";
    box1=createSprite(random(20,750),20,10,10)
    box1.shapeColor="white"
    
    edges=createEdgeSprites();

    //create box sprite and give velocity
     box1.velocityX=4
     box1.velocityY=4
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box1.bounceOff(edges)
    if(gameObj1.isTouching(box1)&& box1.bounceOff(gameObj1)){
        box1.shapeColor="blue"
        music.play();
    }
    if(gameObj2.isTouching(box1)&& box1.bounceOff(gameObj2)){
        box1.shapeColor="orange"
        music.play();
    }
    if(gameObj3.isTouching(box1)&& box1.bounceOff(gameObj3)){
        box1.shapeColor="red"
        music.stop();
    }
    if(gameObj4.isTouching(box1)&& box1.bounceOff(gameObj4)){
        box1.shapeColor="green"
        music.stop();
    }
    drawSprites();
}
