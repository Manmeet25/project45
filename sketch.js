const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine ,world,platform1,demon,slingshort,platform2,bouncer,p1,d1,c1,coin;
function preload(){
  d1 = loadImage("images/monster.png")
  c1 = loadImage("images/coin.png")
}
function setup() {
  createCanvas(1350,700);
  engine = Engine.create()
  world = engine.world;
  platform1= new Platform(200,350,400,60);
  platform2 = new Platform(650,600,1350,40);
  platform3 = new Platform(550,260,30,200);
  bouncer = new Bouncer(800,450,100);
  p1 = new Player(1250,550,50,80);
  p1.shapeColor = "red"
  demon = createSprite(150,500,50,50);
  demon.addImage(d1)
  demon.shapeColor="black"
  demon.velocity.x = 0.2
  coin = createSprite(800,400,50,50)
  coin.addImage(c1)
  coin.scale=0.10;
  coin2 = createSprite(300,300,50,50)
  coin2.addImage(c1)
  coin2.scale=0.10;
  slingshot = new SlingShot(p1.body,{x:1190, y:500});

}

function draw() {
  background(0,255,0);
  platform1.display();
  platform2.display();
  platform3.display();
  bouncer.display();
  p1.display();
  slingshot.display();
    drawSprites();
  
}
function mouseDragged(){
  Matter.Body.setPosition(p1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}