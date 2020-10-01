//Sketch began on 26th of September, by Michael W. Lam
//Prototyping project for Slave to the Algorithm Studio, 
//lead by Karen Ann Donnachie and Andy Simionato

//sketch set up
var bgcolor;
var F1, F2, F3;
var textInput;
var mode;
var textEntry, textQuestion, RiTa;
var textDisplay = [];
var field, button;
var lexicon;
//input analysis
var resultValue, resultWord, result, Stresses;
var akey, bkey, ckey, dkey, ekey, fkey, gkey, hkey, ikey, jkey, kkey, lkey, mkey, nkey, okey, pkey, qkey, rkey, skey, tkey, ukey, vkey, wkey, xkey, ykey, zkey;

//Daniel Shiffman code, found at https://www.youtube.com/watch?v=ZI1dmHv3MeM
//Drawing Circle, closed.

let phase = 0;
let zoff = 0;


function preload() {
   F1=loadFont('data/ABCDiatypeEdu-Regular.otf');
   F2=loadFont('data/ABCFavoritEduMono-Book.otf');
   textInput=loadStrings('data/wittgenstein.txt');
   
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  translate(windowWidth/2, windowHeight/2);
  lexicon = new RiLexicon();
  background(0);
  textAlign(CENTER, CENTER);
  bgcolor = 'yellow';
  field=createInput();
  field.size(300,30);
  field.position(windowWidth/2-200, windowHeight-windowHeight/3);
  button=createButton('generate');
  button.size(100,30);
  button.position(windowWidth/2+100, windowHeight-windowHeight/3);
  button.mousePressed(textData);
  mode = 0; 
      //landing page
      if (mode == 0) {
        field.hide(); 
        button.hide();
        textFont(F1);
        textAlign(CENTER, CENTER);
        textSize(30);
        fill('yellow');
        textEntry=text('ENTER PROGRAM..', 0, 0);
        //textDisplay.push(new copyWrite(windowWidth/2, windowHeight/2, 'ENTER PROGRAM', 30, F2));
        }
  
  for (var i=0; i<textDisplay.length; i++) {
    textDisplay[i].display();
  }

      
}
//RESIZE CODE FOR LANDING AND MAIN PAGE
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (mode == 0) {
    background(0);
    translate(windowWidth/2, windowHeight/2);
    textAlign(CENTER, CENTER);
    textSize(30);
    textFont(F1);
    textEntry=text('ENTER PROGRAM..', 0, 0);
  } if (mode == 1) {
    background(bgcolor);
        //text input for instruction 'click'
        textSize(40);
        textFont(F2);
        textQuestion=text('click!', windowWidth/2, windowHeight*0.3);
    button.position(windowWidth/2+100, windowHeight-windowHeight/3);
    field.position(windowWidth/2-200, windowHeight-windowHeight/3);
        //text input for instructions
        textSize(18);
        textFont(F2);
        fill(0);
        text("press \'ESC\' to restart at any point", windowWidth/2, windowHeight*0.96);
    //textDisplay.push(new copyWrite(windowWidth/2, windowHeight*0.96, 'press \'ESC\' to restart at any point', 18, F2));
    
}
}
//change MODE -> landing page to main page
function keyPressed() {
    //Interactive page
    if (keyCode === ENTER) {
      mode = 1;
      if (mode == 1) {
      textEntry = clear();
      background(bgcolor);
      //textDisplay.push(new copyWrite(windowWidth/2, windowHeight*0.96, 'press \'ESC\' to restart at any point', 18, F2));
      //fill(0);
      } 
        //Find way to add text as object here for ESC
        fill(0);  
        textSize(40);
        textFont(F2);
        //textDisplay.push(new copyWrite(windowWidth/2, windowHeight*0.96, "press \'ESC\' to restart at any point", 18, F2));
        textQuestion=text('click!', windowWidth/2, windowHeight*0.3);
        //text input for instructions
        textSize(18);
        textFont(F2);
        fill(0);
        text("press \'ESC\' to restart at any point", windowWidth/2, windowHeight*0.96);
     //Return back to landing page
     } else if (keyCode === 27) {
      mode = 0;
      translate(windowWidth/2, windowHeight/2);
      field.hide();
      button.hide();
      textQuestion.clear();
      background(0);
      textSize(30);
      fill(bgcolor);
      textAlign(CENTER, CENTER);
      textFont(F1);
      textEntry=text('ENTER PROGRAM..', 0, 0);
     }
}


//Input Analysis
function textData() {
  mode = 3;
  field.hide();
  button.hide();
  RiTa.clear();
  const data = field.value();
  //field.value(' ');
  //RiTa Analysis
  result = new RiString(data);
  resultWord = result.words().length;
  resultValue = result.length();
    vowels = result.match(/(a|e|i|o|u)/g).length;
    //bkey = 66*result.match("b").length;
    //ckey = 67*result.match("c").length;
    //dkey = 68*result.match("d").length;
    //ekey = result.match("e").length;
    //fkey = 70*result.match("f").length;
    //gkey = 71*result.match("g").length;
    //hkey = 72*result.match("h").length;
    //ikey = result.match("i").length;
    //jkey = 74*result.match("j").length;
    //kkey = 75*result.match("k").length;
    //lkey = 76*result.match("l").length;
    //mkey = 77*result.match("m").length;
    //nkey = 78*result.match("n").length;
    //okey = result.match("o").length;
    //pkey = 80*result.match("p").length;
    //qkey = 81*result.match("q").length;
    //rkey = 82*result.match("r").length;
    //skey = 83*result.match("s").length;
    //tkey = 84*result.match("t").length;
    //ukey = result.match("u").length;
    //vkey = 86*result.match("v").length;
    //wkey = 87*result.match("w").length;
    //xkey = 88*result.match("x").length;
    //ykey = 89*result.match("y").length;
    //zkey = 90*result.match("z").length;
    console.log(akey);
    //console.log(ekey);
    //console.log(ikey);
    //console.log(okey);
    //console.log(ukey);
    
}


//Regenerate RiTa Library Question
function mousePressed() {
  if (mouseX>windowWidth/2-200 && mouseX<windowWidth/2+200 && mouseY>windowHeight/2-320 && mouseY<windowHeight/2-50 && mode == 1) {
  textQuestion = clear();
  var output = "Tell me, "+lexicon.randomWord("wp")+" " + lexicon.randomWord("md")+" the "+lexicon.randomWord("nns")+" "+lexicon.randomWord("jjs")+" "+lexicon.randomWord("rp")+" "+lexicon.randomWord("nn")+" "+lexicon.randomWord("pos")+lexicon.randomWord("fw")+lexicon.randomWord("vb")+"?";
  fill(0);
  textAlign(CENTER, CENTER);
  background(bgcolor);
  textFont(F2);
  textSize(40);
  text (output, windowWidth/2-250, windowHeight*0.3, 500);
  button.show();
  field.show();
  //add copyWrite object here for ESC
  //textDisplay.push(new copyWrite(windowWidth/2, windowHeight*0.96, 'press \'ESC\' to restart at any point', 18, F2));
  textSize(18);
    textFont(F2);
    fill(0);
    RiTa = text("press \'ESC\' to restart at any point", windowWidth/2, windowHeight*0.96);
    
  } 
}

function draw() {
 
  
  if (mode == 3) {
    
    colorMode(HSB, 100, 100, 100);
    background(0);
    stroke('yellow');
    noFill();
    let m = 2000;
    let t = 1*(frameCount-1)/50;
    translate(windowWidth/2, windowHeight/2);
    
    
    beginShape ();
    for (let b=0; b < TWO_PI; b+=0.01) {
    //if (frameCount>b*10) {
      let xoff1 = map(cos(b), -1, 1, 0, 6);
      let yoff1 = map(sin(b), -1, 1, 0, 1);
      let r1 = map(noise(xoff1, yoff1), 0, 1, 200, windowHeight*0.3);
      let x1 = -r1*cos(b);
      let y1 = -r1*sin(b);
      
      vertex(x1+random(cos(TWO_PI*t), -cos(TWO_PI*t)), y1+random(sin(TWO_PI*t), -sin(TWO_PI*t)));
   // }
    }
    endShape();
  beginShape();
  
  
  let cpx =  resultValue/2;
  let cpy =  resultWord/2;
  
  let inc = map(t, 0, TWO_PI, 0, cpy);
  let max = map(t, 0, TWO_PI, 0, cpx);

  stroke(255,30);
  noFill();
  for (let a = 0; a < TWO_PI; a+=1){
      if (frameCount>a*10) {
       let xoff = map(cos(a), -1, 1, 0, 7);
       let yoff = map(sin(a), -1, 1, 0, 7);
       let r = map(noise(xoff, yoff), 0, 1, 50, windowHeight*0.4);
       let x = -r * cos(a);// + random(50*cos(TWO_PI*t), -50*cos(TWO_PI*t));
       let y = -r * sin(a);// + random(50*sin(TWO_PI*t), -50*sin(TWO_PI*t));
    //if (frameCount>a*10) {
    //let r = random(value);
  
     for (let c=0; c < TWO_PI; c+=TWO_PI/8){
       let xoff1 = map(cos(a+phase), -1, 1, 0, 40);
       let yoff1 = map(sin(a), -1, 1, 0, 40);
       let r1 = map(noise(xoff1, yoff1, zoff), 0, 1, 0, windowHeight*0.2);
       let cx = -r1 * cos(phase+c) ;
       let cy = -r1 * sin(phase+c) ;
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
    //line ( cx, cy, x, y);
         }
      }
    }
     endShape();
} 
  phase+=0.01;
  zoff+= 0.01;
    
}




class copyWrite {
  constructor (x, y, letter, size, font, fill) {
    this.x= x;
    this.y= y;
    this.letter= letter;
    this.textSize= size;
    this.textFont= font;
  }
  display (){
    textSize(this.textSize);
    textFont(this.textFont);
    text(this.letter, this.x, this.y);
  }
}
