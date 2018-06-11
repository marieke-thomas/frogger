console.log("linked")

function setup(){
    createCanvas(800,600)
}

var frogX = 375
var frogY = 550

var carX = 800
var car1X = -50
var busX = 600
var bus1X = 900
var bus2X = 1200

function draw(){
    background(220);
    strokeWeight(2)
    // green frog
    stroke(0,130,0)
    fill(0,255,0)
    rect(frogX,frogY,50,50)
    //red car
    stroke(150,0,0)
    fill(255,0,0)
    rect(carX,450,100,50)
    carX -= 5
    if (carX <= -100){
        carX = 800
    }
    //blue car
    stroke(0,0,150)
    fill(0,0,255)
    rect(car1X,300,100,50)
    car1X += 10
    if (car1X == 900){
        car1X = -100
    }
    //yellow school bus
    stroke(150,150,0)
    fill(255,255,0)
    rect(busX,100,175,50)
    rect(bus1X,100,175,50)
    rect(bus2X,100,175,50)
    busX -= 2
    bus1X -= 2
    bus2X -= 2
    if (busX <= -175) {
        busX = 800
    }
    if (bus1X <= -175) {
        bus1X = 800
    }
    if (bus2X <= -175) {
        bus2X = 800
    }
    //check to see if you lose
    if (touching(frogX, frogY, 50, carX, 450, 100) || touching(frogX, frogY, 50, car1X, 300, 100) || touching(frogX, frogY, 50, busX, 100, 175) || touching(frogX, frogY, 50, bus1X, 100, 175) || touching(frogX, frogY, 50, bus2X, 100, 175)){
        lose()
        // reset()
    }
    //check to see if you win
    if (frogY <= 0){
        win()
    }
}

// function busMove(x){
//     x -= 2
//     if (x <= -175) {
//         x = 800
//     }
// }

//I don't fully understand this, I just copied it from someone on Stack Overflow
window.onkeydown = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 38) {
       frogY -= 10;
   }else if (key == 40) {
       frogY += 10;
   }else if (key == 37) {
       frogX -= 10
   }else if (key == 39){
       frogX += 10
   } else if (key == 32){
       frogY -= 40
   }
}

function touching(x1, y1, width1, x2, y2, width2){
    //x1, y1 are upper right corner of frog, x2, y2 are upper right corner of car/bus
    if ((x1 > x2-width1) && (x1 < x2+width2) && (y1 > (y2-50)) && (y1 < y2+50)){
        return true
    } else {
        return false
    }
}

let winLose = document.querySelector('#winLose')
console.log (winLose)

function reset(){
    frogX = 375
    frogY = 550
    carX = 799
    car1X = -50
    busX = 600
    bus1X = 900
    bus2X = 1200
}

function lose(){
    reset()
    winLose.innerHTML += "You have been squashed. "
}



function win(){
    winLose.innerHTML= "You win! You are the best frog. "
    //how can I make the cars go away?
}