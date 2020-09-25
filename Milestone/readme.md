ASSIGNMENT [PART A] Submission

###### Understanding word split and display
```
var sourceText = "Life is short and art long";
var words = sourceText.split(" ");
var myFont;
var curIndex = 0;

function preload (){
  myFont = loadFont('data/GTFOppositTRIAL-Medium.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);
  fill(255);
  textSize(144);
  textFont(myFont);
  textAlign(CENTER, CENTER);
    fill(255);
    text(words[curIndex], width/2, height/2);
    curIndex++;
    if (curIndex > words.length) {
      curIndex = 0;
    }
}
  
  //text(sourceText.substring(curIndex, curIndex+1), width/2, height/2);
  //curIndex++;
  //if (curIndex > sourceText.length) {
    //curIndex = 0;
```

###### Most Current Iteration
```
let lang = navigator.language || 'en-US';
let speechRec = new p5.SpeechRec(lang, gotSpeech);
let continuous = true;
let interim = true;
let a = [];

var button;
var curIndex=0;
var sourceText, allwords, tokens;
var font, font2;
var rand;
var go = false;


function preload (){
  sourceText=loadStrings('data/kafka.txt');
  font1=loadFont('data/ABCDiatypeEdu-Regular.otf');
  font2=loadFont('data/ABCFavoritEduMono-Book.otf');
  font3=loadFont('data/CourierNew.ttf');
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
  
  }

function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}

function draw () {
 
    if (go) {
      frameRate(a/2+1);
      background (0);
      fill(255);
      textAlign(CENTER, CENTER);
      textFont(font1);
      textSize(20+a*10);
              text(tokens[curIndex], random(150, width-150), random(50, height-50));
          curIndex++;
        if (curIndex > tokens.length) {
        curIndex = 0;
        }
      textSize(20);
      textFont(font2);
      fill(255,0,0);
      text('read..', 100, 50);
      fill(0, 255, 0);
      textFont(font3);
      text(a, windowWidth/2, 50);
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
  a = float(speechRec.resultConfidence);
  //text(speechRec.resultConfidence, 50, 50, windowWidth-100, windowHeight);
  console.log(speechRec.resultConfidence);
  //console.log(speechRec.resultString);
  //console.log(speechRec.resultConfidence);
  //console.log(frameRate);
 
  }
}
```
