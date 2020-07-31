
line (x1, y1, x2, y2);

point (x, y);

background (R, G, B);

stroke (R, G, B);

rect (top left, Top right, W, H);

elipse (Centre X, Centre Y, W, H);

fill (R, G, B);

noStroke ();


Void Setup (){
}

Void draw () {
}


//Sketch made on 31st of July, 2020 by Michael//

void setup (){
background (0,0,255);
size (500, 500);
}

void draw(){
translate (250, 250);
 stroke (mouseX, mouseY, mouseX+mouseY);//this will set the following code to this code color
line (0, 0, mouseX-250, mouseY-250);

stroke (255,255,0);//this changes the previous stroke colour to this current one
fill (mouseX/2, mouseY/2, (mouseX+mouseY)/4);
ellipse (mouseX-250, mouseY-250, 50, 50);//uses the mouse coordinates as the centre point for the ellipse

noStroke ();
fill (255, 255, 0);
//rect (240, 240, 20, 20);
}

  
void mousePressed(){
background (mouseY/2, (mouseY+mouseX)/4, 250-mouseX/2);
}


//weird self portrait - michael

void setup(){
background (25, 255, 155);
size (500, 500);
}

void draw(){
  fill(mouseX/2, mouseY/2, mouseX+mouseY);
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
  fill(250,250,0);
  ellipse (250, 150, 80, 100);
  fill(0);
  ellipse (235, 130, 15, 20);
  ellipse (265, 130, 15, 20);
  fill (mouseX/2, mouseY/2, mouseX+mouseY);
  rect (250, 150, 5, 7);
  line (250, 200, 250, 300);
  line (250, 300, 205, 375); 
  line (250, 300, 295, 375); 
  line (190, 230, 310, 230);
  noStroke();
  fill (255, 150, 0);
 ellipse (295, 375, 30, 10);
 ellipse (205, 375, 30, 10);
  stroke (mouseX/2, mouseY/2, mouseX+mouseY);
}

void variableEllipse(int x, int y, int px, int py) {
  float speed = abs(x-px) + abs(y-py);
  stroke(speed);
  ellipse(x, y, speed, speed);
}

void mousePressed(){
background (mouseY/2, (mouseY+mouseX)/4, 250-mouseX/2);
}
