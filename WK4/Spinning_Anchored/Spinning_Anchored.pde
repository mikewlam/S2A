PFont Object;
float spin=0, spin2=0;

void setup (){
  size (500, 500);
  background (255, 204, 0);
  
  fill (0);
  smooth();
  Object=loadFont("ObjectSans-Bold-48.vlw");
  textAlign (CENTER,CENTER); // (horizontal align, vertical align)
  
  frameRate(10);
}

void draw (){
  //translate (width/2,height/2);
  //spin2+=-0.5;
  //rotate(spin2);
  
  fill(255,0,0,90);
  ellipse(250, 250, mouseX-mouseY, mouseX-mouseY);
  
  translate (width/2,height/2);
  spin+=-0.5;
  rotate(spin);
  
  fill(0);
  textFont(Object);
  textSize(35);
  text("Slave to the Algorithm",200,0);
  
//noStroke();
  fill(255,204,0, 30);
  rotate(0);
  rect(-width/2,-height/2,width,height);
  
  saveFrame("RotateWord-####.png");
}

void mousePressed(){
  
}
