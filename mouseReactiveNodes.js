// github.com/jbrdge

let nodes = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100, 100);

  for (let i = 0; i < 12; i++) {
    nodes[i] = new Node(random(50, width - 50), random(50, height - 50), 100 * (i % 4) + 50, 100 * (i % 3) + 100, random());
  }
}

function draw() {

  background(100);
  line(0, mouseY, 640, mouseY);

  for (let i = 0; i < nodes.length; i++) {
    for (let j = 0; j < i; j++) {
      stroke(212 - mouseX / 4, 68, 52, 20);
      strokeWeight(4);
      line(nodes[i].getPosition().x, nodes[i].getPosition().y, nodes[j].getPosition().x, nodes[j].getPosition().y);
      stroke(212 - mouseX / 4, 68, 52 + mouseX / 40, 50);
      strokeWeight(2);
      line(nodes[i].getPosition().x, nodes[i].getPosition().y, nodes[j].getPosition().x, nodes[j].getPosition().y);
      stroke(100);
      strokeWeight(1);
      line(nodes[i].getPosition().x, nodes[i].getPosition().y, nodes[j].getPosition().x, nodes[j].getPosition().y);
    }
  }
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].run(nodes);
  }
}

class Node {
  constructor(x, y, kx, ky, r) {
    this.position = createVector(x, y);
    this.randomposition = createVector(x, y);
    this.gridposition = createVector(kx, ky);
    this.rand = r;
  }

  run(nodes) {
    this.update();
    this.render();
  }

  update(t) {
    if (mouseY < 400 && mouseY > 0 && mouseX < 400 && mouseX > 0) {
      this.position.y = (mouseY / 1200) * (this.gridposition.y - this.randomposition.y) + this.gridposition.y;
      this.position.x = (mouseX / 1200) * (this.gridposition.x - this.randomposition.x) + this.gridposition.x;
    }
  }

  render() {
    var c = min(mouseX, 400);
    fill(212 - c / 4, 68, 52);
    stroke(200);
    ellipse(this.position.x, this.position.y, 16, 16);

  }

  getPosition() {
    return (this.position);
  }

  getRand() {
    return (rand);
  }
}