// github.com/jbrdge


var time = 0;
function setup() {
  createCanvas(360, 360);
  textSize(12);
  noiseSeed(1080);
}

function draw() {
  background(255);
  stroke(0);
  for(var i=0; i<10; i++){
    fill(150+100*noise(i/2),100+150*noise(i),100+200*noise(i*2));
    rect(i*25+60,3*height/4+30,20,-300*noise(i+time));
  }
  d =(mouseX+mouseY+20)/width;
  time+=0.002*d;
  time+=0.001;
  fill(0);
  noStroke();
  text('Time', width/2-20, 320);
  push();
	rotate(-PI/2);
  text('Resources',-250, 40);
  pop();
}