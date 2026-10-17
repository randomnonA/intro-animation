let x = 0;
let y = 0;
let rc;

function setup() {
  createCanvas(1200, 1200);
  frameRate(10);
}

function draw() {
  //Having background replaces everything else since the code calls on draw all the time
  background(165, 219, 191);
  //greyscale ONLY
  rc = [random(0), random(100), random(200), random(255)];
  let cc = rc[frameCount % rc.length];
  fill(cc);
  stroke(random(255), random(255), random(255));
  strokeWeight(5);
  rect(x, y, 300, 200);
  x += 10;
  y += 7;
  
  if (x > width) {
    x = random(width - 200);
  }
  
  if (y > height) {
    y = random(height + 200);
  }
  
  noStroke();
  strokeWeight(10);
  textSize(20);
  text('Frame #: ' + frameCount, x, y - 20);
  text('FPS: ' + frameRate(), x, y + 230);
}