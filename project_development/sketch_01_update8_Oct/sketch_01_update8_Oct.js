//Sketch began on 26th of September, by Michael W. Lam
//Prototyping project for Slave to the Algorithm Studio, 
//lead by Karen Ann Donnachie and Andy Simionato

//sketch set up
var bgcolor, bgbase;
var F1, F2, F3;
var textInput;
var mode;
var textEntry, textStatement, RiTa, answer;
var statement = 'Insert project statement, description of who, what and why. Context for the project and what it aims to produce.';
var start = 'Click to Start or Refresh';
var textDisplay = [];
var field, button;
let xpos;

//Generative Part
var particles = [];
var x0, x1, x2, x3, x4, x5;
var xhsb;

//Sound Part
var wave;
//input analysis
var resultValue, resultWord, result, vowels, notWord;

//Daniel Shiffman code, found  at https://www.youtube.com/watch?v=ZI1dmHv3MeM

//Drawing Circle, closed.
let phase = 0;
let zoff = 0;
let maxP = 3600;

//RiTa Qestions Variable
var lexicon;
var output1 = [];
var output2 = [];
var words = [];
var cIndex = 0;


function preload() {
   F1=loadFont('data/ABCDiatypeEdu-Regular.otf');
   F2=loadFont('data/ABCFavoritEduMono-Book.otf');
   textInput=loadStrings('data/wittgenstein.txt');
   
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  //translate(windowWidth/2, windowHeight/2);
  lexicon = new RiLexicon();
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.amp(1);
  wave.freq(300);
  
  textAlign(CENTER, CENTER);
  smooth();
  bgcolor = color(6, 9, 54);
  bgbase = 240;
        background(bgbase);
        textFont(F1);
        textAlign(CENTER);
        textSize(30);
        fill(bgcolor);
  xpos = windowWidth*0.41;
  field=createInput();
  field.size(windowWidth*0.305, 30);
  field.position(windowWidth*0.35, windowHeight*0.7);
  field.changed(textData);
  mode = 1; 
      //landing page
      if (mode == 1) {
        field.hide(); 
        fill(bgcolor);  
        textSize(40);
        textFont(F2);
        textStatement=text(statement, windowWidth*0.27, windowHeight*0.4, windowWidth*0.5);
        textSize(20);
        textStart=text(start, windowWidth/2, windowHeight*0.04);
        fill(180);
        textDisplay.push(new copyWrite(windowWidth/2, windowHeight*0.96, 'ESC to restart at any point | ENTER to generate response', 12, F2));
        //textDisplay.push(new copyWrite(windowWidth/2, windowHeight/2, 'ENTER PROGRAM', 30, F2));
        //textDisplay.push(new copyWrite(windowWidth/2, windowHeight*0.96, 'press \'ESC\' to restart at any point', 12, F2));
        }


      
}
//RESIZE CODE FOR LANDING AND MAIN PAGE
//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//  if (mode == 1) {
//    background(bgbase);
//    translate(windowWidth/2, windowHeight/2);
//    textAlign(CENTER, CENTER);
//    textSize(30);
//    textFont(F1);
//    textEntry=text('ENTER PROGRAM..', 0, 0);
  //} if (mode == 3) {
  //  background(bgbase);
//        //text input for instruction 'click'
//        textSize(40);
//        textFont(F2);
//        textQuestion=text('click!', windowWidth/2, windowHeight*0.3);
//    
//    field.position(windowWidth/2-200, windowHeight-windowHeight/3);
//        //text input for instructions
//        textSize(18);
//        textFont(F2);
//        fill(0);
//        text("press \'ESC\' to restart at any point", windowWidth/2, windowHeight*0.96);
//    //textDisplay.push(new copyWrite(windowWidth/2, windowHeight*0.96, 'press \'ESC\' to restart at any point', 18, F2));
    
//}
//}



//Input Analysis
function textData() {
  mode = 3;
  //background(bgbase);
  field.hide();
  var data = field.value();
 
  //RiTa Analysis
      //creating a new rita string from (data)
  result = new RiString(data); 
      //qty of words in result
  resultWord = result.words().length;
      //qty of characters in result
  resultValue = result.length(); 
      //match specific character
  vowels = result.match(/(a|e|i|o|u)/g).length;
  notWords = result.match(/(\W|\d)/g).length;
  words = result.split('');
  

//Generative Variables
  //Exterior  
  x0 = map(resultValue, 0, 100, 0.1, 7);
  x1 = map(resultWord, 0, 12, 1, 15);
  x1a = map(resultWord, 0, 10, -300, -900);
  //Details
  x2 = map(resultValue, 0, 100, 0.025, 0.1); //
  x3 = map(notWords, 0, 15, 0, 0.01); //animate
  x4 = map(noise(vowels, notWords), 0, 10, 0.75, 5);
  x5 = map(resultWord, 0, 10, 0.25, 5);

  noiseSeed(random(10)); 
   
  //clear input value
  field.value('');
}


function draw() {

  let time = frameCount%200;
                if (mode == 3 && resultValue > 1) {
                
                translate(windowWidth/2, windowHeight/2);
                
                background(6, 9, 54, 90);
                let m = 2000;
                let t = 1*(frameCount-1)/time;
//First Shape
//beginShape ();
                  //console.log(x0); //167
                  //console.log(x1); //168
                  //console.log(x2); //169
                  //console.log(x3); //170
                  //console.log(vowels);
                  //console.log(notWords);
                  //console.log(xhsb);
                  //console.log(x2);
                  
                 //let xoff = map(cos(a), -1, 1, 0, 6);
                 //let yoff = map(sin(a), -1, 1, 0, 6);
                 //let r = map(noise(xoff, yoff), 0, 1, 200, windowHeight*0.3);
                 //let x = -r * cos(a) + random(cos(TWO_PI*t), -cos(TWO_PI*t));
                 //let y = -r * sin(a) + random(sin(TWO_PI*t), -sin(TWO_PI*t));
                                                
                          for (let a=0; a<360; a+=0.2) { //a is the amount of dots
                             
                             let noiseMax = map(random(a), 0, 360, 0.1, x0);
                             //stroke(xr, xg, xb, 6);
                             let xoff = map(cos(a), -1, 1, 0, noiseMax); //this value controls the sharpness of angle
                             let yoff = map(sin(a), -1, 1, 0, noiseMax);
                             let r = map(noise(xoff, yoff, zoff), 0, 1, x1a, windowHeight*0.5);
                             let x = -r * cos(a)+sin(xoff);// + random(cos(TWO_PI*t), -cos(TWO_PI*t));
                             let y = r * sin(a)+cos(yoff);// + random(sin(TWO_PI*t), -sin(TWO_PI*t));
                             let z = random(0.7, 1.5);
                         
                             particles.push(new generative(x, y, z));  
                             
                             //strokeWeight(x1);
                             //fill(360);
                             //vertex(x, y);
                             
                               if (particles.length>maxP) {
                                 particles.splice(0, 1);
                             }
                           }
//endShape();
 //phase+=x3;
 if (zoff < x5) {
 zoff+=x2;
 } else if (zoff => x5) {
   x2-=0.001;
   
 }
 fill(bgbase);
 textSize(24);
 textFont(F2);
 noStroke();
 answer = text(result, 0, windowHeight*0.3);

 
 //noStroke();
 //fill(bgcolor);
 //smooth();
                 
                 
                //} //mode = 3, draw
                
 }
  for (var i=0; i<textDisplay.length; i++) {
    textDisplay[i].display();
    }
  //Loop for particles class
  for (var j=0; j<particles.length; j++) {
    //particles[j].move();
    particles[j].display();
  }
}
          




//Regenerate RiTa Library Question
function mousePressed() {
  if (mouseX>windowWidth/2-200 && mouseX<windowWidth/2+200 && mouseY>windowHeight/2-320 && mouseY<windowHeight/2+200 && mode == 1) {
  background(bgbase);
  //textQuestion = clear();

//RiTa Syntax for Questions
 output1 = lexicon.randomWord("wrb")+" do you "+
           lexicon.randomWord("vb")+" "+
           lexicon.randomWord("rb")+"?";

 output2 = lexicon.randomWord("cc",1)+" "+
           lexicon.randomWord("md")+" you "+
           lexicon.randomWord("rb")+" "+
           lexicon.randomWord("vb")+"?";


  fill(bgcolor);
  noStroke();
  textAlign(CENTER, CENTER);
  background(bgbase);
  textFont(F2);
  textSize(45);
  fill(bgcolor);
  text (output1, windowWidth*0.21, windowHeight*0.4, windowWidth*0.6);
  textFont(F1);
  //answer = text('tell me..', windowWidth/2, windowHeight-windowHeight/3);
  
  field.show();
  //add copyWrite object here for ESC
  noStroke();
  fill(180);
  //textDisplay.push(new copyWrite(windowWidth/2, windowHeight*0.96, 'press \'ESC\' to restart at any point', 12, F2));
  }
  //if (mouseX>windowWidth/2-200 && mouseX<windowWidth/2+200 && mouseY>windowHeight/2-320 && mouseY<windowHeight/2-50 && mode == 3) {
  //mode = 1;
  //clear();
  //background(bgbase);
  //translate(-windowWidth/2, -windowHeight/2);
  //particles.splice(0, 800);
  //textDisplay.splice(0,50);
  //noStroke();
  //textQuestion = clear();
  //output = lexicon.randomWord("wp")+" " + lexicon.randomWord("md")+" the "+lexicon.randomWord("nns")+" "+lexicon.randomWord("jjs")+" "+lexicon.randomWord("rp")+" "+lexicon.randomWord("nn")+" "+lexicon.randomWord("pos")+lexicon.randomWord("fw")+lexicon.randomWord("vb")+"?";
  ////words = output.split(' ');
  //fill(bgcolor);
  //textAlign(CENTER, CENTER);
  
  //textFont(F2);
  //textSize(45);
  //text (output, windowWidth*0.21, windowHeight*0.3, windowWidth*0.6);
  //textFont(F1);
  ////answer = text('tell me..', windowWidth/2, windowHeight-windowHeight/3);
  //
  //field.show();
  ////add copyWrite object here for ESC
  //noStroke();
  //textDisplay.push(new copyWrite(windowWidth/2, windowHeight*0.96, 'press \'ESC\' to restart at any point', 12, F2));
  
  //}
}

//function keyTyped () {
//   //clear();
//   let string = [];
//   if (mousePressed) {
//   //text(key, xpos, 200);
//   textDisplay.push(new copyWrite (xpos, windowHeight-windowHeight/3, key, 45, F1));
//   xpos+= 20;
//   }


//}

//change MODE -> landing page to main page
function keyPressed () {
  let loading;
    //Interactive page
    // 27 is ESC
     if (keyCode === 27 && mode == 3) {
       colorMode(RGB);
       translate (-windowWidth/2, -windowHeight/2);
       
       //if (mode == 3) {
         background(bgbase);
         particles.splice(0, maxP);
         textDisplay.splice(0, 800);
       //}
      mode = 1;
      zoff=0;
      textStart = clear();
 output1 = lexicon.randomWord("wrb")+" do you "+
           lexicon.randomWord("vb")+" "+
           lexicon.randomWord("rb")+"?";

 output2 = lexicon.randomWord("cc",1)+" "+
           lexicon.randomWord("md")+" you "+
           lexicon.randomWord("rb")+" "+
           lexicon.randomWord("vb")+"?";

      fill(bgcolor);
      noStroke();
      textAlign(CENTER, CENTER);
      background(bgbase);
      fill(bgcolor);
      textFont(F2);
      textSize(45);
      loading = text (output2, windowWidth*0.21, windowHeight*0.4, windowWidth*0.6);
      field.show();
     } else if (keyCode === 27 && mode == 1) {
         background(bgbase);
         textSize(20);
         fill(bgcolor);
         textFont(F2);
         textStart=text(start, windowWidth/2, windowHeight*0.04);
         field.hide();
         //textSize(45);
         //loading = text('..Loading..', windowWidth/2, windowHeight*0.5);
      } 
      //add copyWrite object here for ESC
      noStroke();
      fill(180);
      textDisplay.push(new copyWrite(windowWidth/2, windowHeight*0.96, 'ESC to restart at any point | ENTER to generate response', 12, F2));
       
     }

class generative {
    constructor (x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
    //move () {
    //  this.x += random (sin(this.speed), sin(-this.speed));
    //  this.y += random (cos(-this.speed), cos(-this.speed));
    //}
    display () {
      noFill();
      strokeWeight(random(x4));
      stroke(bgbase);
      //stroke(255, 120, 0, this.lifespan);
      //potentially adding fill or some color here
      ellipse(this.x, this.y, this.z);
    }
}

class copyWrite {
  constructor (x, y, letter, size, font) {
    this.x= x;
    this.y= y;
    this.letter= letter;
    this.textSize= size;
    this.textFont= font;
  }
  display (){
    smooth();
    textSize(this.textSize);
    textFont(this.textFont);
    noStroke();
    text(this.letter, this.x, this.y);
  }
}
