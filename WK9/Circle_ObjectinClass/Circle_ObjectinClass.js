//Daniel Shiffman code, found at https://www.youtube.com/watch?v=ZI1dmHv3MeM
//Drawing Circle, closed.

let val, slider1;
let inc, slider2;
let phase = 0;
let zoff = 0;
let xoff, yoff;
let easing = 5;
let dots = [];
let SEED;

function setup() {
  createCanvas (windowWidth, windowHeight);
 SEED = random(10, 10000);
}

let m = 2000;
let rad = 1.5;
let nperiod = 4.0;

function draw () {
  background('black');
  
  textAlign(CENTER, CENTER);
  // text(xoff, windowWidth/2, 100);
  // text(yoff, windowWidth/2, 150);
  translate(windowWidth/2, windowHeight/2);
  stroke(255); 
  strokeWeight(2);
  noFill();
 
  for (let i = 0; i<dots.length; i++) {
    dots[i].display();
    dots[i].move();
  }

  
  
  beginShape();
  //val=slider1.value();
  //inc=slider2.value();
  for (let a = 0; a < TWO_PI; a+=0.01){
    
    //let r = random(value);
    xoff = map(cos(a), -1, 1, 0, 20)*easing;
    yoff = map(sin(a), -1, 1, 0, 60)*easing;
    let r = map(noise(xoff, yoff), 0, 1, 150, 400);
    let x = r * cos(a);
    let y = r * sin(a);
    dots.push(new points(x, y));
    //point(x, y);
  }
  endShape(CLOSE);
  //console.log(xoff);
  if (frameCount>10){
    noLoop();
  }
  zoff += 0.15;
  
  phase+=0.01;
}
  
class points {
  constructor (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  move () {
    for (let i=0; i<m; i++){
    this.x+=random(cos(i)+sin(i),cos(i)-sin(i));
    this.y+=random(cos(i)+sin(i),cos(i)-sin(i));
    }
  }
  display (){
    point(this.x, this.y);
  }
}
 
