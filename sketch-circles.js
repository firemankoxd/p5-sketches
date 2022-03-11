// class Dot{
//   Dot(x,y){
//     this.x=x;
//     this.y=y;
//   }
//   Show(){
//     point(this.x,this.y);
//   }
// }

var x1,y1,x2,y2;
var angle1=0;
var angle2=0;
var angle3=0;
var r1 = 100;
var r2 = 50;
var r3 = 25;

function setup() {
  createCanvas(500,500);
  background(0);
}

function draw() {
  angle1 -= .009;
  angle2 -= .018;
  angle3 -= .027;
  //background(0);
  translate(width/2,height/2);
  stroke(255);
  strokeWeight(4);
  x1 = r1 * cos(angle1);
  y1 = r1 * sin(angle1);
  line(0,0,x1,y1);
  strokeWeight(10);
  stroke(0,255,0);
  point(x1,y1);
  translate(x1,y1);
  strokeWeight(4);
  stroke(255,0,0);
  x2 = r2 * cos(angle2);
  y2 = r2 * sin(angle2);
  line(0,0,x2,y2);
  strokeWeight(10);
  stroke(0,255,0);
  point(x2,y2);
  translate(x2,y2);
  strokeWeight(4);
  stroke(255,0,255);
  x3 = r3 * cos(angle3);
  y3 = r3 * sin(angle3);
  line(0,0,x3,y3);
  strokeWeight(10);
  stroke(0,255,0);
  point(x3,y3);
}
