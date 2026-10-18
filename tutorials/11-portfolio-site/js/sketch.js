let canvas;
let xPos = 0;
let yPos = 0;
let easing = .05;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", 0);
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
}

// function mouseMoved() {
//     drawThing(mouseX, mouseY);
//     drawThing(mouseX - 50, mouseY + 75);
// }

function drawThing(_x, _y) {
    strokeWeight(0);
    fill(random(200,255), random(200,255), random(200,255));
    ellipse(_x, _y, 30, 30);
}




//~~~~~~~~~~~~~~~~~~~~~Sine Wave Structures~~~~~~~~~~~~~~~~~~~~~~~

// let canvas;


// function setup() {
//     canvas = createCanvas(windowWidth, windowHeight, WEBGL)
//     canvas.position(0, 0);
//     canvas.style("z-index", -1);
//     angleMode(DEGREES)
// }

// function windowResized() {
//         resizeCanvas(windowWidth, windowHeight);
//     }

// function draw() {
//     background(255);

//     rotateX(60)

//     noFill()
//     stroke(255)

//     for(var i = 0; i < 50; i++){

//         var r = map(sin(frameCount / 2), -1, 1, 100, 200)
//         var g = map(i , 0, 50, 100, 200)
//         var b = map(cos(frameCount), -1, 1, 200, 100)

//         stroke(r, g, b)

//         rotate(frameCount / 175)


//         beginShape()
//         for (var j = 0; j < 360; j += 60) {
//             var rad = i * 3
//             var x = rad * cos(j)
//             var y = rad * sin(j)
//             var z = sin(frameCount * 2 +  i * 50) * 50

//             vertex(x, y, z)
//         }
//         endShape(CLOSE)
//     }
// }