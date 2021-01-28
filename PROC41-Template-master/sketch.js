const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella;
var maxDrops = 100;
var drops = [];

var thunder, thunder1, thunder2, thunder3, thunder4;
var thunderTime;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(500,625);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(230,510);

   for(var i = 0; i < maxDrops; i++){
       drops.push(new Drop(random(0,500),random(0,400)));
   }

   Engine.run(engine);
    
}

function draw(){
    background("black");

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    var rand = Math.round(random(1,4));
    if(frameCount  % 60 === 0){
    thunderTime = frameCount;
    thunder = createSprite(random(50,450),random(10,30),10,10);
    switch(rand){
        case 1: thunder.addImage(thunder1);
            break;
        case 2: thunder.addImage(thunder2);
            break;
        case 3: thunder.addImage(thunder3);
            break;
        case 4: thunder.addImage(thunder4);
            break;
        default: break;
    }
}

if(thunderTime + 12 === frameCount && thunder){
    thunder.destroy();
}

    umbrella.display();
    drawSprites();
}   

