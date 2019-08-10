//Block//////////////////////////////////////////

let block = {
  x: 200,
  y: 0,
  width: 50,
  height: 40,
  color: "yellow",
  gravity: 1.0,
  velocity: 0,
  jumpPower: 10,
  score: 0,


  update: function () {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y > ground.y - this.height) {
      this.y = ground.y - this.height;
    }
  },

  jump: function () {
    this.velocity = -this.jumpPower;
  },

  reset: function() {
    this.score = 0;
  },

  draw: function () {
    
      if(gameStatus == status.playing){
        img.src= "img/char.png"
        ctx.drawImage(img, this.x, this.y, this.width, this.height)
        
      }
    } 
  }
    

  

