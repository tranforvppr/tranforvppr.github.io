let level;
let easing;
let millisMarker;
let renderer;

let isMobile;

let headerY;
let headerTransparency;

let hasScrolled;
let footerTransparency;

let offsetTitle;
let titleX;
let titleTransparency;
let underlineLength;

let josefin;
let josefinItalic;
let montsserat;

let gradient;
let logo;

let cursorX;
let cursorY;

let offsetLogo;
let offsetWhoAmI;
let offsetInitiative;
let offsetInnovation;
let offsetInclusivity;

function tween(currentValue, targetValue) {
  let newValue = currentValue;
  newValue += (targetValue - currentValue) * easing;
  return newValue;
}

function mouseTween(currentValue, targetValue) {
  let newValue = currentValue;
  newValue += (targetValue - currentValue) * 0.2;
  return newValue;
}

function titleTween(currentValue, targetValue) {
  let newValue = currentValue;
  newValue += (targetValue - currentValue) * 0.1;
  return newValue;
}

function levelSetup() {
  if (level == "home") {
    easing = 0.05;
    millisMarker = millis();
    headerY = -windowHeight/10
      headerTransparency = 0;
    offsetWhoAmI = 0;
    offsetInitiative = 0;
    offsetInnovation = 0;
    offsetInclusivity = 0;
    offsetLogo = 0;
    offsetTitle = height/2;
    titleX = 0.1 * width;
    titleTransparency = 0;
    underlineLength = 0;
    hasScrolled = false;
    footerTransparency = 0;
  }

  if (level == "mobileHome") {
    easing = 0.1;
    millisMarker = millis();
    headerY = -windowHeight/10
      headerTransparency = 0;
    offsetWhoAmI = 0;
    offsetInitiative = 0;
    offsetInnovation = 0;
    offsetInclusivity = 0;
  }
}

function preload() {
  josefin = loadFont('assets/josefin.ttf');
  montsserat = loadFont('assets/montsserat.ttf');
  josefinItalic = loadFont('assets/josefin_italic.ttf');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  renderer = createCanvas(windowWidth, windowHeight);
  renderer.canvas.style.display = 'block';
  document.title = "The Tran Plan";

  gradient = loadImage('assets/gradient.png');
  logo = loadImage('assets/logo.png');

  noCursor();

  if (width > height) {
    isMobile = false;
    level = "home";
  } else {
    isMobile = true;
    level = "mobileHome";
  }

  cursorX = width/2;
  cursorY = height/2;

  levelSetup();
}

function draw() {
  background(238, 165, 166)

    tint(255);
  imageMode(CORNER);
  image(gradient, 0, 0, width, height);

  if (level == "home") {

    /*fill(0);
     stroke(255);
     strokeWeight(1);
     rect(0.8 * width, headerY, 0.2 * width, height/5);
     rect(0.6 * width, headerY, 0.2 * width, height/5);
     rect(0.4 * width, headerY, 0.2 * width, height/5);
     rect(0.2 * width, headerY, 0.2 * width, height/5);
     rect(0, headerY, 0.2 * width, height/5);*/

    //header
    fill(255, 255, 255, headerTransparency);
    noStroke();
    textSize(20);
    textFont(josefin);
    textAlign(CENTER);
    text("INCLUSIVITY", 0.9 * width, headerY + height/10 + offsetInclusivity);
    text("INNOVATION", 0.7 * width, headerY + height/10 + offsetInnovation);
    text("INITIATIVE", 0.5 * width, headerY + height/10 + offsetInitiative);
    text("WHO AM I", 0.3 * width, headerY + height/10 + offsetWhoAmI);

    tint(255, headerTransparency);
    imageMode(CENTER);
    image(logo, 0.1 * width, headerY + height/12 + offsetLogo, height/10, height/10);

    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(100);
    textFont(montsserat);
    textAlign(LEFT);
    text("It's time to make OSA", titleX, height/2 + offsetTitle);

    textFont(josefinItalic);
    text("BETTER", titleX, 0.675 * height + offsetTitle);

    //footer
    fill(255, 255, 255, footerTransparency);
    noStroke();
    textSize(20);
    textFont(josefin);
    textAlign(CENTER);
    text("[SCROLL] & [UP/DOWN ARROW]", width/2, 0.9 * height);


    if (mouseX > 0.8 * width && mouseX < 1.0 * width && mouseY < headerY + height/5) {
      offsetInclusivity = tween(offsetInclusivity, 20);
      offsetInnovation = tween(offsetInnovation, 0);
      offsetInitiative = tween(offsetInitiative, 0);
      offsetWhoAmI = tween(offsetWhoAmI, 0);
      offsetLogo = tween(offsetLogo, 0);
    } else {
      if (mouseX > 0.6 * width && mouseX < 0.8 * width && mouseY < headerY + height/5) {
        offsetInclusivity = tween(offsetInclusivity, 0);
        offsetInnovation = tween(offsetInnovation, 20);
        offsetInitiative = tween(offsetInitiative, 0);
        offsetWhoAmI = tween(offsetWhoAmI, 0);
        offsetLogo = tween(offsetLogo, 0);
      } else {
        if (mouseX > 0.4 * width && mouseX < 0.6 * width && mouseY < headerY + height/5) {
          offsetInclusivity = tween(offsetInclusivity, 0);
          offsetInnovation = tween(offsetInnovation, 0);
          offsetInitiative = tween(offsetInitiative, 20);
          offsetWhoAmI = tween(offsetWhoAmI, 0);
          offsetLogo = tween(offsetLogo, 0);
        } else {
          if (mouseX > 0.2 * width && mouseX < 0.4 * width && mouseY < headerY + height/5) {
            offsetInclusivity = tween(offsetInclusivity, 0);
            offsetInnovation = tween(offsetInnovation, 0);
            offsetInitiative = tween(offsetInitiative, 0);
            offsetWhoAmI = tween(offsetWhoAmI, 20);
            offsetLogo = tween(offsetLogo, 0);
          } else {
            if (mouseX < 0.2 * width && mouseY < headerY + height/5) {
              offsetInclusivity = tween(offsetInclusivity, 0);
              offsetInnovation = tween(offsetInnovation, 0);
              offsetInitiative = tween(offsetInitiative, 0);
              offsetWhoAmI = tween(offsetWhoAmI, 0);
              offsetLogo = tween(offsetLogo, 20);
            } else {
              offsetInclusivity = tween(offsetInclusivity, 0);
              offsetInnovation = tween(offsetInnovation, 0);
              offsetInitiative = tween(offsetInitiative, 0);
              offsetWhoAmI = tween(offsetWhoAmI, 0);
              offsetLogo = tween(offsetLogo, 0);
            }
          }
        }
      }
    }

    if (millis() - millisMarker < 3500) {
      offsetTitle = tween(offsetTitle, 0);
      titleTransparency = tween(titleTransparency, 255);
    }

    if (millis() - millisMarker > 1500) {
      underlineLength = titleTween(underlineLength, 400);
      fill(255);
      noStroke();
      rect(0.1 * width, 0.7 * height, underlineLength, 5);
    }

    if (millis() - millisMarker > 3000 && millis() - millisMarker < 5000) {
      headerY = tween(headerY, 0);
      headerTransparency = tween(headerTransparency, 255);
    }

    if (millis() - millisMarker > 5000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "mobileHome") {

    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, headerY + height/6, 0.1 * width, 5);
    rect(0.8 * width, headerY + height/6 + 15, 0.1 * width, 5);
    rect(0.8 * width, headerY + height/6 + 30, 0.1 * width, 5);

    if (millis() - millisMarker > 2000 && millis() - millisMarker < 3000) {
      headerTransparency = tween(headerTransparency, 255);
    }
  }

  if (isMobile == false) {
    //cursor
    fill(0, 0, 0, 20);
    stroke(255);
    strokeWeight(2);
    circle(cursorX, cursorY, 20);
    cursorX = mouseTween(cursorX, mouseX);
    cursorY = mouseTween(cursorY, mouseY);
  }
}

function mousePressed() {
  print(mouseX, mouseY);
}

function mouseWheel(event) {
  if (millis() - millisMarker > 5000) {
    hasScrolled = true;
    if (event.delta > 0) {
      //abc
    } else {
      //piss
    }
  }
}

function keyPressed() {
  if (millis() - millisMarker > 5000) {
    if (keyCode == UP_ARROW) {
      hasScrolled = true;
    }

    if (keyCode == DOWN_ARROW) {
      hasScrolled = true;
    }
  }
}