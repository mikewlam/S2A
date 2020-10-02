//weird self portrait - michael</br>
</br>
void setup(){</br>
background (25, 255, 155);</br>
size (500, 500);</br>
}</br>
</br>
void draw(){</br>
  fill(mouseX/2, mouseY/2, mouseX+mouseY);</br>
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);</br>
  fill(250,250,0);</br>
  ellipse (250, 150, 80, 100);</br>
  fill(0);</br>
  ellipse (235, 130, 15, 20);</br>
  ellipse (265, 130, 15, 20);</br>
  fill (mouseX/2, mouseY/2, mouseX+mouseY);</br>
  rect (250, 150, 5, 7);</br>
  line (250, 200, 250, 300);</br>
  line (250, 300, 205, 375); </br>
  line (250, 300, 295, 375); </br>
  line (190, 230, 310, 230);</br>
  noStroke();</br>
  fill (255, 150, 0);</br>
 ellipse (295, 375, 30, 10);</br>
 ellipse (205, 375, 30, 10);</br>
  stroke (mouseX/2, mouseY/2, mouseX+mouseY);</br>
}</br>
</br>
void variableEllipse(int x, int y, int px, int py) {</br>
  float speed = abs(x-px) + abs(y-py);</br>
  stroke(speed);</br>
  ellipse(x, y, speed, speed);</br>
}</br>
</br>
void mousePressed(){</br>
background (mouseY/2, (mouseY+mouseX)/4, 250-mouseX/2);</br>
}</br>
