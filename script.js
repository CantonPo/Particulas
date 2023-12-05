class Particula{
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.velX = random(-1, 1);
        this.velY = random(-1 ,1);
        this.radius = random(20);
    }
    
    show(){
        
        fill(178, 218, 250) 
        ellipse(this.x, this.y, this.radius)
    }
    update(){
        this.x += this.velX
        this.y += this.velY
    }
    isDead(){
        return (this.x > width || this.x < 0 ||this.y > height || this.y <0)
    }
}
let p = []

function setup() {
    createCanvas(windowWidth, windowHeight);
    for(let i=0; i <= 2; i++){
    p.push(new Particula())

    }
  }
  
  function draw() {
    background(220);
    for(let i=0; i < p.length; i++){
        p[i].update()
        p[i].show()
        if(p[i].isDead()){
            p.splice(i, 1)
            console.log("estoy cansado jefe")
        }
    
        }
    p.push(new Particula())
    console.log(p.length)
  }