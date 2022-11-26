let img;
let b=20;
let fr=1;

function preload(){
  img=loadImage("ss.png");
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  smallBlob=2;
  largeBlob=20;
  imageMode(CENTER);
  strokeWeight(0.2);
  stroke(0,50);
  background(b);
  img.loadPixels();
  frameRate(fr);
  
}


function draw() {
  
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x,y);

  for(let i=0;i<width;i+=10){
    for(let j=0;j<height;j+=10){
      push();
      fill(pix,100);
      rect(i,j,2,4);
      ellipse(i,j,4,4);
      pop();
      fill(b,200);
      rect(i,j,2,4);
      rect(i,j,2,2);
      ellipse(i,j,4,4);
      ellipse(i,j,4,2);
      
    }
  }
}
