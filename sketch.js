var hr,mn,sc;
var hrAngle, mnAgle, scAngle;

function setup() {
  createCanvas(400,400);
  
  //To use angle iin Degrees
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  //Translation and rotation
  translate(200,200);
  rotate(-90);

  //Calculating time using predefiined func from p5.js
  hr = hour();
  mn = minute();
  sc = second();

  //To create ab iterative rotation 
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);

  //drawing second hand
  push();
  //rotate the hand based on calculated
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawing mins hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //drawing hr 
  

  drawSprites();
}