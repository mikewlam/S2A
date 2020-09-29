//Daniel Shiffman code, found at https://www.youtube.com/watch?v=ZI1dmHv3MeM
//Drawing Circle, closed.

let val, slider1;
let inc, slider2;
let phase = 0;
let zoff = 0;
let xoff, yoff;
let easing = 0.5; //0.05;

function setup() {
  createCanvas (windowWidth, windowHeight);
 
}

function draw () {
  background(0,50);
  
  textAlign(CENTER, CENTER);
  // text(xoff, windowWidth/2, 100);
  // text(yoff, windowWidth/2, 150);
  translate(windowWidth/2, windowHeight/2);
  stroke('yellow'); 
  strokeWeight(1);
  noFill();
 
  //beginShape();
  //val=slider1.value();
  //inc=slider2.value();
  for (let a = 0; a < TWO_PI; a+=0.01){
    //if (frameCount>a*10) {
    //let r = random(value);
    xoff = pow(a,6)+map(cos(a), -1, 1, 0, 40)*easing;
    yoff = map(sin(a+phase), -1, 1, 0, 40)*easing;
    let r = map(noise(xoff, yoff), 0, 1, 200, 400);
    let x = r * cos(a);
    let y = r * sin(a);
    point(x, y);
    //} 
}
  //endShape(CLOSE);
  ///noLoop();
  //console.log(xoff);
  zoff += 0.05;
  
  phase+=0.01;
}
