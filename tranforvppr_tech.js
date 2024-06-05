//big ballz mrow :3
//abcdefg
let level;
let easing;
let millisMarker;
let touchCooldown;
let renderer;

let isMobile;
let recentPage;

let headerY;
let headerTransparency;

let hasScrolled;
let footerTransparency;

let offsetTitle;
let titleX;
let titleTransparency;
let underlineLength;

let bodyTransparency;
let osaX;
let osaY;

let infoX;

let josefin;
let josefinItalic;
let montserrat;
let montserratBI;

let gradient;
let logo;
let clickIcon;
let osa;
let initiative;
let innovation;
let inclusivity;
let website;

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

function inTween(currentValue, targetValue, easing) {
  // Calculate the new value based on the current and target values
  let newValue = currentValue + (targetValue - currentValue) * easing;
  return newValue;
}

function titleTween(currentValue, targetValue) {
  let newValue = currentValue;
  newValue += (targetValue - currentValue) * 0.1;
  return newValue;
}

function levelSetup() {
  if (level == "home") {
    easing = 0.1;
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
    bodyTransparency = 0;
    osaX = width;
  }

  if (level == "mobileHome") {
    recentPage = "mobileHome";
    easing = 0.1;
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
    bodyTransparency = 0;
    osaY = height;
  }

  if (level == "mobileMenu") {
    easing = 0.1;
    millisMarker = millis();
    titleX = 0;
    titleTransparency = 0;
  }

  if (level == "initiative") {
    easing = 0.1;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = false;
    footerTransparency = 0;
    bodyTransparency = 0;
  }

  if (level == "initiative1") {
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = false;
    bodyTransparency = 0;
    infoX = width;
  }

  if (level == "initiative2") {
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = true;
    bodyTransparency = 0;
    infoX = width;
  }

  if (level == "mobileInitiative") {
    recentPage = "mobileInitiative";
    easing = 0.1;
    millisMarker = millis();
    headerY = -windowHeight/10
      offsetWhoAmI = 0;
    offsetInitiative = 0;
    offsetInnovation = 0;
    offsetInclusivity = 0;
    offsetLogo = 0;
    offsetTitle = height/2;
    titleX = 0;
    titleTransparency = 0;
    underlineLength = 0;
    hasScrolled = false;
    footerTransparency = 0;
    bodyTransparency = 0;
    osaY = height;
  }

  if (level == "mobileInitiative1") {
    recentPage = "mobileInitiative1";
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = false;
    bodyTransparency = 0;
    infoX = width;
  }

  if (level == "mobileInitiative2") {
    recentPage = "mobileInitiative2";
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = false;
    bodyTransparency = 0;
    infoX = width;
  }

  if (level == "mobileInitiative3") {
    recentPage = "mobileInitiative3";
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = false;
    bodyTransparency = 0;
    infoX = width;
  }

  if (level == "mobileInitiative4") {
    recentPage = "mobileInitiative4";
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = true;
    bodyTransparency = 0;
    infoX = width;
  }

  if (level == "innovation") {
    easing = 0.1;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = false;
    footerTransparency = 0;
    bodyTransparency = 0;
  }

  if (level == "innovation1") {
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = false;
    bodyTransparency = 0;
    infoX = width;
  }

  if (level == "innovation2") {
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = true;
    bodyTransparency = 0;
    infoX = width;
  }

  if (level == "mobileInnovation") {
    recentPage = "mobileInnovation";
    easing = 0.1;
    millisMarker = millis();
    headerY = -windowHeight/10
      offsetWhoAmI = 0;
    offsetInitiative = 0;
    offsetInnovation = 0;
    offsetInclusivity = 0;
    offsetLogo = 0;
    offsetTitle = height/2;
    titleX = 0;
    titleTransparency = 0;
    underlineLength = 0;
    hasScrolled = false;
    footerTransparency = 0;
    bodyTransparency = 0;
    osaY = height;
  }

  if (level == "mobileInnovation1") {
    recentPage = "mobileInnovation1";
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = false;
    bodyTransparency = 0;
    infoX = width;
  }

  if (level == "mobileInnovation2") {
    recentPage = "mobileInnovation2";
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = false;
    bodyTransparency = 0;
    infoX = width;
  }

  if (level == "mobileInnovation3") {
    recentPage = "mobileInnovation3";
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = true;
    bodyTransparency = 0;
    infoX = width;
  }

  if (level == "inclusivity") {
    easing = 0.1;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = false;
    footerTransparency = 0;
    bodyTransparency = 0;
  }
  
  if (level == "inclusivity1") {
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = false;
    bodyTransparency = 0;
    infoX = width;
  }
  
  if (level == "inclusivity2") {
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = true;
    bodyTransparency = 0;
    infoX = width;
  }
  
  if (level == "mobileInclusivity") {
    recentPage = "mobileInclusivity";
    easing = 0.1;
    millisMarker = millis();
    headerY = -windowHeight/10
      offsetWhoAmI = 0;
    offsetInitiative = 0;
    offsetInnovation = 0;
    offsetInclusivity = 0;
    offsetLogo = 0;
    offsetTitle = height/2;
    titleX = 0;
    titleTransparency = 0;
    underlineLength = 0;
    hasScrolled = false;
    footerTransparency = 0;
    bodyTransparency = 0;
    osaY = height;
  }
  
  if (level == "mobileInclusivity1") {
    recentPage = "mobileInclusivity1";
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = false;
    bodyTransparency = 0;
    infoX = width;
  }
  
  if (level == "mobileInclusivity2") {
    recentPage = "mobileInclusivity2";
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = false;
    bodyTransparency = 0;
    infoX = width;
  }
  
  if (level == "mobileInclusivity3") {
    recentPage = "mobileInclusivity3";
    easing = 0.08;
    millisMarker = millis();
    offsetLogo = 0;
    titleX = 0;
    titleTransparency = 0;
    offsetTitle = height/2;
    underlineLength = 0;
    hasScrolled = true;
    bodyTransparency = 0;
    infoX = width;
  }
}

function preload() {
  josefin = loadFont('assets/josefin.ttf');
  montserrat = loadFont('assets/montserrat.ttf');
  josefinItalic = loadFont('assets/josefin_italic.ttf');
  montserratBI = loadFont('assets/montserrat_bold_italic.ttf');

  gradient = loadImage('assets/gradient.png');
  logo = loadImage('assets/logo.png');
  clickIcon = loadImage('assets/click.png');
  osa = loadImage('assets/osa.png');
  initiative = loadImage('assets/initiative.png');
  innovation = loadImage('assets/innovation.png');
  inclusivity = loadImage('assets/inclusivity.png');
  website = loadImage ('assets/website.png');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight + 50);
}

function setup() {
  renderer = createCanvas(windowWidth, windowHeight + 50);
  renderer.canvas.style.display = 'block';
  document.title = "The Tran Plan";

  if (width > height) {
    isMobile = false;
    level = "home";
    noCursor();
  } else {
    isMobile = true;
    level = "mobileHome";
  }
  
  touchCooldown = millis();

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
    textFont(montserrat);
    textAlign(LEFT);
    text("It's time to make OSA", titleX, 0.4 * height + offsetTitle);

    textFont(josefinItalic);
    text("BETTER", titleX, 0.4 * height + offsetTitle + 140);

    fill(255, titleTransparency);
    noStroke();
    rect(titleX, 0.4 * height + 160, underlineLength, 5);

    //body
    fill(255, 255, 255, bodyTransparency);
    noStroke();
    textSize(100);
    textFont(josefinItalic);
    textAlign(LEFT);
    text("The Tran \nPlan", 0.1 * width, 0.3 * height + 25);

    fill(255, 255, 255, bodyTransparency);
    noStroke();
    textSize(30);
    textFont(montserrat);
    textAlign(LEFT);
    text("I'm Arthur Tran, and I'm looking forward \nto making the BEST SU with my PR skills! \n \nThrough this website, you'll see all the \nqualities that make me stand out, as well \nas how SU will be run by me.", 0.1 * width, 0.3 * height + 225);

    tint(255, 200, 200, bodyTransparency);
    imageMode(LEFT);
    image(osa, osaX, 0.55 * height, height/1.2, height/1.2);

    //footer
    /*tint(255, footerTransparency);
     imageMode(CENTER);
     image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);*/

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

    if (millis() - millisMarker < 2000) {
      offsetTitle = tween(offsetTitle, 0);
      titleTransparency = tween(titleTransparency, 255);
    }

    if (millis() - millisMarker > 1000 && millis() - millisMarker < 2000) {
      underlineLength = titleTween(underlineLength, 400);
    }

    if (millis() - millisMarker > 2000 && millis() - millisMarker < 4000) {
      headerY = tween(headerY, 0);
      headerTransparency = tween(headerTransparency, 255);
    }

    if (millis() - millisMarker > 2000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }

    if (millis() - millisMarker > 2000) {
      titleX = tween(titleX, 0);
      titleTransparency = tween(titleTransparency, 0);
      underlineLength = tween(underlineLength, 0);
    }

    if (millis() - millisMarker > 2500) {
      osaX = tween(osaX, 0.75 * width);
      bodyTransparency = tween(bodyTransparency, 255);
    }
  }

  if (level == "mobileHome") {

    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);

    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(50);
    textFont(montserrat);
    textAlign(LEFT);
    text("It's time \nto make OSA", titleX, 0.3 * height + offsetTitle);

    textFont(josefinItalic);
    textSize(70);
    text("BETTER", titleX, 0.3 * height + offsetTitle + 150);

    fill(255, titleTransparency);
    noStroke();
    rect(titleX, 0.3 * height + 170, underlineLength, 5);

    //body
    fill(255, 255, 255, bodyTransparency);
    noStroke();
    textSize(50);
    textFont(josefinItalic);
    textAlign(LEFT);
    text("The Tran \nPlan", 0.1 * width, 0.2 * height);

    fill(255, 255, 255, bodyTransparency);
    noStroke();
    textSize(20);
    textFont(montserrat);
    textAlign(LEFT);
    text("I'm Arthur Tran, and I'm looking \nforward to making SU the BEST \nwith my PR skills! \n \nThrough this website, you'll see \nall the qualities that make \nme stand out, as well as how \nSU will be run by me.", 0.1 * width, 0.2 * height + 100);

    tint(255, 200, 200, bodyTransparency);
    imageMode(CENTER);
    image(osa, width/2, osaY, width/2, width/2);

    if (millis() - millisMarker < 2000) {
      offsetTitle = tween(offsetTitle, 0);
      titleTransparency = tween(titleTransparency, 255);
    }

    if (millis() - millisMarker > 1000 && millis() - millisMarker < 2000) {
      underlineLength = titleTween(underlineLength, 275);
    }

    if (millis() - millisMarker > 2000 && millis() - millisMarker < 4000) {
      headerY = tween(headerY, 0);
      headerTransparency = tween(headerTransparency, 255);
    }

    if (millis() - millisMarker > 2000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }

    if (millis() - millisMarker > 2000) {
      titleX = tween(titleX, 0);
      titleTransparency = tween(titleTransparency, 0);
      underlineLength = tween(underlineLength, 0);
    }

    if (millis() - millisMarker > 2500) {
      osaY = tween(osaY, 0.2 * height + 400);
      bodyTransparency = tween(bodyTransparency, 255);
    }
  }

  if (level == "mobileMenu") {
    //menu
    stroke(255, 255, 255, titleTransparency);
    strokeWeight(5);
    line(0.8 * width, 0.1 * width, 0.9 * width, 0.2 * width);
    line(0.8 * width, 0.2 * width, 0.9 * width, 0.1 * width);

    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(40);
    textFont(josefin);
    textAlign(LEFT);
    text("HOME", titleX, 0.12 * height);
    text("WHO AM I", titleX, 0.3 * height);
    text("INITIATIVE", titleX, 0.5 * height);
    text("INNOVATION", titleX, 0.7 * height);
    text("INCLUSIVITY", titleX, 0.9 * height);

    titleX = tween(titleX, 0.1 * width);
    titleTransparency = tween(titleTransparency, 255);
  }

  if (level == "initiative") {
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
    textSize(75);
    textFont(josefin);
    textAlign(LEFT);
    text("INITIATIVE", titleX, 0.3 * height);

    fill(255, titleTransparency);
    noStroke();
    rect(titleX, 0.3 * height + 20, underlineLength, 5);

    fill(255, 255, 255, bodyTransparency);
    noStroke();
    textSize(40);
    textFont(josefinItalic);
    textAlign(LEFT); //When Arthur speaks, it's as if the \nheavens themselves pause to listen.
    text("''One of the most diligent people I've ever \nworked with.''", 0.1 * width, 0.3 * height + 100);
    textSize(30);
    textFont(montserrat);
    text("- Prabhleen Gill, Smile Club President", 0.1 * width, 0.3 * height + 200);

    tint(255, 200, 200, bodyTransparency);
    imageMode(CENTER);
    image(initiative, 0.8 * width, 0.55 * height, height/1.5, height/1.5);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);


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

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);


    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      underlineLength = titleTween(underlineLength, 400);
    }

    if (millis() - millisMarker > 1000) {
      bodyTransparency = tween(bodyTransparency, 255);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "initiative1") {
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
    textSize(50);
    textFont(montserratBI);
    textAlign(LEFT);
    text("Olympians Replay", titleX, 0.3 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(25);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    //text("Do you want to see the OSA team dominate in badminton, yet you’re too busy to watch in person? With me as your VPPR, enjoy a new way to watch your classmates excel in events such as volleyball matches, SkillsCanada competitions, and music concerts! Your soccer games, debate competitions, Reach for the Top matches, and more will be recorded and broadcasted for students, staff, and family to cheer you on.", infoX, 0.3 * height + 60, 0.4 * width);
    text("Do you want to see the OSA team dominate in", infoX, 0.3 * height + 60);
    text("badminton, yet you’re too busy to watch in", infoX, 0.3 * height + 95);
    text("person? With me as your VPPR, enjoy a new way", infoX, 0.3 * height + 130);
    text("to watch your classmates excel in events such as", infoX, 0.3 * height + 165);
    text("volleyball matches, SkillsCanada competitions,", infoX, 0.3 * height + 200);
    text("and music concerts! Your soccer games, debate", infoX, 0.3 * height + 235);
    text("competitions, Reach for the Top matches, and", infoX, 0.3 * height + 270);
    text("more will be recorded and broadcasted for", infoX, 0.3 * height + 305);
    text("students, staff, and family to cheer you on.", infoX, 0.3 * height + 340);

    //text("Everyone at OSA has exceptional talents, \nwhether it’s in trivia, public speaking, or any \nother activity. Olympians Replay ensures that \nyour time at Old Scona will be a lifetime memory \nby also letting you look back at archives of \nrecordings and highlights of your skills being \nused in sports, debate, and so on. Olympians \nReplay is a hub for our school community to \nengage and strengthen our school community \nand pride. Wherever you are, Olympians Replay \nwill be the channel to watch our school thrive \nfrom the talented students we have here!", infoX + 0.4 * width + 50, 0.3 * height + 60, 0.4 * width);
    text("Everyone at OSA has exceptional talents,", infoX + 0.4 * width + 50, 0.3 * height - 35);
    text("whether it’s in trivia, public speaking, or any", infoX + 0.4 * width + 50, 0.3 * height);
    text("other activity. Olympians Replay ensures that", infoX + 0.4 * width + 50, 0.3 * height + 35);
    text("your time at Old Scona will be a lifetime memory", infoX + 0.4 * width + 50, 0.3 * height + 70);
    text("by also letting you look back at archives of", infoX + 0.4 * width + 50, 0.3 * height + 105);
    text("recordings and highlights of your skills being", infoX + 0.4 * width + 50, 0.3 * height + 140);
    text("used in sports, debate, and so on. Olympians", infoX + 0.4 * width + 50, 0.3 * height + 175);
    text("Replay is a hub for our school community to", infoX + 0.4 * width + 50, 0.3 * height + 210);
    text("engage and strengthen our school community", infoX + 0.4 * width + 50, 0.3 * height + 245);
    text("and pride. Wherever you are, Olympians Replay", infoX + 0.4 * width + 50, 0.3 * height + 280);
    text("will be the channel to watch our school thrive", infoX + 0.4 * width + 50, 0.3 * height + 315);
    text("from the talented students we have here!", infoX + 0.4 * width + 50, 0.3 * height + 350);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

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

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "initiative2") {
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
    textSize(50);
    textFont(montserratBI);
    textAlign(LEFT);
    text("SU Insiders", titleX, 0.3 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(20);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("Imagine SU decides to set up an event on Friday during the afternoon. MSA holds their usual Jummah prayer around this time, and Muslim students must leave the event for their religious practice. \n \nPerhaps Music Club wants to make an incredible performance in Winter LIT. Without proper information provided to them before the event happens, the Music Club will have very little time and knowledge to prepare and practice for this event. \n \nClubs need more information before events begin to serve their members better.", infoX, 0.3 * height + 60, 0.4 * width);

    text("The SU Insiders Program will be a selected group of students and executives from each council and club representing diverse demographics within the school to help provide extensive feedback for school and club events through event sneak peeks, event rehearsals, and post-event debriefs. \n \nEvent reports made by the SU Insiders Program will be kept and provided for future years, when future Students’ Union members host the same events we host today. The SU Insiders Program slowly improves SU events over time as it ensures that every mistake and flaw we make will be resolved by the students in the future.", infoX + 0.4 * width + 50, 0.3 * height + 60, 0.4 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

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

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "mobileInitiative") {
    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);


    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(50);
    textFont(josefin);
    textAlign(LEFT);
    text("INITIATIVE", titleX, 0.2 * height);

    fill(255, titleTransparency);
    noStroke();
    rect(titleX, 0.2 * height + 20, underlineLength, 5);

    fill(255, 255, 255, bodyTransparency);
    noStroke();
    textSize(25);
    textFont(josefinItalic);
    textAlign(LEFT); //When Arthur speaks, it's as if the \nheavens themselves pause to listen.
    textWrap(WORD);
    text("''One of the most diligent \npeople I've ever worked with.''", 0.1 * width, 0.2 * height + 70, 0.8 * width);
    textSize(15);
    textFont(montserrat);
    text("- Prabhleen Gill, Smile Club President", 0.1 * width, 0.2 * height + 160, 0.8 * width);

    tint(255, 200, 200, bodyTransparency);
    imageMode(CENTER);
    image(initiative, width/2, 0.65 * height, 0.5 * width, 0.5 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      underlineLength = titleTween(underlineLength, 280);
    }

    if (millis() - millisMarker > 1000) {
      bodyTransparency = tween(bodyTransparency, 255);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "mobileInitiative1") {
    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);


    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(30);
    textFont(montserratBI);
    textAlign(LEFT);
    text("Olympians \nReplay", titleX, 0.2 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(18);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("Do you want to see the OSA team dominate in badminton, yet you’re too busy to watch in person? With me as your VPPR, enjoy a new way to watch your classmates excel in events such as volleyball matches, SkillsCanada competitions, and music concerts! \n\nYour soccer games, debate competitions, Reach for the Top matches, and more will be recorded and broadcasted for students, staff, and family to cheer you on.", infoX, 0.2 * height + 80, 0.8 * width);

    //text("Everyone at OSA has exceptional talents, whether it’s in trivia, public speaking, or any other activity. Olympians Replay ensures that your time at Old Scona will be a lifetime memory by also letting you look back at archives of recordings and highlights of your skills being used in sports, debate, and so on. Olympians Replay is a hub for our school community to engage and strengthen our school community and pride. Wherever you are, Olympians Replay will be the channel to watch our school thrive from the talented students we have here!", infoX, 0.3 * height + 150, 0.8 * width);
    /*text("Everyone at OSA has exceptional talents,", infoX + 0.4 * width + 50, 0.3 * height - 35);
     text("whether it’s in trivia, public speaking, or any", infoX + 0.4 * width + 50, 0.3 * height);
     text("other activity. Olympians Replay ensures that", infoX + 0.4 * width + 50, 0.3 * height + 35);
     text("your time at Old Scona will be a lifetime memory", infoX + 0.4 * width + 50, 0.3 * height + 70);
     text("by also letting you look back at archives of", infoX + 0.4 * width + 50, 0.3 * height + 105);
     text("recordings and highlights of your skills being", infoX + 0.4 * width + 50, 0.3 * height + 140);
     text("used in sports, debate, and so on. Olympians", infoX + 0.4 * width + 50, 0.3 * height + 175);
     text("Replay is a hub for our school community to", infoX + 0.4 * width + 50, 0.3 * height + 210);
     text("engage and strengthen our school community", infoX + 0.4 * width + 50, 0.3 * height + 245);
     text("and pride. Wherever you are, Olympians Replay", infoX + 0.4 * width + 50, 0.3 * height + 280);
     text("will be the channel to watch our school thrive", infoX + 0.4 * width + 50, 0.3 * height + 315);
     text("from the talented students we have here!", infoX + 0.4 * width + 50, 0.3 * height + 350);*/

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "mobileInitiative2") {
    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);


    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(30);
    textFont(montserratBI);
    textAlign(LEFT);
    text("Olympians \nReplay (Cont'd)", titleX, 0.2 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(16);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("Everyone at OSA has exceptional talents, whether it’s in trivia, public speaking, or any other activity. Olympians Replay ensures that your time at Old Scona will be a lifetime memory by also letting you look back at archives of recordings and highlights of your skills being used in sports, debate, and so on. \n \nOlympians Replay is a hub for our school community to engage and strengthen our school community and pride. Wherever you are, Olympians Replay will be the channel to watch our school thrive from the talented students we have here!", infoX, 0.2 * height + 80, 0.8 * width);

    //text("Everyone at OSA has exceptional talents, whether it’s in trivia, public speaking, or any other activity. Olympians Replay ensures that your time at Old Scona will be a lifetime memory by also letting you look back at archives of recordings and highlights of your skills being used in sports, debate, and so on. Olympians Replay is a hub for our school community to engage and strengthen our school community and pride. Wherever you are, Olympians Replay will be the channel to watch our school thrive from the talented students we have here!", infoX, 0.3 * height + 150, 0.8 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "mobileInitiative3") {
    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);


    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(30);
    textFont(montserratBI);
    textAlign(LEFT);
    text("SU Insiders", titleX, 0.2 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(18);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("Imagine SU decides to set up an event on Friday during the afternoon. MSA holds their usual Jummah prayer around this time, and Muslim students must leave the event for their religious practice. \n \nPerhaps Music Club wants to make an incredible performance in Winter LIT. Without proper information provided to them before the event happens, the Music Club will have very little time and knowledge to prepare and practice for this event. \n \nClubs need more information before events begin to serve their members better.", infoX, 0.2 * height + 40, 0.8 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "mobileInitiative4") {
    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);


    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(30);
    textFont(montserratBI);
    textAlign(LEFT);
    text("SU Insiders (Cont'd)", titleX, 0.2 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(18);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("The SU Insiders Program will be a selected group of students and executives from each council and club representing diverse demographics within the school to help provide extensive feedback for school and club events through event sneak peeks, event rehearsals, and post-event debriefs. \n \nEvent reports made by the SU Insiders Program will be kept and provided for future years, when future Students’ Union members host the same events we host today. The SU Insiders Program slowly improves SU events over time as it ensures that every mistake and flaw we make will be resolved by the students in the future.", infoX, 0.2 * height + 40, 0.8 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "innovation") {
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
    textSize(75);
    textFont(josefin);
    textAlign(LEFT);
    text("INNOVATION", titleX, 0.3 * height);

    fill(255, titleTransparency);
    noStroke();
    rect(titleX, 0.3 * height + 20, underlineLength, 5);

    tint(255, 200, 200, bodyTransparency);
    imageMode(CENTER);
    image(innovation, 0.8 * width, 0.55 * height, height/1.5, height/1.5);

    fill(255, 255, 255, bodyTransparency);
    noStroke();
    textSize(40);
    textFont(josefinItalic);
    textAlign(LEFT); //A leader who listens, acts, and delivers with the precision of a maestro.
    text("''His ability to connect with everyone is \nunparalleled.''", 0.1 * width, 0.3 * height + 100);
    textSize(30);
    textFont(montserrat);
    text("- Majd Abdalla, Reach for the Top Champion", 0.1 * width, 0.3 * height + 200);
    /*text("''A leader who listens, acts, and delivers \nwith the precision of a maestro.''", 0.1 * width, 0.3 * height + 100);
     textSize(30);
     textFont(montserrat);
     text("- Himanshu Surukanti, Professional Extrovert", 0.1 * width, 0.3 * height + 200);*/

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

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

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);


    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      underlineLength = titleTween(underlineLength, 520);
    }

    if (millis() - millisMarker > 1000) {
      bodyTransparency = tween(bodyTransparency, 255);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "innovation1") {
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
    textSize(50);
    textFont(montserratBI);
    textAlign(LEFT);
    text("Website Revamp", titleX, 0.3 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(25);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("Have you ever gone on osasu.tech in pursuit of actively searching for school news, or any other information? Most of you haven’t, because there’s nothing there! Despite our website’s aesthetics, it serves very little importance with not much detail on events and resources on the website. \n \nThe website will be revamped to add more content, resources, and school news while being regularly updated for your beloved SU events!", infoX, 0.3 * height + 60, 0.4 * width);

    //text("The SU Insiders Program will be a selected group of students and executives from each council and club representing diverse demographics within the school to help provide extensive feedback for school and club events through event sneak peeks, event rehearsals, and post-event debriefs. \n \nEvent reports made by the SU Insiders Program will be kept and provided for future years, when future Students’ Union members host the same events we host today. The SU Insiders Program slowly improves SU events over time as it ensures that every mistake and flaw we make will be resolved by the students in the future.", infoX + 0.4 * width + 50, 0.3 * height + 60, 0.4 * width);

    tint(255, 200, 200, titleTransparency);
    imageMode(CENTER);
    image(website, infoX + 0.65 * width, 0.55 * height, height/1.5, height/1.5);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

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

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "innovation2") {
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
    textSize(50);
    textFont(montserratBI);
    textAlign(LEFT);
    text("COMSU Team Revamp", titleX, 0.3 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(25);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("Although the current team composition is very well-rounded, it greatly emphasizes more on graphics design for advertisements and promotions rather than the technical aspects of COMSU. To effectively renovate and change the website and other digital aspects of Students’ Union, the amount of officers in each role will be changed to the following: \n\n3 Digital \n2 External \n1 Internal", infoX, 0.3 * height + 60, 0.4 * width);

    text("Tired of hearing the same person do morning announcements over and over again? Is that why you don’t pay attention to these announcements? Morning announcements should be an opportunity for everyone in SU to have, as it’s a fun activity to let the school hear you speak. Every Tuesday, hear your fellow room reps and COMSU members participate in the announcements instead! Everyone should have a voice in the public image of OSA, not just the VPPR.", infoX + 0.4 * width + 50, 0.3 * height + 60, 0.4 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

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

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "mobileInnovation") {
    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);


    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(40);
    textFont(josefin);
    textAlign(LEFT);
    text("INNOVATION", titleX, 0.2 * height + 20);

    fill(255, titleTransparency);
    noStroke();
    rect(titleX, 0.2 * height + 40, underlineLength, 5);

    fill(255, 255, 255, bodyTransparency);
    noStroke();
    textSize(25);
    textFont(josefinItalic);
    textAlign(LEFT); //When Arthur speaks, it's as if the \nheavens themselves pause to listen.
    textWrap(WORD);
    text("''His ability to connect with everyone is unparalleled.''", 0.1 * width, 0.2 * height + 90, 0.8 * width);
    textSize(15);
    textFont(montserrat);
    text("- Majd Abdalla, Reach for the Top Champion", 0.1 * width, 0.2 * height + 150, 0.8 * width);

    tint(255, 200, 200, bodyTransparency);
    imageMode(CENTER);
    image(innovation, width/2, 0.65 * height, 0.5 * width, 0.5 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      underlineLength = titleTween(underlineLength, 275);
    }

    if (millis() - millisMarker > 1000) {
      bodyTransparency = tween(bodyTransparency, 255);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "mobileInnovation1") {
    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);


    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(30);
    textFont(montserratBI);
    textAlign(LEFT);
    text("Website Revamp", titleX, 0.2 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(18);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("Have you ever gone on osasu.tech in pursuit of actively searching for school news, or any other information? Most of you haven’t, because there’s nothing there! Despite our website’s aesthetics, it serves very little importance with not much detail on events and resources on the website. \n \nThe website will be revamped to add more content, resources, and school news while being regularly updated for your beloved SU events!", infoX, 0.2 * height + 40, 0.8 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "mobileInnovation2") {
    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);


    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(30);
    textFont(montserratBI);
    textAlign(LEFT);
    text("COMSU Revamp", titleX, 0.2 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(18);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("Although the current team composition is very well-rounded, it greatly emphasizes more on graphics design for advertisements and promotions rather than the technical aspects of COMSU. To effectively renovate and change the website and other digital aspects of Students’ Union, the amount of officers in each role will be changed to the following: \n\n3 Digital \n2 External \n1 Internal", infoX, 0.2 * height + 40, 0.8 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "mobileInnovation3") {
    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);


    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(30);
    textFont(montserratBI);
    textAlign(LEFT);
    text("COMSU Revamp \n(Cont'd)", titleX, 0.2 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(18);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("Tired of hearing the same person do morning announcements over and over again? Is that why you don’t pay attention to these announcements? Morning announcements should be an opportunity for everyone in SU to have, as it’s a fun activity to let the school hear you speak. \n\nEvery Tuesday, hear your fellow room reps and COMSU members participate in the announcements instead! Everyone should have a voice in the public image of OSA, not just the VPPR.", infoX, 0.2 * height + 80, 0.8 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "inclusivity") {
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
    textSize(75);
    textFont(josefin);
    textAlign(LEFT);
    text("INCLUSIVITY", titleX, 0.3 * height);

    fill(255, titleTransparency);
    noStroke();
    rect(titleX, 0.3 * height + 20, underlineLength, 5);

    fill(255, 255, 255, bodyTransparency);
    noStroke();
    textSize(40);
    textFont(josefinItalic);
    textAlign(LEFT);
    text("''He makes everyone feel seen and valued.''", 0.1 * width, 0.3 * height + 100);
    textSize(30);
    textFont(montserrat);
    text("- Aliyah Salami, BSA Exec", 0.1 * width, 0.3 * height + 150);
    
    tint(255, 227, 227, bodyTransparency);
    imageMode(CENTER);
    image(inclusivity, 0.8 * width, 0.55 * height, height/1.5, height/1.5);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

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

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);


    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      underlineLength = titleTween(underlineLength, 480);
    }

    if (millis() - millisMarker > 1000) {
      bodyTransparency = tween(bodyTransparency, 255);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }
  
  if (level == "inclusivity1") {
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
    textSize(50);
    textFont(montserratBI);
    textAlign(LEFT);
    text("Community Collaboration in COMSU", titleX, 0.3 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(25);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("This year, a record-breaking number of creative individuals applied to COMSU in hopes of their talents being able to serve SU’s advertisements, promotions, and digital projects. Only 6 of these applicants were selected to manage the digital aspect of the whole student body. This system blocks countless artists and developers from showcasing their ability to help out the school in advertisements and promotions.", infoX, 0.3 * height + 60, 0.4 * width);

    text("While members of COMSU will continue to overlook everything, community-made designs would allow for: \n\n - More opportunities to volunteer in the community (Can be used for resumes and applications!) \n\n - Less stress and pressure among members of COMSU and SU", infoX + 0.4 * width + 50, 0.3 * height + 60, 0.4 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

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

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }
  
  if (level == "inclusivity2") {
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
    textSize(50);
    textFont(montserratBI);
    textAlign(LEFT);
    text("Routine Public Surveys", titleX, 0.3 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(25);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("The most important people to SU aren't the president, or the room reps. The most important people to SU are you. Along with the SU Insiders Program, we’ll get feedback directly from everyday OSA students on events, along with your preferences on certain topics to help plan for future occasions.", infoX, 0.3 * height + 60, 0.4 * width);

    textSize(30);
    textFont(josefinItalic);
    text("Direct feedback from YOU. \n\nEvents tailored to YOU. \n\nA Student's Union for YOU.", infoX + 0.4 * width + 50, 0.3 * height + 60, 0.4 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

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

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }
  
  if (level == "mobileInclusivity") {
    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);


    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(40);
    textFont(josefin);
    textAlign(LEFT);
    text("INCLUSIVITY", titleX, 0.2 * height + 20);

    fill(255, titleTransparency);
    noStroke();
    rect(titleX, 0.2 * height + 40, underlineLength, 5);

    fill(255, 255, 255, bodyTransparency);
    noStroke();
    textSize(25);
    textFont(josefinItalic);
    textAlign(LEFT); //When Arthur speaks, it's as if the \nheavens themselves pause to listen.
    textWrap(WORD);
    text("''He makes everyone feel seem and valued.''", 0.1 * width, 0.2 * height + 90, 0.8 * width);
    textSize(15);
    textFont(montserrat);
    text("- Aliyah Salami, BSA Exec", 0.1 * width, 0.2 * height + 150, 0.8 * width);

    tint(255, 227, 227, bodyTransparency);
    imageMode(CENTER);
    image(inclusivity, width/2, 0.65 * height, 0.5 * width, 0.5 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      underlineLength = titleTween(underlineLength, 275);
    }

    if (millis() - millisMarker > 1000) {
      bodyTransparency = tween(bodyTransparency, 255);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (level == "mobileInclusivity1") {
    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);


    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(30);
    textFont(montserratBI);
    textAlign(LEFT);
    text("Community \nCollaboration \nin COMSU", titleX, 0.2 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(18);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("This year, a record-breaking number of creative individuals applied to COMSU in hopes of their talents being able to serve SU’s advertisements, promotions, and digital projects. Only 6 of these applicants were selected to manage the digital aspect of the whole student body. \n\nThis system blocks countless artists and developers from showcasing their ability to help out the school in advertisements and promotions.", infoX, 0.2 * height + 120, 0.8 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }
  
  if (level == "mobileInclusivity2") {
    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);


    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(30);
    textFont(montserratBI);
    textAlign(LEFT);
    text("Community \nCollaboration \nin COMSU (Cont'd)", titleX, 0.2 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(18);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("While members of COMSU will continue to overlook everything, community-made designs would allow for: \n\n - More opportunities to volunteer in the community (Can be used for resumes and applications!) \n\n - Less stress and pressure among members of COMSU and SU", infoX, 0.2 * height + 120, 0.8 * width);

    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }
  
  if (level == "mobileInclusivity3") {
    //menu
    fill(255, 255, 255, headerTransparency);
    noStroke();
    rect(0.8 * width, 0.1 * width, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 15, 0.1 * width, 5);
    rect(0.8 * width, 0.1 * width + 30, 0.1 * width, 5);


    //title
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(30);
    textFont(montserratBI);
    textAlign(LEFT);
    text("Routine Public \nSurveys", titleX, 0.2 * height);

    //info
    fill(255, 255, 255, titleTransparency);
    noStroke();
    textSize(18);
    textFont(montserrat);
    textAlign(LEFT);
    textWrap(WORD);
    text("The most important people to SU aren't the president, or the room reps. The most important people to SU are you. Along with the SU Insiders Program, we’ll get feedback directly from everyday OSA students on events, along with your preferences on certain topics to help plan for future occasions.", infoX, 0.2 * height + 80, 0.8 * width);

    textSize(20);
    textFont(josefinItalic);
    text("Direct feedback from YOU. \n\nEvents tailored to YOU. \n\nA Student's Union for YOU.", infoX, 0.2 * height + 300, 0.8 * width);
    
    //footer
    tint(255, footerTransparency);
    imageMode(CENTER);
    image(clickIcon, 0.5 * width, 0.9 * height, height/20, height/20);

    headerY = tween(headerY, 0);
    headerTransparency = tween(headerTransparency, 255);

    if (millis() - millisMarker < 2000) {
      titleX = tween(titleX, 0.1 * width);
      titleTransparency = tween(titleTransparency, 255);
      infoX = tween(infoX, 0.1 * width);
    }

    if (millis() - millisMarker > 1000 && hasScrolled == false) {
      footerTransparency = tween(footerTransparency, 255);
    } else {
      footerTransparency = tween(footerTransparency, 0);
    }
  }

  if (isMobile == false) {
    //cursor
    fill(0, 0, 0, 20);
    stroke(255);
    strokeWeight(2);
    circle(mouseX, mouseY, 20);
  }
}

function mousePressed() {
  if (isMobile == false) {
    if (level != "home" || millis() - millisMarker > 2000) {
      if (mouseX > 0.8 * width && mouseX < 1.0 * width && mouseY < headerY + height/5) {
        level = "inclusivity";
        levelSetup();
      } else {
        if (mouseX > 0.6 * width && mouseX < 0.8 * width && mouseY < headerY + height/5) {
          level = "innovation";
          levelSetup();
        } else {
          if (mouseX > 0.4 * width && mouseX < 0.6 * width && mouseY < headerY + height/5) {
            level = "initiative";
            levelSetup();
          } else {
            if (mouseX > 0.2 * width && mouseX < 0.4 * width && mouseY < headerY + height/5) {
              level = "whoami";
              levelSetup();
            } else {
              if (mouseX < 0.2 * width && mouseY < headerY + height/5) {
                level = "home";
                levelSetup();
              } else {
                if (millis() - millisMarker > 1000) {
                  if (level == "initiative1") {
                    level = "initiative2";
                    levelSetup();
                  }
                  if (level == "initiative") {
                    level = "initiative1";
                    levelSetup();
                  }

                  if (level == "innovation1") {
                    level = "innovation2";
                    levelSetup();
                  }
                  if (level == "innovation") {
                    level = "innovation1";
                    levelSetup();
                  }
                  
                  if (level == "inclusivity1") {
                    level = "inclusivity2";
                    levelSetup();
                  }
                  if (level == "inclusivity") {
                    level = "inclusivity1";
                    levelSetup();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function touchEnded() {
  if (isMobile == true && millis() - touchCooldown > 500) {
    touchCooldown = millis();
    if (level != "home" || millis() - millisMarker > 2000) {
      if (level == "mobileMenu") {
        if (mouseY < 0.2 * height && mouseX < width/2) {
          level = "mobileHome";
          levelSetup();
        }
        if (mouseY > 0.2 * height && mouseY < 0.4 * height && mouseX < 0.7 * width) {
          level = "mobileWhoAmI";
          levelSetup();
        }
        if (mouseY > 0.4 * height && mouseY < 0.6 * height && mouseX < 0.7 * width) {
          level = "mobileInitiative";
          levelSetup();
        }
        if (mouseY > 0.6 * height && mouseY < 0.8 * height && mouseX < 0.7 * width) {
          level = "mobileInnovation";
          levelSetup();
        }
        if (mouseY > 0.8 * height && mouseX < 0.7 * width) {
          level = "mobileInclusivity";
          levelSetup();
        }
        if (mouseX > 0.8 * width && mouseX < 0.9 * width && mouseY > 0.1 * width && mouseY < 0.2 * width) {
          level = recentPage;
          levelSetup();
        }
      } else {
        if (mouseX > 0.8 * width && mouseX < 0.9 * width && mouseY > 0.1 * width && mouseY < 0.2 * width) {
          level = "mobileMenu";
          levelSetup();
        } else {
          if (millis() - millisMarker > 1000) {
            if (level == "mobileInitiative3") {
              level = "mobileInitiative4";
              levelSetup();
            }
            if (level == "mobileInitiative2") {
              level = "mobileInitiative3";
              levelSetup();
            }
            if (level == "mobileInitiative1") {
              level = "mobileInitiative2";
              levelSetup();
            }
            if (level == "mobileInitiative") {
              level = "mobileInitiative1";
              levelSetup();
            }

            if (level == "mobileInnovation2") {
              level = "mobileInnovation3";
              levelSetup();
            }
            if (level == "mobileInnovation1") {
              level = "mobileInnovation2";
              levelSetup();
            }
            if (level == "mobileInnovation") {
              level = "mobileInnovation1";
              levelSetup();
            }
            
            if (level == "mobileInclusivity2") {
              level = "mobileInclusivity3";
              levelSetup();
            }
            if (level == "mobileInclusivity1") {
              level = "mobileInclusivity2";
              levelSetup();
            }
            if (level == "mobileInclusivity") {
              level = "mobileInclusivity1";
              levelSetup();
            }
          }
        }
      }
    }
  }
}
