
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
