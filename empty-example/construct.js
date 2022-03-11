var r = 20;
var k = 1;

class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(0.5,0);
    this.acc = createVector(0,0.1);
  }

  update(){
    if(this.pos.y>height-r){
      this.vel = createVector(this.vel.x*k*2,-8*k);
      this.pos.add(this.vel);
      k/=1.5;
    }else{
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }
  }

  show(){
    noFill();
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 2*r);
  }

}
