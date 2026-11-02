let canvas;
let xPos = 0;
let yPos = 0;
let easing = .5;
let shakeAmount = 0;
const maxShake = 10;
const decayFactor = 0.9; // How quickly the shake effect fades

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -1);
    background(225);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();


    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawThing(xPos, yPos);


    let xOffset = random(-shakeAmount, shakeAmount);
    let yOffset = random(-shakeAmount, shakeAmount);

    translate(xOffset, yOffset);
  
    //~~~~~~~~~~~~~~~~~~~~~~heart shape~~~~~~~~~~~~~~~~~~~~~~~
    fill(255, 0, 0);
    ellipse(-27.5 + width/2, 12 + height/2, 80, 70);

    fill(255, 0, 0);
    ellipse(27.5 + width/2, 12 + height/2, 80, 70);

    fill(255, 0, 0);
    translate(width/2, height/2);
    triangle(-65, 25, 0, 115, 65, 25);
    
    
    // Decay the shake amount over time
    shakeAmount *= decayFactor;
  }
  
  function mousePressed() {
    // Trigger shake effect
    shakeAmount = maxShake;
}

// function mouseMoved() {
//     drawThing(mouseX, mouseY);
//     drawThing(mouseX - 50, mouseY + 75);
// }

function drawThing(_x, _y) {

    //flower pedal
    strokeWeight(0);
    fill(151, 29, 55);
    ellipse(_x, _y, 40, 85);

  //flower pedal
    strokeWeight(0);
    fill(151, 29, 55);
    ellipse(_x, _y, 85, 35);

   //pistil
    strokeWeight(1);
    fill(205, 65, 95);
    ellipse(_x, _y, 25, 25);
  
    //stem
    strokeWeight(0);
    fill(56, 41, 49);
    triangle(_x, _y,  10 + width/2 , height/2 ,  -10 + width/2, height/2);

}