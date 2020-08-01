###### an example

Interval as Line Distance ~~> setting parameters for interval increment to draw line with **lineDistance+=3**
Condition **if (mousePressed)** ~~> enables drawing when mouse is pressed

#### //Sketch made 31/7/2020 by sylvain </br> //remixed for horizontal lines by Karen ann </br>


int lineDistance=0; </br>
void setup () { </br>
size (500, 500); </br>
background (225, 210, 230);  </br>
frameRate(10);</br>
} </br>

void draw () { </br>
stroke (215, 180, 250); //or noStroke() </br>
line (0,lineDistance,500,lineDistance); </br>
lineDistance+=3; </br>
strokeWeight (1); </br>
fill (255, 175, 175); </br>
if (lineDistance>=500){ </br>
  lineDistance=0; </br>
  background (225, 210, 230);  </br>
}</br>
  if (mousePressed) { </br>
    
  fill (255, 100, 100); </br>
  ellipse (mouseX, mouseY, 10, 10); </br>
}</br>
}</br>

