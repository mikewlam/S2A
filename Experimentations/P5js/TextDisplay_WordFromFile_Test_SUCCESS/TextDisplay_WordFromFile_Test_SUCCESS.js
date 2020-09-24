var sourceText;
var line = [];
var myFont;
var curIndex = 0;

function preload (){
  myFont = loadFont('data/CourierNew.ttf');
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  translate(windowWidth/2, windowHeight/2);
  line = loadStrings('data/sourcetext.txt', results);
  //var list1 = split(line, " ");
  frameRate(2);
  smooth();
}

function results() {
  sourceText = split(line, ' ');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function draw() {
  
  background(50);
  fill(255);
  textSize(50);
  textFont(myFont);
  textAlign(LEFT, TOP);
  //sourceText = line[0];
  text(line[curIndex], 50, 10, windowWidth-100, windowHeight);
  curIndex++;
  if (curIndex>line.length){
    curIndex=0;
  }
 }

    //fill(255);
    //text(words[curIndex], width/2, height/2);
    //curIndex++;
    //if (curIndex > words.length) {
      //curIndex = 0;
    //}

  
  //text(sourceText.substring(curIndex, curIndex+1), width/2, height/2);
  //curIndex++;
  //if (curIndex > sourceText.length) {
    //curIndex = 0;
