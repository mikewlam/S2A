let samplesPerFrame = 5;
let numFrames = 100;
let shutterAngle = 0.6;

let SEED;

function setup() {
  createCanvas(windowWidth, windowHeight);
  SEED = random(10, 10000);
  
}

let m = 2000;
let rad = 1.5;
let nperiod = 4.0;

function draw() {
  background(0,75);
  noFill ();
  stroke(255, 75);
  strokeWeight (5);
  let t = random(0, 1);

    for (let i=0; i<m; i++){
      let p = 1.0*i/m;
      let dx = 25*noise(SEED + rad*cos(TWO_PI*(nperiod*p-t)), rad*sin(TWO_PI*(nperiod*p-t)),14.0*p);
      let dy = 25*noise(2*SEED + rad*cos(TWO_PI*(nperiod*p-t)), rad*sin(TWO_PI*(nperiod*p-t)),14.0*p);
      
      point(p*width +dx, height/2+dy);
      
  }
  
}
