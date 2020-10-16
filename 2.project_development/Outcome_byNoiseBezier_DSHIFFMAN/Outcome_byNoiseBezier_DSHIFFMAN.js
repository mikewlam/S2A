//Daniel Shiffman code, found at https://www.youtube.com/watch?v=ZI1dmHv3MeM
//Drawing Circle, closed.

let WorL, slider1;
let ChaL, slider2;
let phase = 0;
let zoff = 0;
let easing = 10; //0.05;


function setup() {
  createCanvas (windowWidth, windowHeight);
  slider1=createSlider(1,20, 20, 1);
  slider2=createSlider(1,50, 50, 1);
  slider1.position(550, 300);
  slider2.position(550, 350);
  
}

function draw () {
  colorMode(HSB, 100, 100, 100);
  background(0,30);
  WorL=slider1.value();
  ChaL=slider2.value();
  noStroke();
  fill(255);
  let resultWord = map(WorL, 1, 25, 0, 100);
  let resultValue = map(ChaL, 1, 50, 0, 200);
  text(int(WorL), 750, 310);
  text(int(ChaL), 750, 360); 
  let m = 2000;
  let t = 1*(frameCount-1)/50;
  textAlign(CENTER, CENTER);
  // text(xoff, windowWidth/2, 100);
  // text(yoff, windowWidth/2, 150);
  translate(windowWidth/2, windowHeight/2);
  
  noFill();
  let weight = map(WorL, -200, 200, 1, 255);
  strokeWeight(2);
 

     
     beginShape();
     stroke('orange');
     noFill();
  for (let b=0; b < TWO_PI; b+=0.01) {
    //if (frameCount>b*10) {
      
      
      let xoff1 = map(cos(b), -1, 1, 0, 6);
      let yoff1 = map(sin(b), -1, 1, 0, 1);
      let r1 = map(noise(xoff1, yoff1), 0, 1, 200, windowHeight*0.3);
      let x1 = -r1*cos(b);
      let y1 = -r1*sin(b);
      
      vertex(x1+random(cos(TWO_PI*t), -cos(TWO_PI*t)), y1+random(sin(TWO_PI*t), -sin(TWO_PI*t)));
   // }
  }endShape();
  
  beginShape();
  
  let cx = 0;
  let cy = 0;
  let cpx =  resultValue/2;
  let cpy =  resultWord/2;
  
  let inc = map(t, 0, TWO_PI, 0, cpy);
  let max = map(t, 0, TWO_PI, 0, cpx);

  stroke(255,30);
  noFill();
  for (let a = 0; a < TWO_PI; a+=WorL/20){
      if (frameCount>a*10) {
       let xoff = map(cos(a), -1, 1, 0, 20);
       let yoff = map(sin(a), -1, 1, 0, 20);
       let r = map(noise(xoff, yoff), 0, 1, 50, windowHeight*0.6);
       let x = -r * cos(a) + random(50*cos(TWO_PI*t), -50*cos(TWO_PI*t));
       let y = -r * sin(a) + random(50*sin(TWO_PI*t), -50*sin(TWO_PI*t));
    //if (frameCount>a*10) {
    //let r = random(value);
  
   
    //mid section sharp
    //bezier(cx, cy, random(x-cpx,x+cpx), random(y-cpy, y+cpy), random(cx-cpx, cx+cpx), random(cy-cpy, cy+cpy), x, y);
    //curve
    bezier(cx, cy, random(cx-cpx, cx+cpx), random(cy-cpy, cy+cpy), random(x-cpx,x+cpx), random(y-cpy, y+cpy), x, y);
    //
    //bezier(cx, cy, cx-cpx, cy+cpy, x+cpx, y-cpy, x, y);
    //
    //bezier(cx, cy, random(cx+cpx, x-cpx), random(cy+cpy, y-cpy), random(x-cpx,cx+cpx), random(y-cpy, cy+cpy), cx, cy);
    //
    //bezier(cx, cy, cx+cpx, cy+cpy, x-cpx, y-cpy, cx, cy);
    //
    //ellipse(cx, cy, x, y)
      }
    }
     endShape();
  
    
    zoff += 0.001;
  
 phase+=0.01;

}



//fill(0);
//beginShape();

//  for (let b = 0; b < TWO_PI; a+=WorL/50){
//    if (frameCount>b*100) {
//    //if (frameCount>a*10) {
//    //let r = random(value);
//    xoff = map(cos(b+phase), -1, 1, 0, 20);
//    yoff = map(sin(b), -1, 1, 0, 20);
//    let r = map(noise(xoff, yoff), 0, 1, resultValue, windowHeight*0.4);
//    let x = r * cos(b) + random(5*cos(TWO_PI*t), -5*cos(TWO_PI*t));
//    let y = r * sin(b) + random(5*sin(TWO_PI*t), -5*sin(TWO_PI*t));
    
//    //bezier(cx, cy, pow(cx, cpx), pow(cy, cpy), pow(x, cpx), pow(y, cpy), x, y);
//    //mid section sharp
//    //bezier(cx, cy, random(x-cpx,x+cpx), random(y-cpy, y+cpy), random(cx-cpx, cx+cpx), random(cy-cpy, cy+cpy), x, y);
//    //curve
//    bezier(cx, cy, random(cx-cpx, cx+cpx), random(cy-cpy, cy+cpy), random(x-cpx,x+cpx), random(y-cpy, y+cpy), x, y);
//    }
//   }
//  }
//  endShape(CLOSE);
  ///noLoop();
  //console.log(xoff);
