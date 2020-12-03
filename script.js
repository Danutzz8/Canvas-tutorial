const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

//fillrect
/*
ctx.fillStyle = 'red'
ctx.fillRect(20,20,150,100);
ctx.fillStyle = 'blue'
ctx.fillRect(200,20,150,100);

// strokeRect
ctx.lineWidth = 3;
ctx.strokeStyle = 'green';
ctx.strokeRect(100,200,150,100);

//clearRect

ctx.clearRect(25,25,140,90)

//fillText
ctx.font = '30px Arial';
ctx.fillStyle = 'purple'
ctx.fillText('Hello World', 400, 50);

//stokeText
ctx.lineWidth = 1;
ctx.strokeStyle = 'orangered';
ctx.strokeText('Hello World', 400, 100); */

/*
//Paths
//triangle
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150,50);
ctx.lineTo(100, 200);
// ctx.lineTo(50,50);
ctx.closePath();
// ctx.stroke();
ctx.fillStyle = 'coral'
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(150, 200);
ctx.lineTo(250,200);
ctx.lineTo(200,50);
ctx.fillStyle = 'black'
ctx.fill()
ctx.stroke()

//rectangle
ctx.beginPath();
ctx.rect(300,50,150,100);
ctx.fillStyle = 'teal';
ctx.fill();  
*/

/*
//Arc() circles
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, Math.PI * 2, true); //head
// ctx.arc(75, 75, 35, 0, Math.PI, false);
const centerX = canvas.width / 2;  // center of screen defined 
const centerY = canvas.height / 2;  // center of screen defined 

ctx.moveTo(centerX + 100, centerY); // the starting point of mouth
ctx.arc(centerX,centerY, 100, 0, Math.PI, false)  //darw mouth
ctx.moveTo(centerX - 60, centerY - 80);
ctx.arc(centerX - 85, centerY - 80, 25, 0, Math.PI * 2, true); // left eye
ctx.moveTo(centerX + 110, centerY - 80);
ctx.arc(centerX + 85, centerY - 80, 25, 0, Math.PI * 2, true); // right eye

ctx.stroke();

 // Quadratric curves example
 ctx.beginPath();
 ctx.moveTo(75, 25);
 ctx.quadraticCurveTo(25, 25, 25, 62.5);
 ctx.quadraticCurveTo(25, 100, 50, 100);
 ctx.quadraticCurveTo(50, 120, 30, 125);
 ctx.quadraticCurveTo(60, 120, 65, 100);
 ctx.quadraticCurveTo(125, 100, 125, 62.5);
 ctx.quadraticCurveTo(125, 25, 75, 25);
 ctx.stroke();
 */

 //Animation 1

 /*
 const circle = {
     x: 200,
     y: 200,
     size: 30,
     dx: 5,
     dy: 4
 }

 function drawCircle() {
     ctx.beginPath();
     ctx.arc(circle.x,circle.y,circle.size,0,Math.PI * 2, true);
     ctx.fillStyle = 'purple';
     ctx.fill();
    //  ctx.stroke();
 }

function update() {
   ctx.clearRect(0,0, canvas.width, canvas.height); /// is clearing the canvas 
    drawCircle();
    // change position
    circle.x += circle.dx // we changing position on x-- starts to move ---> circle.x += -circle.dx ---> negative one moves on the opposite side
    circle.y += circle.dy // we changing position on y

    // detect side walls
    if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
        circle.dx *= -1; // this will make the ball to bounce back the wall, giving to it a negative value (multiply by -1)
    }

    // detect top and bottom walls
    if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
        circle.dy *= -1 // this will make the ball bounce back from top & bottom 
    }

    requestAnimationFrame(update); // implements the animation
    
}

update();
*/

//Animation 2 character

const image = document.querySelector('#source');

const player = {
    w: 50,
    h: 70,
    x: 20,
    y: 200,
    speed: 5,
    dx: 0, // moving is set to 0 by default because we want to use the keyboard to move
    dy: 0
};

function drawPlayer() {
    ctx.drawImage(image,player.x,player.y,player.w,player.h);
}

function clear() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function newPosition() {
    player.x += player.dx;
    player.y += player.dy;

    detectWalls();
}

function detectWalls() {
    if(player.x < 0) {
        player.x = 0;           // left wall
    } else if (player.y < 0) {
        player.y = 0;           // top wall
    }  else  if (player.x + player.w > canvas.width) {
        player.x = canvas.width - player.w    // right wall
    }  else if (player.y > 530) {
        player.y = 530;          // bottom or we can use--- if (player.y + player.h > canvas.height) {
                                                             // player.y = canvas.height - player.h;
                                                           // }
    }  
}

function update() {
    clear();
    drawPlayer();

    newPosition();


    requestAnimationFrame(update);
}

function moveUp() {
    player.dy = -player.speed;
}

function moveDown() {
    player.dy = player.speed;
}

function moveRight() {
    player.dx = player.speed;
}

function moveLeft() {
    player.dx = -player.speed;
}

function keyDown(e) {
    if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveRight();
    } else if(e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft();
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveUp();
    } else if(e.key === 'ArrowDown' || e.key === 'Down') {
        moveDown();
    }
}

function keyUp(e) {
    if (
        e.key == 'Right' ||
    e.key == 'ArrowRight' ||
    e.key == 'Left' ||
    e.key == 'ArrowLeft' ||
    e.key == 'Up' ||
    e.key == 'ArrowUp' ||
    e.key == 'Down' ||
    e.key == 'ArrowDown'
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);
