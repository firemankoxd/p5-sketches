var angle = 0;
var dlzka = 0;
var higher = 1;

function setup() {
  createCanvas(500,500);
  noFill();
  stroke(0);
  strokeWeight(9);
}

function draw() {
  translate(250,250);
  stroke(255,0,0,5);
  var x = dlzka*cos(angle);
  var y = dlzka*sin(angle);
  line(0,0,x,y);
  stroke(0,0,255,5);
  var x = dlzka*sin(angle);
  var y = dlzka*cos(angle);
  line(0,0,x,y);
  angle+=QUARTER_PI/60;
  //angle+=QUARTER_PI/70;
  if(dlzka==250)
    higher=0;
  if(dlzka==0)
    higher=1;
  if(higher){
    dlzka+=1;
  } else {
    dlzka-=1;
  }
}
