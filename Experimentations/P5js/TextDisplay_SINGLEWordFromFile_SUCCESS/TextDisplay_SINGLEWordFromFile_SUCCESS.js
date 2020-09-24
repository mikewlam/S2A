var sourceText;
var myFont;
var curIndex = 0;
var allwords, tokens, words;
function preload (){
  myFont = loadFont('data/CourierNew.ttf');
  sourceText = loadStrings('data/sourcetext.txt');
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  translate(windowWidth/2, windowHeight/2);
  allwords = sourceText.join("\n");
  tokens = allwords.split(/\W+/);
  //words = tokens.toString();
  //console.log(tokens);
  frameRate(2);
  smooth();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function draw() {
  
  background(50);
  fill(255);
  textSize(50);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  text(tokens[curIndex], windowWidth/2, windowHeight/2,);
     curIndex++;
     if (curIndex > tokens.length) {
       curIndex = 0;
      }
}

 
//function mousePressed() {
//  text(line[curIndex], windowWidth/2, windowHeight/2);
//  curIndex++;
//  if (curIndex>line.length){
//    curIndex=0;
//  }
//}
  
  

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
