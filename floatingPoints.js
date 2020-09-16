// github.com/jbrdge

var time;
function setup() {
  createCanvas(360, 360);
  colorMode(HSB,360,100,100);
  time = 0;
}

function draw() {
  translate(width/2,height/2);
  background(0);
  noStroke();
  rotate(time*PI/8);
  for(var i=0; i< 150; i++){
    rotate(i*PI/2000);
    translate(0,0,10*cos(time+i*PI/10));
    fill(15+lerp(50,200,i/200), 80,80);
    ellipse(80*cos(time+i*PI/5)+80*cos(time+i*PI*20)*sin(2*time+i*PI*20),90*sin(time+i*PI/50)+150*sin(time+i*PI*20)*cos(2*time+i*PI*20), 14*noise(i+time), 14*noise(i+time)); 
  }
  time+=0.005;
}
