// github.com/jbrdge

var listed = [];
var t=0;
function setup() {
  frameRate(5);
  createCanvas(360, 360);
  colorMode(HSB,360,100,100);
  stroke(182,60,70);
  strokeWeight(1);
  for(var i=0; i<30;i++){
    listed.push(3*noise(i/30)*cos(t)+cos(t*2)-2);
    fill(150+40*cos(i/20),80,90);
    rect(10*i,0,10,listed[i]*50);
    if(i<29){
      strokeWeight(2);
      stroke(282,60,70);
      line(10*i+5,50*listed[i],10*i+15,50*listed[i+1]);
      }
  }
}

function draw() {
  translate(0,200);
  background(220);
  stroke(182,60,70);
  listed.shift();
  listed.push(3*noise(1+t)*cos(t)+cos(t*2)-2);
    for(var i=0; i<30;i++){
    fill(150+40*cos(t+i/20),80,90);
    strokeWeight(1);
    rect(10*i,66,10,listed[i]*50);
      if(i<29){
      stroke(282,60,70);
        strokeWeight(2);
     line(10*i+5,50*listed[i]+66,10*i+15,50*listed[i+1]+66);
      }
  }            
  t+=0.1;
}