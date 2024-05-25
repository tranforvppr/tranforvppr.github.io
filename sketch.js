let level = "home";

function levelSetup() {
  
}

function setGradient(x, y, w, h, c1, c2) {
  for (let i = x; i <= x + w; i++) {
    for (let j = y; j <= y + h; j++) {
      let inter = (i + j) / (w + h);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      point(i, j);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //setGradient(0, 0, width, height, color(255, 0, 0), color(0, 0, 255));
  background(255,0,0)
}