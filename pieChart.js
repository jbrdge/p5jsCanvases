// github.com/jbrdge

var end1;
var end2;
var end3;
var end4;
var time;
function setup() {
  time=0;
  createCanvas(360, 360);
  end1 = PI/4;
  end2 = 5*PI/8;
  end3 = 11*PI/8;
  end4 = 15*PI/8
}

function draw() {
  strokeWeight(4);
  background(255);
  stroke(255);
  fill(255);
  ellipse(width/2,height/2,290,290);
  fill(234,248,191);
  var d4 = PI*noise(sin(time*1.63))/2;
  var d1 = PI*noise(sin(time))/2;
  arc(width/2, height/2, 280, 280, end4+d4+time, end1+d1+time, PIE);
  fill(300,100,100);
  var d2 = PI*noise(cos(time))/2;
  arc(width/2, height/2, 280, 280, end1+d1+time, end2+d2+time, PIE);
  fill(100,200,250);
  var d3 = PI*noise(cos(time+100))/2;
  arc(width/2, height/2, 280, 280, end2+d2+time, end3+d3+time, PIE);
  fill(194,71,133);
  arc(width/2, height/2, 280, 280, end3+d3+time, end4+d4+time, PIE);
  time+=0.002*PI;
  fill(90,201,165);
  arc(width/2,height/2,135,135,PI/2+time, -PI/2+time, PIE);
  fill(35,57,91);
  arc(width/2,height/2,135,135,-PI/2+time, -3*PI/2+time, PIE);
}