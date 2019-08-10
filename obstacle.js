//Obstacle//////////////////////////////////////////

// ES 6 -> class
class Obstacle {
  constructor(x, y, width, height, ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed =  Math.floor(Math.random() * -2 -3);

  }

  update() {
    this.x += this.speed;
  }

  draw() {
    
    img = new Image()
        img.src= "img/meteor.png"
        ctx.drawImage(img, this.x, this.y, this.width, this.height)
    
  }

}
