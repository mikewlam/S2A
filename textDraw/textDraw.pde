//TextDraw Example

PFont myfont; //Setup parameter for font
int randChar, randSize; //set up different set of random interger
char letter; //set up the parameter for choosing character of the typeface
color randColorR, randColorG, randColorB;


void setup (){
size (500, 500);
background (150,0,0);
myfont=loadFont("Fuji-Bold-48.vlw"); //loading a font in the file
frameRate(40); //speed of the sketch

}

void draw (){
fill(0,0,150); //color of the font
textFont(myfont); //using the preset parameter of a font thats loaded in void setup
randChar=int(random(120)+1); //setting the value for the interger, used for character choice
randSize=int(random(60)+1); //setting the value for the interger, used for character size
letter=char(randChar); //draws the letter
textSize(int(randSize)+1);
if (mousePressed){
text(letter,mouseX,mouseY);
}
}

void keyPressed(){
  randColorR=int(map(mouseX, 0, width, 0, 255));
  randColorG=int(map(mouseY, 0, height, 0, 255));
  randColorB=int(map(mouseX+mouseY, 0, width+height, 0, 255));
  background (randColorR,randColorG,randColorB);
}
