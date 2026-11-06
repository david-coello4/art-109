
var canvas;
var textbox
var paragraph;

let button;
let question;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", -1);

  button = select('.button');
  button.position(-100 + width/2, 100 +height/2);
}

function draw() {
  background(0);

}

