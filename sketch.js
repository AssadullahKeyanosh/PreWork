// declare any variables you need here.
// var x, y, etc..
// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.

function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(400, 400);
}

function draw() {
  //call your functions and do your drawing here.
  // please erase code below once you are working.
  background(200, 200, 255);
  fill(255, 255, 255); // snowman color
  noStroke();
  ellipse(200, 120, 75, 75); //top ellipse
  ellipse(200, 200, 100, 100); // central ellips
  ellipse(200, 300, 150, 150); // bottom ellipse

  fill(255, 205, 180); // ground color
  rect(0, 360, 398, 35); // ground

  strokeWeight(4);
  stroke(139, 140, 145);
  line(50, 120, 153, 185); // right hand
  line(350, 120, 247, 185); // left hand
}
