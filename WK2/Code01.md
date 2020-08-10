###### a sketch that draws circle in the set size depending on where the mouse cursor moves. The lines also has a fixed starting point at the centre that connects to the drawing circles. This sketch is called the *Moving Lollipop*

//Sketch made on 31st of July, 2020 by Michael//

void setup (){ </br>
background (0,0,255); </br>
size (500, 500); </br>
}</br>
</br>
void draw(){ </br>
translate (250, 250); </br>
 stroke (mouseX, mouseY, mouseX+mouseY);//this will set the following code to this code color </br>
line (0, 0, mouseX-250, mouseY-250); </br>
</br>
stroke (255,255,0);//this changes the previous stroke colour to this current one</br>
fill (mouseX/2, mouseY/2, (mouseX+mouseY)/4);</br>
ellipse (mouseX-250, mouseY-250, 50, 50);//uses the mouse coordinates as the centre point for the ellipse</br>
</br>
noStroke ();</br>
fill (255, 255, 0);</br>
//rect (240, 240, 20, 20);</br>
}</br>
</br>
  </br>
void mousePressed(){</br>
background (mouseY/2, (mouseY+mouseX)/4, 250-mouseX/2);</br>
}</br>

<img src= >
