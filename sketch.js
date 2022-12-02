let img;
const backgroundColor = 0;
const textContent = ' Congratulations!\n You have either made it to the end or decided to click here for some reason.\n You do not win a puppy.';

function preload() {
  img = loadImage('backgroundImage.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  strokeWeight(0.2);
  stroke(0, 50);
  background(backgroundColor);
  img.loadPixels();

  const message = createP(textContent);
  message.position(0, height / 3);
  message.class('invisible');
}

function draw() {
  for (let i = 0; i < width; i += 50) {
    for (let j = 0; j < height; j += 50) {
      const pix = img.get(i, random(j));
      push();
      fill(pix, 100);
      rect(i, j, 20, 200);
      noStroke();
      ellipse(i, j, 40, 200);
      pop();
      fill(backgroundColor);
      rect(i, j, 20, 40);
      rect(i, j, 20, 20);
      ellipse(i, j, 40, 40);
      ellipse(i, j, 40, 20);
    }
  }

  fill(255);
  textSize(36);
  text(textContent, 0, height / 2);
}
