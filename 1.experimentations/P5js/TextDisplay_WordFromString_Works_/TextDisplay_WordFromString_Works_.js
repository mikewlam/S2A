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
