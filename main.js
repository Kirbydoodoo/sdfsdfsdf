// Start

// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 600;



// Global Variables
let cloudImg = document.getElementById("cloud");
let sunImg = document.getElementById("sun");
let platformImg = document.getElementById("platform")

var playerBullets = [];

let platformx = -100
let platformy = 200

let platform1x = -200
let platform1y = 300

let player = {
    x: 200,
    y: 550,
    w: 100,
    h: 120,
    xSpeed: 10,
    ySpeed: 0,
    a: 0.5,
    col: "#0677FE"
   }

   let healthBar = {
     x: -20,
     y: -60
   }

    let rightArrowPressed = false;
    let leftArrowPressed = false;
    let leftshiftPressed = false;

// Animation Loop
requestAnimationFrame(animate);

function animate() {
    // UPDATE
    // Animate cloud 1
    platformx++;
    platform1x++;

    movePlayerHz();
    movePlayerVt();
    

    ctx.clearRect(0, 0, cnv.width, cnv.height);
    drawPlayer();

    document.addEventListener("keydown", keydownHandler);
    document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  if (event.code == "ArrowRight") {
    rightArrowPressed = true;
  } else if (event.code == "ArrowLeft") {
    leftArrowPressed = true;
  } else if (event.code == "ArrowUp") {
    player.ySpeed = -15;
  } else if (event.code == "107"){
    player.xSpeed = +20;
  } else if (event.code == "ShiftLeft"){
    player.w = Math.floor((Math.random() * 50) + 200);
    player.h= Math.floor((Math.random() * 20) + 100)
    leftShiftPressed = true;
  }
}

function keyupHandler(event){
  if (event.code == "ArrowRight") {
    rightArrowPressed = false;
  } else if (event.code == "ArrowLeft"){
    leftArrowPressed = false;
  } else if (event.code == "Space"){
    player.shoot();
  }
}       

player.shoot = function(){
  var bulletPosition = this.midpoint();

  playerbul
}

    // If cloud goes off left side of canvas, teleport to left side at random height
    if (platformx + 100 > 1000 && platform1x + 100 > 1100) {
        platformx = -120;
        platformy = Math.random() * 200;
        platform1x = -120;
        platformy = Math.random() * 200;

    } 

    ctx.drawImage(platform, platformx, platformy);
    ctx.drawImage(platform, platform1x, platform1y);
    ctx.drawImage(health, healthBar.x, healthBar.y )
    

    // LOOP
    requestAnimationFrame(animate);
    }
