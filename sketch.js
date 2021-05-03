const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}


function setup() {
  createCanvas(2000, 900);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(750, 800, 1800, 20);

  hero = new Hero(300,800,250);
  rope = new Rope(hero.body, { x: 300, y: 50 });
  monster = new Monster(750,750,200);
  monster1 = new Monster(1200,400,100);
  monster2= new Monster(1400,400,100);
  
 
    log2 = new Box(1300, 200, 500, 10);
    box4 = new Box(1100, 300, 70, 70);
    box5 = new Box(1100, 300, 70, 70);
   
    
    box11 = new Box(1100, 300, 70, 70);
    box12 = new Box(1100, 300, 70, 70);
 
       
    log1 = new Box(750, 500, 400, 10);
    box6 = new Box(600, 540, 70, 70);
    box1 = new Box(600, 610, 70, 70);
    box2 = new Box(600, 680, 70, 70);
    box3 = new Box(600, 750, 70, 70);
    box20 = new Box(900, 540, 70, 70);
    box16 = new Box(900, 610, 70, 70);
    box17 = new Box(900, 680, 70, 70);
    box18 = new Box(900, 750, 70, 70);
    
 
    box25 = new Box(1500, 300, 70, 70);
    box26 = new Box(1500, 300, 70, 70);
    box29 = new Box(1500, 300, 70, 70);
    box30 = new Box(1500, 300, 70, 70);
    

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  
  
  box11.display();
  box12.display();
  
  box16.display();
  box17.display();
  box18.display();
 
  box20.display();
  log1.display();
  log2.display();
  box25.display();
  box26.display();
  box29.display();
  box30.display();


  hero.display();
  rope.display();
  monster.display();
  monster1.display();
  monster2.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}