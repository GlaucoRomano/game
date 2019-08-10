
let clickCounter = {
  init: 0,
  
  reset: function() {
    this.init = 0;
  },


  draw: function() {
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("score: " + this.init, 20, 585);
    
    if(block.score === 10){
      this.init =+1
    }
    if(block.score === 20){
      this.init =+2
    }
    if(block.score === 30){
      this.init =+3
    }
    if(block.score === 40){
      this.init =+4
    }
    if(block.score === 50){
      this.init =+5
    }
    if(block.score === 60){
      this.init =+6
    }
    if(block.score === 70){
      this.init =+7
    }
    if(block.score === 80){
      this.init =+8
    }
    if(block.score === 90){
      this.init =+9
    }
    if(block.score === 100){
      this.init =+10
    }
    if(block.score === 110){
      this.init =+11
    }
    if(block.score === 120){
      this.init =+12
    }
    if(block.score === 130){
      this.init =+13
    }
    if(block.score === 140){
      this.init =+14
    }
    if(block.score === 150){
      this.init =+15
    }
},
}




