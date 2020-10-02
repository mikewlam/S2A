var song; //set variable name for our song input
var analyzer; 
//var volume;

function preload(){// only neccessary for large files.
  song=loadSound('data/Beautiful.mp3'); 
}
  
function setup() {
  createCanvas(windowWidth,windowHeight); //create full window canvas
  background(0); //background of canvas
  fill(0,255,0); //starting color of our objects
  
  // set analyzer to check amplitude
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  stroke(255,255,0);
}


function draw() {
  background(0,50);
  var volume=analyzer.getLevel(); //this will extract the volume of song sent to analyzer
  volume=(volume*windowWidth)+60;
  ellipse(windowWidth/2,windowHeight/2,volume*2,volume*2); //object drawn on screen
   
}

function mousePressed(){ //triggers on mousepress
  
  if (song.isPlaying()){ //checks if the song is playing
    fill(0,255,0);
    song.stop(); //if it is, then stop the song
    song.noLoop();
    
  }
  else{
    fill(0,255,255); //changes fill
    song.play(); //if it isn't, play the song
    song.loop();
  }
  
}
