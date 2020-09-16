// github.com/jbrdge

let end1x = [];
let end1y = [];
let end2x = [];
let end2y = [];
let d1= [];
let d2 = [];
var time;

function setup() {
  time=0;
  createCanvas(360, 360);
  for(var i=0; i< 5; i++){
    end1x.push(random(50,350));
    end1y.push(random(50,350));
    d1.push(dist(200,175,end1x[i],end1y[i]));
    end2x.push(random(300,550));
    end2y.push(random(50,350));
    d2.push(dist(400,225,end2x[i],end2y[i]));
  }
}

function draw() {
  randomSeed(1000);
  background(0);
  stroke(255);
  strokeWeight(2);
  for(var i=0; i< 5; i++){
    end1x[i] = 100+d1[i]*cos(time+i*PI/2.5)/2;
    end1y[i] = 125+d1[i]*sin(time+i*PI/2.5)/2;
    end2x[i] = 250+d2[i]*cos(time+i*PI/2.5)/2;
    end2y[i] = 225+d2[i]*sin(time+i*PI/2.5)/2;
    for(var n=0; n<5; n++){
      if(dist(end1x[i],end1y[i],end2x[n],end2y[n])<130){
        line(end1x[i],end1y[i],end2x[n],end2y[n]);
      }
    }
    line(100,125,end1x[i],end1y[i]);
    line(250,225,end2x[i],end2y[i]);
    fill(50);
    stroke(255);
    ellipse(end1x[i],end1y[i],15,15);
    ellipse(end2x[i],end2y[i],15,15);
    for(var j=0; j< 3; j++){
      noFill();
      stroke(255, 100*noise(10*j+time*2));
      ellipse(end1x[i],end1y[i],20+15*j,20+15*j);
      stroke(255, 100*noise(10*j+time*2+10));
    	ellipse(end2x[i],end2y[i],20+15*j,20+15*j);
    }
    stroke(255);
  }
  time+=0.01;
}