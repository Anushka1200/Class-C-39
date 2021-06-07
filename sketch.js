var ball;
var database;
var position;

var database;
var playerCount;
var form, game, player;
var gameState = 0;
var allPlayers;

var car1,car2,car3,car4;
var cars;

var car1Image, car2Image, car3Image, car4Image , trackImage;

function preload(){
    car1Image = loadImage("Images/car1.png");
    car2Image = loadImage("Images/car2.png");
    car3Image = loadImage("Images/car3.png");
    car4Image = loadImage("Images/car4.png");
    trackImage = loadImage("Images/track.jpg");
}

function setup(){
    createCanvas(displayWidth+130,displayHeight-40);
  

    database = firebase.database();
    game = new Game();
    game.getState()
    game.start();
   
    
}

function draw(){
   if(playerCount === 4){
       game.update(1);
   }

   if(gameState === 1){
       clear();
       game.play();
   }
   if(gameState === 2){
       game.end();
   }
  
}


