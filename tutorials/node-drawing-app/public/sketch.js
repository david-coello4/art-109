var socket;

function setup() {
    createCanvas(600, 400);
    background(51);

    socket = io.connect('http://localhost:3000')
    socket.on('mouse', newDrawing);

}

function newDrawing(data) {
    noStroke();
    fill(255, 0, 100);
    ellipse(data.x, data.y, 12, 12);
}

function mouseDragged() {
    console.log('Sending: ' + mouseX + ',' + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', data);

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 12, 12);
}

function draw() {
    
}