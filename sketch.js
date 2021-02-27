const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var log6

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(400,400,200,20);
    //platform = new Ground(150, 305, 300, 170);

    //box1 = new Box(700,320,70,70);
    //box2 = new Box(920,320,70,70);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);
//
    //box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
    //pig3 = new Pig(810, 220);
//
    //log3 =  new Log(810,180,300, PI/2);
//
    //box5 = new Box(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);
    //log6 = new Log(400,400,200,PI/2,)
    bird1 = new Bird(400,650, 20);
    bird2 = new Bird(420,650, 20)
    bird3 = new Bird(440,650, 20)
    bird4 = new Bird(460,650, 20)
    bird5 = new Bird(480,650, 20)
    Chain1 = new chain(bird1.body, ground1.body, -80,1)
    Chain2 = new chain(bird2.body, ground1.body, -40,1)
    Chain3 = new chain(bird3.body, ground1.body, 0,1)
    Chain4 = new chain(bird4.body, ground1.body, 40,1)
    Chain5 = new chain(bird5.body, ground1.body, 80,1   )
    
}

function draw(){


    background("GREY");
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    //box1.display();
    //box2.display();
    ground.display();
    //pig1.display();
    //log1.display();
    //log6.display()
    //box3.display();
   // box4.display();
    //pig3.display();
    //log3.display();
ground1.display()
    //box5.display();
    //log4.display();
   // log5.display();
    Chain1.display()
    Chain2.display()
    Chain3.display()
    Chain4.display()
    Chain5.display()
    bird1.display();
    bird2.display();
    bird3.display();
    bird4.display();
    bird5.display();
    
   //platform.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bird1.body, bird1.body.position,{x:-50, y: -45})
    }
}