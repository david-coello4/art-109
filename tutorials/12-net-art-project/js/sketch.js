let objX, objY;
let obj2X, obj2Y;
let maxDistance = 200;
let dragging = false;
let img;

let canvas;
let xPos = 0;
let yPos = 0;
let easing = .5;
let shakeAmount = 0;
const maxShake = 10;
const decayFactor = 0.9;

// function preload() {
//     img = loadImage("../media/classes.jpg");
// }

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -1);

    objX = 100;
    objY = 200;
  
    obj2X = 300;
    obj2Y = 200;


}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();
    background(0);

    let d = dist(objX, objY, obj2X, obj2Y);

  if (d < maxDistance) {
    shakeAmount = map(d, 0, maxDistance, 15, 0);
  }

 let offsetX = random(-shakeAmount, shakeAmount);
 let offsetY = random(-shakeAmount, shakeAmount);


 fill(255, 100, 100);
  noStroke();
  circle(objX + offsetX, objY + offsetY, 50);

//   (objX + offsetX, objY + offsetY, 50);


// fill(255, 0, 0);
// strokeWeight(0);
// ellipse(-27.5 + width/2, -62 + height/2, 80, 70);

// fill(255, 0, 0);
// ellipse(27.5 + width/2, -62 + height/2, 80, 70);

// fill(255, 0, 0);
// translate(width/2, -74 + height/2);
// triangle(-65, 25, 0, 115, 65, 25);


  // Draw second object
  fill(100, 100, 255);
  circle(obj2X, obj2Y, 50);

  // Display information
  fill(0);
  text("Distance: " + nf(d, 1, 1), 20, 20);
  text("Shake: " + nf(shakeAmount, 1, 1), 20, 40);









    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawThing(xPos, yPos);


    let xOffset = random(-shakeAmount, shakeAmount);
    let yOffset = random(-shakeAmount, shakeAmount);

    translate(xOffset, yOffset);
  
    //~~~~~~~~~~~~~~~~~~~~~~heart shape~~~~~~~~~~~~~~~~~~~~~~~
    fill(255, 0, 0);
    strokeWeight(0);
    ellipse(-27.5 + width/2, -62 + height/2, 80, 70);

    fill(255, 0, 0);
    ellipse(27.5 + width/2, -62 + height/2, 80, 70);

    fill(255, 0, 0);
    translate(width/2, -74 + height/2);
    triangle(-65, 25, 0, 115, 65, 25);

    
    // Decay the shake amount over time
    shakeAmount *= decayFactor;
  }
  
  function mousePressed() {
    // Trigger shake effect
    shakeAmount = maxShake;

    // if (
    //     mouseX > 150 &&
    //     mouseX < 450 &&
    //     mouseY > 150 &&
    //     mouseY < 450
    // ) {
    //     showImage = !showImage;
    // }

    let d = dist(mouseX, mouseY, objX, objY);

    if (d < 25) {
      dragging = true;
    }


}

function mouseDragged() {
    if (dragging) {
      objX = mouseX;
      objY = mouseY;
    }
  }

  function mouseReleased() {
    dragging = false;
  }





function drawThing(_x, _y) {

// //     //flower pedal
// //     strokeWeight(0);
// //     fill(151, 29, 55);
// //     ellipse(_x, _y, 40, 85);

// //   //flower pedal
// //     strokeWeight(0);
// //     fill(151, 29, 55);
// //     ellipse(_x, _y, 85, 35);

// //    //pistil
// //     strokeWeight(1);
// //     fill(205, 65, 95);
// //     ellipse(_x, _y, 25, 25);
  
// //     //stem
// //     strokeWeight(0);
// //     fill(56, 41, 49);
// //     rotate(0);
// //     triangle(_x, _y,  10 + width/2 , height/2 ,  -10 + width/2, height/2);

}