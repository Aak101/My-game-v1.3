const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var database;
var engine, world;
var player;
var b1,b2,b3,b4,b5,b6,b7,b8;
var edges;
var levels;
var level1, level2;


function setup(){

    database = firebase.database();
    var canvas = createCanvas(900,600);
    // engine = Engine.create();
    // world = engine.world;



}

function draw(){
    background('#CFE8EE');
    edges = createEdgeSprites();
    if(player.isTouching(edges)){
        player.x = 700;
        player.y = 100;
    }
   // Engine.update(engine);



   if (array1 === playerArray){

    level2 = new Level2Class();

}
    drawSprites();
}

