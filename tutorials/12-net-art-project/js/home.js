
var canvas;
var textbox
// var slider
var paragraph;

let button;
let question;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", -1);

  // textbox = createInput('Type here');
  // textbox.position(-100 + width/2, 150 +height/2);

  button = select('.button');
  button.position(-100 + width/2, 100 +height/2);


  // createP(' ')
  // paragraph = createP('_____________________');
  // paragraph.style('color', 'white');
  // paragraph.position(-100 + width/2, 50 +height/2);


//   textbox.input(updateText); // the input event will update on the fly
//   // slider.input(updateSize)
// }

// function updateText() {
//   paragraph.html(textbox.value());
}

// function updateSize(){
//  paragraph.style("font-size", slider.value() + "pt")
// }

function draw() {
  background(0);

}

