var frameImage, frame;
var hr, min,sec;
var hrAngle, minAngle, secAngle;


function preload(){
  frameImage = loadImage("frame.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); 
  translate(windowWidth/2, windowHeight/2);
  rotate(-90);
  
  hr = hour();
  min = minute();
  sec = second();

  hrAngle = map(hr%12, 0, 12, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);




  //drawing hour hand
  push();
  rotate(hrAngle);
  strokeWeight(8);
  stroke("#0140FF");
  line(0,0,50,0);
  pop();

  push();
  rotate(minAngle);
  strokeWeight(8);
  stroke("green");
  line(0,0,75,0);
  pop();

  push();
  rotate(secAngle);
  strokeWeight(8);
  stroke("red");
  line(0,0,100,0);
  pop();

  stroke("blue");
  strokeWeight(10);
  noFill();
  arc(0,0,300,300,0,hrAngle);

  stroke("green");
  strokeWeight(10);
  noFill();
  arc(0,0,325,325,0,minAngle);

  stroke("red");
  strokeWeight(10);
  noFill();
  arc(0,0,350,350,0,secAngle);

  drawSprites();
}