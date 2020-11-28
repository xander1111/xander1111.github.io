let offset = 50;

//white key synths 
let C, D, E, F, G, A;

//black key synths
let CS, DS, FS, GS;

function setup() {
    var canvas = createCanvas(400,400);
    background(130, 130, 130);

    C = new p5.MonoSynth();
    D = new p5.MonoSynth();
    E = new p5.MonoSynth();
    F = new p5.MonoSynth();
    G = new p5.MonoSynth();
    A = new p5.MonoSynth();

    CS = new p5.MonoSynth();
    DS = new p5.MonoSynth();
    FS = new p5.MonoSynth();
    GS = new p5.MonoSynth();
}

function draw() {
    makeWhiteKeys();
    makeBlackKeys();
}

function makeWhiteKeys(){
    let upWhite = color(255, 255, 255);
    let downWhite = color(200, 200, 200);

    //keycodes for z, x, c, v, b, and n
    let whiteKeys = [90, 88, 67, 86, 66, 78];

    for (let i = 0; i < 6; i++){
        if(keyIsDown(whiteKeys[i])){
            fill(downWhite);
        } else{
            fill(upWhite);
        }

        quad((i + 1) * offset, 100, (i + 1) * offset, 300, (i + 2) * offset, 300, (i + 2) * offset, 100);
    }
}

function makeBlackKeys(){
    let upBlack = color(50, 50, 50);
    let downBlack = color(0, 0, 0);

    //keycodes for s, d, g, and h
    let blackKeys = [83, 68, 71, 72];

    for (let i = 0; i < 4; i++){
        if (keyIsDown(blackKeys[i])){
            fill(downBlack);
        } else{
            fill(upBlack);
        }

        if (i < 2){
            quad((i + 1.7) * offset, 100, (i + 1.7) * offset, 225, (i + 2.3) * offset, 225, (i + 2.3) * offset, 100);
        } else{
            quad((i + 2.7) * offset, 100, (i + 2.7) * offset, 225, (i + 3.3) * offset, 225, (i + 3.3) * offset, 100);
        }
    }
}

function keyPressed(){
    userStartAudio();

    switch (keyCode){
        //white keys
        case 90:
            C.play('C4', 0.25, 0);
            break;
        case 88:
            D.play('D4', 0.25, 0);
            break;  
        case 67:
            E.play('E4', 0.25, 0);
            break;
        case 86:
            F.play('F4', 0.25, 0);
            break;
        case 66:
            G.play('G4', 0.25, 0);
            break;
        case 78:
            A.play('A5', 0.25, 0);
            break;


        //black keys
        case 83:
            CS.play('C#4', 0.25, 0);
            break;
        case 68:
            DS.play('D#4', 0.25, 0);
            break;
        case 71:
            FS.play('F#4', 0.25, 0);
            break;       
        case 72:
            GS.play('G#4', 0.25, 0);
            break;
        default:
            break;
    }
}
