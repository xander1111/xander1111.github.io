function setup() {
    var canvas = createCanvas(400,400);
    background(130, 130, 130);
}

function draw() {
    if(mouseIsPressed) {
        fill(0);
    } else { 
        fill(255);
    }
    ellipse(mouseX,mouseY,80,80);
}
