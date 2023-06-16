//module aliases
const Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;


var engine, world;
var circles = [];
var topP, bottomP;

function setup(){
    createCanvas(windowWidth, windowHeight);

    //making the world
    engine = Engine.create();
    world = engine.world
    Engine.run(engine);

    //making the platforms
    topP = new Platform(windowWidth/10, windowHeight/15, 10, 40, 30);
}

function mousePressed(){
    circles.push(new Circles(mouseX, mouseY));
}

function draw(){
    background("black")

    //platforms
    topP.show(); //top one facing right

    for(var i = 0; i < circles.length; i++){
        circles[i].show();
    }

    fill(255)
    text(Math.floor(mouseX) + ", " + Math.floor(mouseY), windowWidth/2, windowHeight-50)
    
}