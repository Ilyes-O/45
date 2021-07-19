const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var engine, world
var s1, s2

var form, player, game;
var s1_dead, s1_shooting, s2_dead, s2_shooting;
var jet1,jet1Img,jet2,jet2Img,heliImg;

function preload(){
  bg = loadImage("images/sky.jpg");
  s1_shooting = loadImage("images/shooting_1.png");
  s1_dead = loadImage("images/destroyed_1.png");
  s2_shooting = loadImage("images/shooting_2.png");
  s2_dead = loadImage("images/falling_2.png");
}
function setup(){
  engine = Engine.create();
  world = engine.world
  canvas = createCanvas(2000,600);

  jet1 = new Jet(500,250,100);
  jet2 = new Jet2(700,250,150)
  
}


function draw(){
  background(bg)
  Engine.update(engine)

  image(s1_shooting,300,370,70,90);

  image(s2_shooting,1400,370,70,90);

  jet1.display();
  jet2.display();

}
function keyPressed(){
  if(keyCode === 27){
    Matter.Body.applyForce(jet1.body,{x:0,y:0},{x:5, y:0});
  }
}
