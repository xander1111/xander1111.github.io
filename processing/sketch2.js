function setup() {
    var canvas = createCanvas(400,400);
    background(130, 130, 130);
}

function draw() {
    //color
    let c = color(mouseX, mouseY, 0);


    //body
    strokeWeight(1);
    line(200, 135, 200, 275);

    //head
    fill(c)
    ellipse(200, 100, 70, 70);

    //legs
    line(200, 275, 240, 350);
    line(200, 275, 160, 350);

    //arms
    line(200, 175, 230, 250);
    line(200, 175, 170, 250);

    //face
    strokeWeight(3);
    arc(200, 100, 40, 40, 0, PI);

    strokeWeight(10);

    point(190, 90);
    point(210, 90);
}
