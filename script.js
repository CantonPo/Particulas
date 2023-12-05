let x
let y
let velX
let velY

function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log(width, height)
    x = width/2
    y = height/2
    velX = -1
    velY = -1
  }
  
  function draw() {
    background(220);
    ellipse(x, y, 50)
    x += velX
    y += velY
    ellipse(0, 0, 50)
  }