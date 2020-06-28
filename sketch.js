var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1image,car2image,car3image,car4image;
var groundimage;
var trackimage,track2image;
var hurdle, hurdleimage;
var hurdleGroup;


function preload(){
  trackimage=loadImage("../images/track.jpg")
  car1image=loadImage("../images/car1.png")
  car2image=loadImage("../images/car2.png")
  car3image=loadImage("../images/car3.png")
  car4image=loadImage("../images/car4.png")
  groundimage=loadImage("../images/ground.png")
  hurdleimage=loadImage("../images/hurdle.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  hurdleGroup = new Group();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 3){
    console.log("Game pause called");
    clear();    
  }

  if(gameState === 4){
    console.log("Game start called");
    game.play();  
  }
}

