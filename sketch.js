let level = "home";
let easing;
let millisMarker;

let headerY;

function tween(currentValue, targetValue) {
    let newValue = currentValue;
    newValue += (targetValue - currentValue) * easing;
    return newValue;
}

function levelSetup() {
  if (level == "home") {
    easing = 0.02;
    millisMarker = millis();
    headerY = -windowHeight/10
    print(headerY);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  levelSetup();
}

function draw() {
  background(238,165,166)
  
  if (level == "home") {
    headerY = tween(headerY, 0);
    
    fill(255, 255, 255);
    rect(0, headerY, windowWidth, windowHeight/10);
  }
}

function mousePressed() {
  headerY = -windowHeight/10
}