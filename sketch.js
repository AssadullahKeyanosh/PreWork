// declare any variables you need here.
// var x, y, etc..
// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.

function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(400, 400);
}

var sunX = 40;
draw = function () {
  background(200, 200, 255);
  strokeWeight(1);
  fill(238, 255, 0);
  ellipse(sunX, 40, 60, 60); // sun
  sunX = sunX + 1;
  if (sunX == 440) {
    sunX = 0;
  }

  strokeWeight(1);
  fill(255, 255, 255); // snowman color

  ellipse(200, 120, 75, 75); //top ellipse
  ellipse(200, 200, 100, 100); // central ellips
  ellipse(200, 300, 150, 150); // bottom ellipse

  fill(0, 0, 0); // eye color
  ellipse(190, 105, 10, 10); //left eye
  ellipse(210, 105, 10, 10); //left eye

  fill(200, 22, 22);
  ellipse(200, 135, 30, 20); //mouth

  fill(255, 205, 180); // ground color
  rect(0, 360, 398, 35); // ground

  strokeWeight(10);
  stroke(255, 205, 180);
  line(200, 115, 190, 120); // nose

  strokeWeight(10);
  stroke(139, 140, 145);
  line(50, 120, 153, 185); // right hand
  line(350, 120, 247, 185); // left hand
};
