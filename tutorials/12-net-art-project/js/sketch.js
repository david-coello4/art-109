
let objX, objY;
let obj2X, obj2Y;
let maxDistance = 200;
let dragging = false;

let canvas;
let xPos = 0;
let yPos = 0;
let easing = .5;
let shakeAmount = 0;
const maxShake = 10;
const decayFactor = 0.9;


let heart;
let microphone;
let classes;
let test;
let deadline;


async function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", -1);

  textbox = createInput('Type one of your anxiety/fear here');
  textbox.size(200, 50);
  textbox.position(-400 + width / 2, -300 + height / 2);

  textbox = createInput('Type one of your anxiety/fear here');
  textbox.size(200, 50);
  textbox.position(100 + width / 2, 200 + height / 2);


  textbox = createInput('Type one of your anxiety/fear here');
  textbox.size(200, 50);
  textbox.position(-600 + width / 2, 150 + height / 2);

  textbox = createInput('Type one of your anxiety/fear here');
  textbox.size(200, 50);
  textbox.position(400 + width / 2, -200 + height / 2);


  heart = await loadImage("../12-net-art-project/media/heart.png");
  microphone = await loadImage("../12-net-art-project/media/microphone.jpg");
  classes = await loadImage("../12-net-art-project/media/classes.jpg");
  test = await loadImage("../12-net-art-project/media/test.jpg");
  deadline = await loadImage("../12-net-art-project/media/deadline.jpeg");

  objX = width / 2;
  objY = height / 2;

  obj2X = 300;
  obj2Y = 200;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  objX = width / 2;
  objY = height / 2;
}

function draw() {
  clear();
  background(0);


  xPos = xPos + ((mouseX - xPos) * easing);
  yPos = yPos + ((mouseY - yPos) * easing);

  let micDistance = dist(objX, objY, -500 + width / 2, -100 + height / 2);

  let classesDistance = dist(objX, objY, 500 + width / 2, 100 + height / 2);

  let testDistance = dist(objX, objY, 200 + width / 2, -300 + height / 2);

  let dlDistance = dist(objX, objY, -200 + width / 2, 300 + height / 2);

  let text1Distance = dist(objX, objY, -300 + width / 2, -200 + height / 2);

  let text2Distance = dist(objX, objY, 200 + width / 2, 200 + height / 2);

  let text3Distance = dist(objX, objY, -500 + width / 2, 150 + height / 2);

  let text4Distance = dist(objX, objY, 500 + width / 2, -200 + height / 2);




  if (micDistance < maxDistance ||
    classesDistance < maxDistance ||
    testDistance < maxDistance ||
    dlDistance < maxDistance ||
    text1Distance < maxDistance ||
    text2Distance < maxDistance ||
    text3Distance < maxDistance ||
    text4Distance < maxDistance) {

    let closestDistance = min(micDistance, classesDistance, testDistance, dlDistance, text1Distance, text2Distance, text3Distance, text4Distance);

    shakeAmount = map(closestDistance, 0, maxDistance, 25, 0);

  } else {
    shakeAmount = 0;
  }



  let offsetX = random(-shakeAmount, shakeAmount);
  let offsetY = random(-shakeAmount, shakeAmount);


  image(microphone, -500 + width / 2, -100 + height / 2, 200, 150);
  image(classes, 500 + width / 2, 100 + height / 2, 200, 150);
  image(test, 200 + width / 2, -300 + height / 2, 200, 150);
  image(deadline, -200 + width / 2, 300 + height / 2, 200, 150);


  imageMode(CENTER);
  image(heart, objX + offsetX, objY + offsetY, 100, 100);


  shakeAmount *= decayFactor;
}



function mousePressed() {

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