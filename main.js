//Variables///////////////////////////////////////////START

let canvas,
  ctx,
  HEIGHT,
  WIDTH,
  frames = 0,
  gameStatus,
  img,
  

  status = {
    play: 0,
    playing: 1,
    lose: 2,
  },

  ground = {
    y: 490,
    height: 50,
    color: "black",
    
    draw: function () {
      if(gameStatus == status.playing){
      ctx.fillStyle = this.color;
      ctx.fillRect(0, this.y, WIDTH, this.height);
    }
    }},

 
obstacles = [];
obstacles.push(new Obstacle(850, 10, 20, 20,));
obstacles.push(new Obstacle(850, Math.floor(Math.random() * 300 + 70), 20, 20,));
obstacles.push(new Obstacle(850, 430, 20, 20,));

//Variables///////////////////////////////////////////END



//Functions//////////////////////////////////////////START

function run() {
  update();
  draw();
  
  window.requestAnimationFrame(run);
}


function update() {
  frames++;
  block.update();
  
  // loop over obstacles array and update
  if(gameStatus == status.playing){
    
  obstacles.forEach(obstacle => {
  obstacle.update();

    if (intersect(obstacle, block)){
      gameStatus = status.lose
      
    
      }}
  );
  
  if (frames % 60 === 0) {
    obstacles.push(new Obstacle(850, 10, 20, 20));
  }

  if (frames % 40 === 0) {
    obstacles.push(new Obstacle(850, Math.floor(Math.random() * 300 + 70), 20, 20));
  }

  if (frames % 70 === 0) {
    obstacles.push(new Obstacle(850, 430, 20, 20));
  }
  }
  
}


function click(event) {

 
  if (gameStatus == status.playing){
    block.jump();
    block.score++;
    
    }

   
}

function logKey(e) {

  if(gameStatus == status.lose){
    location.reload();
    gameStatus = status.play;
    
  }

  if(gameStatus == status.play){ 

    block.reset();
    clickCounter.reset();
    gameStatus = status.playing;
    
    
  }

  
}


function clean(){
  this.obstacles = [];
}

gameOver = new Image();
gameOver.src = "img/gameover.png";

background = new Image();
background.src = "img/bg3.jpg";


function draw() {
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.drawImage(background,0,0);   

  // Clicks Display
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText("clicks: " + block.score, 660, 585);

  // Points Display
  
  
  if(gameStatus == status.play){ 
    
    ctx.fillStyle = "white";
    ctx.font = "40px Arial";
    ctx.fillText("PRESS ANY KEY TO PLAY", 150, 425);
    
    
  }

  if(gameStatus == status.lose){
    ctx.drawImage(gameOver,275,200);
    obstacles.forEach(obstacle => {
      obstacle.draw();
      
    
    })
  };
  
  if(gameStatus == status.playing){
  // loop over obstacles array and draw
  obstacles.forEach(obstacle => {
  obstacle.draw();

})


  }
  clickCounter.draw();
  block.draw();

  };

function main() {
  HEIGHT = 600;
  WIDTH = 800;

  if (WIDTH >= 600) {
    WIDTH = 800;
    HEIGHT = 600;
  }

  canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  canvas.style.border = "3px solid purple";

  ctx = canvas.getContext("2d");

  document.body.appendChild(canvas);
  document.addEventListener("mousedown", click);
  document.addEventListener("keydown", logKey);
 
  gameStatus = status.play;
  
  run();
}
//Functions//////////////////////////////////////////END

window.onload = () => {
  main();
  
}
