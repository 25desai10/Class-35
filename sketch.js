var form, game, player;
var database;
var gameState = 0

var playerCount;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    game = new Game()
    game.getState()
    game.start()
    
}

function draw(){
    background("white");
}