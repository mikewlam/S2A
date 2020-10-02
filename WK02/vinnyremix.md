//Sketch made 31/7/2020 Vinny Portrait
//Moving eyebrows remixed by Michael
void setup(){ 
size(500,500); //size of canvas
background(0); //background colour
}

void draw(){
fill(131,54,0);
ellipse(250,100,350,350);
fill(255,100,100);
ellipse(250,150,200,200);
noStroke();
fill(255,100,100);
rect(150,150,200,300);
stroke(0);
fill(255);
ellipse(200,200,50,50);
fill(255);
ellipse(300,200,50,50);
fill(0);
ellipse(200,200,10,10);
fill(0);
ellipse(300,200,10,10);
//fill(mouseX,mouseY,mouseX+mouseY);
//rect(125,175,150,20);
//fill(mouseX,mouseY,mouseX+mouseY);
//rect(225,150,150,20);
strokeWeight(10);
line(150, mouseX/2+40, 225, 165);
line(350, mouseX/2+40, 275, 165);
fill(0);
ellipse(275,350, 200,100);
noStroke();
fill(255,100,100);
ellipse(350,270,100,80);
fill(255,100,100);
ellipse(250,500,400,100);
}

