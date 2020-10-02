###### An example

Using Rotate function </br>
Resetting the cartesian reference point with **translate**

#### //Sketch made 31/07/2020 Connor McNamara </br> //remixed to spin by Karen ann
void setup(){
background(0);
size (500, 500);
}  

void draw(){
background(0);
stroke(255);
line(0,250,500,250);
noStroke();
fill(230, 200,180);
//the face follows from here
translate(250,250);
rotate (mouseY-mouseX); //this makes the face spin
ellipse (0, 0, 150,200);
fill(255);
ellipse (-30, -40, 40,40);
ellipse (30, -40, 40,40);
fill (0);
ellipse (-30, -40, 15,15);
ellipse (30, -40, 15,15);
fill(mouseX/2, mouseY/2, (mouseX + mouseY)/4);
ellipse (0, 30, 70,30);
noStroke();
translate(0,0);
}
  
void keyPressed(){
  background (mouseY/2, (mouseY+mouseX)/4, 255-mouseX/2);
}


