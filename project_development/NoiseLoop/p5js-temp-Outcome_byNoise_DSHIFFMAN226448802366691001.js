//Daniel Shiffman code, found at https://www.youtube.com/watch?v=ZI1dmHv3MeM
//Drawing Circle, closed.

let val, slider1;
let inc, slider2;
let phase = 0;
let zoff = 0;
let xoff, yoff;
//let easing = 600; //0.05;

function setup() {
  createCanvas (windowWidth, windowHeight);
 
}

function draw () {
  background(0,10);
  
  textAlign(CENTER, CENTER);
  // text(xoff, windowWidth/2, 100);
  // text(yoff, windowWidth/2, 150);
  translate(windowWidth/2, windowHeight/2);
  stroke(255); 
  strokeWeight(1);
  noFill();
 
  //beginShape();
  //val=slider1.value();
  //inc=slider2.value();
  for (let a = 0; a < TWO_PI; a+=0.01){
    //if (frameCount>a*10) {
    //let r = random(value);
    let easing = map(random(a), 0, 360, 0, 50);
    xoff = map(cos(a+phase), -1, 1, 0, easing);
    yoff = map(sin(a), -1, 1, 0, easing);
    let r = map(noise(xoff, yoff, zoff), 0, 1, -800, windowHeight*0.6);
    let x = r * cos(a);
    let y = r * sin(a);
    point(x, y);
    //} 
}
  //endShape(CLOSE);
  ///noLoop();
  //console.log(xoff);
  zoff += 0.001;
  
  phase+=0.01;
}
