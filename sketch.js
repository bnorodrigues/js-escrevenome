function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    stroke("rgb(21,41,38)");
    fill("rgb(87,173,31)");
  if(mouseIsPressed){
      ellipse(mouseX, mouseY, 55, 55);
    }
  }
  
  