var pole = [32];
var poleLength = 32;
var pom,step = 0;
var x,count = 0;
var change;

function setup() {
  //frameRate(1);
  createCanvas(500,500);
  background(0,128,128);
  fill(0);
  noStroke();
  for(var i=0; i<poleLength; i++){
    pole[i]=random(0,height);
    step = (width/poleLength)*i;
    rect(step,height-pole[i],width/poleLength-2,pole[i]);
  }
}

function emptyRec(x){
  rect(x-0.6,0,width/poleLength-0.5,height);
}

function draw() {
  change = 0;
  if(pole[count]>pole[count+1]){
    fill(0,128,128);
    step = (width/poleLength)*count;
    emptyRec(step);
    step = (width/poleLength)*(count+1);
    emptyRec(step);
    fill(0);
    step = (width/poleLength)*count;
    rect(step,height-pole[count+1],width/poleLength-2,pole[count+1]);
    step = (width/poleLength)*(count+1);
    rect(step,height-pole[count],width/poleLength-2,pole[count]);
    pom = pole[count];
    pole[count] = pole[count+1];
    pole[count+1] = pom;
    change = 1;
  }
  if(count<poleLength){
    count++;
  } else {
    count = 0;
  }
}
