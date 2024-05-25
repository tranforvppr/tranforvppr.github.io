/* ***********************************************************************
* Arthur Tran
* Assignment 1
* CS10 Gan
* March 16, 2024

* This program is my own work - A.T. */
let level = "start";
let rootX;
let rootY;
let feetX;
let feetY;
let handsY;
let eyelidsY = 0; //  color color1 = color(122, 213, 247);
//  color color2 = color(146, 2, 157);
let r1 = 122;
let g1 = 213;
let b1 = 247;
let r2 = 146;
let g2 = 2;
let b2 = 157;
let angle = 0;
let angleSpeed = 0.2;
let amplitude = 25;
let easing = 0.1;
let speed = 0;
let textOpacity;
let earringOpacity = 0;
let earringsEnabled = false;
let goingLeft = false;
let goingRight = false;
let hasMoved = false;
let hasJumped = false;
let hasBlinked = false;
let woreEarrings = false;
let millisMarker;
function levelSetup() {
    if (level == "start") {
        rootX = 640;
        rootY = -500;
        feetX = 640;
        millisMarker = millis();
    }
    if (level == "scene2") {
        millisMarker = millis();
    }
    if (level == "jumping") {
        millisMarker = millis();
        textOpacity = 255;
        hasJumped = true;
    }
}
function tween(currentValue, targetValue) {
    let newValue = currentValue;
    newValue += (targetValue - currentValue) * easing;
    return newValue;
}
function setup() {
    createCanvas(1280, 720);
    levelSetup();
}
function draw() {
    if (level == "start") {
        if (earringsEnabled == true) {
            earringOpacity = tween(earringOpacity, 255);
        } else {
            earringOpacity = tween(earringOpacity, 0);
        }
        r1 = tween(r1, 122);
        g1 = tween(g1, 213);
        b1 = tween(b1, 247);
        r2 = tween(r2, 146);
        g2 = tween(g2, 2);
        b2 = tween(b2, 157);
        rootY = tween(rootY, 340);
        feetY = rootY + 256;
        handsY = rootY;
        if (millis() - millisMarker > 1000) {
            level = "scene";
            levelSetup();
        }
        if (mousePressed == true) {
            eyelidsY = tween(eyelidsY, 60);
        } else {
            eyelidsY = tween(eyelidsY, 0);
        }
    }
    if (level == "scene") {
        if (earringsEnabled == true) {
            earringOpacity = tween(earringOpacity, 255);
        } else {
            earringOpacity = tween(earringOpacity, 0);
        } //  color color1 = color(122, 213, 247);
        //  color color2 = color(146, 2, 157);
        r1 = tween(r1, 122);
        g1 = tween(g1, 213);
        b1 = tween(b1, 247);
        r2 = tween(r2, 146);
        g2 = tween(g2, 2);
        b2 = tween(b2, 157);
        if (abs(feetX - rootX) < 100) {
            feetX = tween(feetX, rootX);
        } else {
            if (feetX < rootX) {
                feetX = rootX - 99;
                feetX = tween(feetX, rootX);
            }
            if (feetX > rootX) {
                feetX = rootX + 99;
                feetX = tween(feetX, rootX);
            }
        }
        if (abs(handsY - rootY) < 50) {
            handsY = tween(handsY, rootY);
        } else {
            if (handsY < rootY) {
                handsY = rootY - 49;
                handsY = tween(handsY, rootY);
            }
            if (handsY > rootY) {
                handsY = rootY + 49;
                handsY = tween(handsY, rootY);
            }
        } // Pythagorean Theorem time to make legs not look stretchy!!!
        //feetY = tween(feetY, rootY + sqrt(sq(256) - sq(rootX - feetX)));
        feetY = tween(feetY, rootY + sqrt(sq(256)));
        rootY = tween(rootY, 340); //movement
        if (rootX + speed < width && rootX + speed > 0) {
            rootX = rootX + speed;
        } else {
            if (rootX + speed >= width) {
                rootX = width;
                if (speed > 0) {
                    speed = 0;
                }
            }
            if (rootX + speed <= 0) {
                rootX = 0;
                if (speed < 0) {
                    speed = 0;
                }
            }
        }
        if (mousePressed == true) {
            eyelidsY = tween(eyelidsY, 60);
        } else {
            eyelidsY = tween(eyelidsY, 0);
        }
    }
    if (level == "scene2") {
        if (earringsEnabled == true) {
            earringOpacity = tween(earringOpacity, 255);
        } else {
            earringOpacity = tween(earringOpacity, 0);
        }
        r1 = tween(r1, 229);
        g1 = tween(g1, 0);
        b1 = tween(b1, 176);
        r2 = tween(r2, 229);
        g2 = tween(g2, 130);
        b2 = tween(b2, 0);
        if (abs(feetX - rootX) < 50) {
            feetX = tween(feetX, rootX);
        } else {
            if (feetX < rootX) {
                feetX = rootX - 49;
                feetX = tween(feetX, rootX);
            }
            if (feetX > rootX) {
                feetX = rootX + 49;
                feetX = tween(feetX, rootX);
            }
        }
        if (abs(handsY - rootY) < 50) {
            handsY = tween(handsY, rootY);
        } else {
            if (handsY < rootY) {
                handsY = rootY - 49;
                handsY = tween(handsY, rootY);
            }
            if (handsY > rootY) {
                handsY = rootY + 49;
                handsY = tween(handsY, rootY);
            }
        } // Pythagorean Theorem time to make legs not look stretchy!!!
        //feetY = tween(feetY, rootY + sqrt(sq(128) - sq(rootX - feetX)));
        feetY = tween(feetY, rootY + sqrt(sq(128)));
        rootY = tween(rootY, 470); //movement
        if (rootX + speed < width && rootX + speed > 0) {
            rootX = rootX + speed;
        } else {
            if (rootX + speed >= width) {
                rootX = width;
                if (speed > 0) {
                    speed = 0;
                }
            }
            if (rootX + speed <= 0) {
                rootX = 0;
                if (speed < 0) {
                    speed = 0;
                }
            }
        }
        if (mousePressed == true) {
            eyelidsY = tween(eyelidsY, 60);
        } else {
            eyelidsY = tween(eyelidsY, 0);
        }
    }
    if (level == "jumping") {
        //  color color1 = color(122, 213, 247);
        //  color color2 = color(146, 2, 157);
        r1 = tween(r1, 122);
        g1 = tween(g1, 213);
        b1 = tween(b1, 247);
        r2 = tween(r2, 146);
        g2 = tween(g2, 2);
        b2 = tween(b2, 157);
        textOpacity = tween(textOpacity, 0); //feetY = tween(feetY, rootY + sqrt(sq(256) - sq(rootX - feetX)));
        feetY = tween(feetY, rootY + sqrt(sq(256)));
        rootY = tween(rootY, 0 - 2 * height);
        if (abs(handsY - rootY) < 50) {
            handsY = tween(handsY, rootY);
        } else {
            if (handsY < rootY) {
                handsY = rootY - 49;
                handsY = tween(handsY, rootY);
            }
            if (handsY > rootY) {
                handsY = rootY + 49;
                handsY = tween(handsY, rootY);
            }
        }
        if (millis() - millisMarker > 1500 && millis() - millisMarker < 1700) {
            translate(random(-10, 10), random(-10, 10));
        }
        if (millis() - millisMarker > 1500 && millis() - millisMarker < 1600) {
            textOpacity = 255;
        }
        if (millis() - millisMarker > 2000) {
            level = "start";
            levelSetup();
        }
    }
    let color1 = color(r1, g1, b1);
    let color2 = color(r2, g2, b2); // Draw the diagonal gradient
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            // Calculate the gradient color based on the position
            let gradientAmount = map(x + y, 0, width + height, 0, 1);
            let gradientColor = lerpColor(color1, color2, gradientAmount); // Set the pixel color
            set(x, y, gradientColor);
        }
    }
    noStroke(); // Draw the sine wave line
    fill(255);
    for (let x = int(rootX); x < rootX + 250; x += 5) {
        let y = height / 2 + sin(angle) * amplitude;
        ellipse(x + 75, rootY - y + 175, 10, 10);
        angle += angleSpeed;
    } // Adjust angle for continuous wave motion
    angle += angleSpeed; //ground
    fill(128);
    rect(-100, 630, width + 200, 100); //jump text
    fill(20);
    textSize(32);
    text("Launch power:", 160, 685); //jump bar outline
    stroke(50);
    strokeWeight(5);
    fill(128);
    rect(width / 2 - 260, 650, 520, 60);
    noStroke();
    fill(247, 122, 241);
    square(rootX + 275, rootY - 225, 75); // Antenna
    square(rootX + 350, rootY - 150, 75);
    square(rootX + 425, rootY - 75, 75);
    fill(255, 182, 23);
    square(rootX - 75, rootY - 250, 150); // Head
    fill(139, 1, 133, earringOpacity);
    ellipse(rootX - 75, rootY - 160, 20, 20); // Left Earring
    ellipse(rootX - 75, rootY - 140, 30, 30);
    ellipse(rootX + 75, rootY - 160, 20, 20); // Right Earring
    ellipse(rootX + 75, rootY - 140, 30, 30);
    fill(0);
    ellipse(rootX, rootY - 160, 50, 50);
    fill(255, 182, 23);
    ellipse(rootX, rootY - 165, 50, 50); //smile
    fill(255);
    ellipse(rootX - 40, rootY - 200, 60, 60); // Left Eye
    ellipse(rootX + 40, rootY - 200, 60, 60); // Right Eye
    fill(0);
    ellipse(rootX - 40, rootY - 200, 40, 40); // Left Pupil
    ellipse(rootX + 40, rootY - 200, 40, 40); // Right Pupil
    fill(255, 182, 23);
    rect(rootX - 70, rootY - 230, 60, eyelidsY); // Left Eyelid
    rect(rootX + 10, rootY - 230, 60, eyelidsY); // Right Eyelid
    strokeWeight(20);
    stroke(255, 182, 23);
    line(rootX - 64, rootY - 50, rootX - 160, handsY - 50); // Left arms
    line(rootX - 64, rootY, rootX - 160, handsY);
    line(rootX - 64, rootY + 50, rootX - 160, handsY + 50);
    line(rootX + 64, rootY - 50, rootX + 160, handsY - 50); // Right arms
    line(rootX + 64, rootY, rootX + 160, handsY);
    line(rootX + 64, rootY + 50, rootX + 160, handsY + 50);
    strokeWeight(50);
    stroke(255, 182, 23);
    line(rootX - 64, rootY + 78, feetX - 64, feetY); // Left leg
    line(rootX + 64, rootY + 78, feetX + 64, feetY); // Right leg
    noStroke();
    fill(247, 122, 241);
    ellipse(rootX, rootY, 250, 250); // Body
    fill(50);
    ellipse(feetX - 64, feetY, 75, 75); //Left wheel
    ellipse(feetX + 64, feetY, 75, 75); //Right wheel
    if (level == "scene2") {
        if (millis() - millisMarker < 1000) {
            fill(50);
            rect(width / 2 - 250, 660, (millis() - millisMarker) / 2, 40);
        } else {
            fill(150, 50, 50);
            rect(width / 2 - 250 + random(-5, 5), 660 + random(-5, 5), 500, 40);
        }
    }
    if (level == "jumping") {
        if (millis() - millisMarker < 500) {
            fill(255, 255, 255, textOpacity);
            textSize(48);
            text("boing!", rootX + 160, 548);
        }
        if (millis() - millisMarker > 1500 && millis() - millisMarker < 2000) {
            fill(255, 255, 255, textOpacity);
            textSize(64);
            text("CRASH!", rootX - 90, 100);
        }
    } // instructions
    /*
  Boolean hasMoved = false;
  Boolean hasJumped = false;
  Boolean hasBlinked = false;
  Boolean woreEarrings = false;
  */
    if (hasMoved == false) {
        fill(255);
        textSize(24);
        text("Move: A + D", 925, 660);
    }
    if (hasJumped == false) {
        fill(255);
        textSize(24);
        text("Launch: Space", 925, 700);
    }
    if (woreEarrings == false) {
        fill(255);
        textSize(24);
        text("Earrings: E", 1125, 660);
    }
    if (hasBlinked == false) {
        fill(255);
        textSize(24);
        text("Blink: LMB", 1125, 700);
    } // calculating movement
    if (level == "scene") {
        if (goingLeft == true && speed >= -10) {
            speed = speed - 0.2;
        }
        if (goingRight == true && speed <= 10) {
            speed = speed + 0.2;
        }
    }
    if (level == "scene2") {
        if (goingLeft == true && speed >= -5) {
            speed = speed - 0.2;
        }
        if (goingRight == true && speed <= 5) {
            speed = speed + 0.2;
        }
    }
    if (goingLeft == false && goingRight == false && speed < 0) {
        speed = speed + 0.2;
    }
    if (goingLeft == false && goingRight == false && speed > 0) {
        speed = speed - 0.2;
    }
    if (abs(speed) < 0.2) {
        speed = 0;
    }
}
function mousePressed() {
    console.log(mouseX, mouseY);
    hasBlinked = true;
}
function keyPressed() {
    if (key == " ") {
        if (level == "scene") {
            level = "scene2";
            levelSetup();
        }
    }
    if (key == "a") {
        goingLeft = true;
        hasMoved = true;
    }
    if (key == "d") {
        goingRight = true;
        hasMoved = true;
    }
    if (key == "e") {
        earringsEnabled = !earringsEnabled;
        woreEarrings = true;
    }
}
function keyReleased() {
    if (key == "a") {
        goingLeft = false;
    }
    if (key == "d") {
        goingRight = false;
    }
    if (key == " ") {
        if (level == "scene2") {
            if (millis() - millisMarker > 1000) {
                level = "jumping";
                levelSetup();
            } else {
                level = "scene";
                levelSetup();
            }
        }
    }
}
