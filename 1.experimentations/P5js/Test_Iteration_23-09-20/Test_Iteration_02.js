let lang = navigator.language || 'en-US';
let speechRec = new p5.SpeechRec(lang, gotSpeech);
let continuous = true;
let interim = true;

var button;
var curIndex=0;
var sourceText, allwords, tokens;
var font, font2;
var rand;
var go = false;


function preload (){
  sourceText=loadStrings('data/sourcetext.txt');
  font=loadFont('data/CourierNew.ttf');
  font2=loadFont('data/CourierNewBold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (0);
  allwords = sourceText.join("\n");
  tokens = allwords.split(/\W+/);
  speechRec.onResult = showResult;
  speechRec.start(continuous, interim);
  
  
  button = createButton('Start Reading');
  button.position(windowWidth/2, windowHeight/2);
  button.mousePressed(begin);
  frameRate(1);
  
}

function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}

function draw () {
 
    if (go) {
      background (0);
      fill(255);
      textAlign(CENTER, CENTER);
      textFont(font);
      textSize(94);
        text(tokens[curIndex], random(150, width-150), random(50, height-50));
          curIndex++;
        if (curIndex > tokens.length) {
        curIndex = 0;
        }
      textSize(20);
      textFont(font2);
      fill(255);
      text('read..', 100, 50);
    }
}
function begin() {
  button.position(-100, -100);
  go = true;
}

function gotSpeech(){
  if(speechRec.resultValue){
    
    //createP(speechRec.resultString);
    //runningText=speechRec.resultString;
  }
  fill(255);
}

function showResult(){
  if (speechRec.resultValue === true) {
  
  //text(speechRec.resultConfidence, 50, 50, windowWidth-100, windowHeight);
  //console.log(speechRec.resultConfidence);
  console.log(speechRec.resultString);
  }
}
