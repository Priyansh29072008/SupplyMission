class plane {
    constructor(x,y){
      this.image = loadImage("raff.png");
    }
  
    display() {
    this.body.position.x=mouseX;
    this.body.position.y=mouseY;
    }
  }