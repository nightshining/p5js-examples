var r;
var g;
var b;
var a;
 
var diam;
var x;
var y;
 
function preload(  ) {
  
} 
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255); 
}
 
function draw() {
  // Each time through draw(), new random
  // numbers are picked for a new ellipse.
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(255);
  diam = random(20);
  x = random(-20,20) + mouseX;
  y = random(-20,20) + mouseY;
 
  // Use values to draw an ellipse
  noStroke();
  fill(r, g, b, a);
  ellipse(x, y, diam, diam);
}