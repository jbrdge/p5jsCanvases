// github.com/jbrdge

//circuit board animation
var n;
var m;
var z;

function setup() {
  createCanvas(360, 360);
  n = new Circuit(-45, 0,250, 200, 300, 500);
  m = new Circuit(95, 0,180, 450, 505, 150);
  z = new Circuit(-155, 0,75, 150, 300, 250);
}

function draw() {
  background(0);
  strokeWeight(3);
  stroke(50,150,100,100);
  //line1
  line(0,100,200,100);
  line(200,100,200,150);
  line(200,150,width,150);
  //line2
  line(0,300,300,300);
  line(300,300,300,275);
  line(300,275,width,275);
  //line3
  line(0,350,300,350);
  line(300,350,325,375);
  line(325,375,width,375);
  //line4
  line(0,340,300,340);
  line(300,340,335,325);
  line(335,325,width,325);
  //line5
  line(0,250,200,250);
  line(200,250,300,233);
  line(300,233,width,233);
  //line6
  line(0,180,450,180);
  line(450,180,570,197);
  line(570,197,width,197);
  //line7
  line(0,75,150,75);
  line(150,75,300,102);
  line(300,102,width,102);
  
  line(0,50,width,50);
  line(0,225,width,225);
  line(0,315,width,315);
  n.show();
  m.show();
  z.show();
}

var Circuit = function(Theta, x0,y0, s1, s2, e){
  this.theta = Theta;
  this.angle = 0;
  this.switch1 = s1;
  this.switch2 = s2;
  this.beginx = x0;
  this.beginy = y0;
  this.end = e;
  this.x = []
  this.y = []
  for(var i=0;i<20;i++){
    this.x.push(this.beginx-80+i*4);
    this.y.push(this.beginy+sin(this.angle));
  }
}

Circuit.prototype.show = function(){
  for(var i=0;i<18;i++){
    
    strokeWeight(5);
    if(dist(this.x[i],this.y[i], this.x[i+1], this.y[i+1])<6){
      stroke(255, 50+i*7);
    	line(this.x[i],this.y[i], this.x[i+1], this.y[i+1]);
    }
  }
  this.update();
}

Circuit.prototype.update = function(){
  this.x.shift();
  this.y.shift();
  this.checkDirection();
  this.x.push(this.x[this.x.length-1]+5);
  this.y.push(this.y[this.y.length-1]+sin(this.angle));
  this.checkEdges();
}

Circuit.prototype.checkEdges = function(){
  if(this.x[19]>width+this.end){
    this.x[19]=0;
    this.y[19]= this.beginy;
  }
  if(this.x[19]<0){
    this.x[19]=width;
  }
  if(this.y[19]>height){
    this.y[19]=0;
  }
  if(this.y[19]<0){
    this.y[19]=height;
  }
}

Circuit.prototype.checkDirection = function(){
  if(this.x[18]>this.switch1){
    this.angle=this.theta;
  }
  if(this.x[18] > this.switch2){
  	this.angle = 0;
  }
}
