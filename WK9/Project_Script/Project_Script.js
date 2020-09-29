//Sketch began on 26th of September, by Michael W. Lam
//Prototyping project for Slave to the Algorithm Studio, 
//lead by Karen Ann Donnachie and Andy Simionato

//sketch set up
var bgcolor;
var F1, F2, F3;
var textInput;
var mode;
var textEntry, textQuestion;
var textDisplay = [];
var field, button;
var lexicon;
//input analysis
var resultValue, resultWord, result, Stresses;

function preload() {
   F1=loadFont('data/ABCDiatypeEdu-Regular.otf');
   F2=loadFont('data/ABCFavoritEduMono-Book.otf');
   textInput=loadStrings('data/wittgenstein.txt');
   
}


function setup() {
  createCanvas(windowWidth, windowHeight);
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
        textEntry=text('ENTER PROGRAM..', windowWidth/2, windowHeight/2);
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
    textAlign(CENTER, CENTER);
    textSize(30);
    textFont(F1);
    textEntry=text('ENTER PROGRAM..', windowWidth/2, windowHeight/2);
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
      field.hide();
      button.hide();
      textQuestion.clear();
      background(0);
      textSize(30);
      fill('yellow');
      textAlign(CENTER, CENTER);
      textFont(F1);
      textEntry=text('ENTER PROGRAM..', windowWidth/2, windowHeight/2);
     }
}


//Input Analysis
function textData() {
  const data = field.value();
  //field.value(' ');
  //RiTa Analysis
  result = new RiString(data);
  resultWord = result.words();
  resultValue = result.length();
  
  }
  //console.log(result);
  //console.log(resultWord);
  //console.log(resultValue);

function draw() {
        
}


//Regenerate RiTa Library Question
function mousePressed() {
  if (mouseX>windowWidth/2-200 && mouseX<windowWidth/2+200 && mouseY>windowHeight/2-320 && mouseY<windowHeight/2-50 && mode == 1) {
  textQuestion = clear();
  var output = "Tell me, "+lexicon.randomWord("wp")+" " + lexicon.randomWord("md")+" the "+lexicon.randomWord("nns")+" "+lexicon.randomWord("jjs")+" "+lexicon.randomWord("rp")+" "+lexicon.randomWord("nn")+" "+lexicon.randomWord("pos")+lexicon.randomWord("fw")+lexicon.randomWord("vb")+"?";
  fill(0);
  textAlign(CENTER, CENTER);
  background('yellow');
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
    text("press \'ESC\' to restart at any point", windowWidth/2, windowHeight*0.96);
    
  } 
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
