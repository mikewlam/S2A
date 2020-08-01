###### An example

Condition for eraser with **if (mousePressed)** </br>
The Else condition allows rainbow circle to draw

#### //Rainbow circles by Karen Ann

void setup() {
  size (500, 500);
  fill (100,30,60, 50);
  background (255,255,255);
  stroke (0);
}

void draw (){
  fill(255,255,255,5);
  rect(0,0,500,500);
  if (mousePressed) {
    fill (255);
    noStroke();
    ellipse (mouseX, mouseY,100, 100);
  }
  else {
    fill (mouseX/2, 0, mouseY/2, 30);
    stroke (0);
    ellipse (mouseX, mouseY,100, 100);
  }
}
void keyPressed() {
  background(mouseX/2, 255-(mouseX/2), mouseY/2);
}
