//VARIABLE
let shrimp;
//CLASSES
class Shrimp {
    constructor() {
        this.location = createVector(width / 2, height / 2);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.topSpeed = 4;
        this.dX = 40;
        this.dY = 20;


    }
    render() {

        noStroke();
        fill('#efa273');
        ellipse(this.location.x, this.location.y, this.dX, this.dY);

    }
    update() {
        let mouse = createVector(mouseX, mouseY);
        //store new coordinates in a new vector variable
        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(0.4);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);
        this.location.add(this.velocity);

        /*
                if (this.location.y + this.dY / 2 > height || this.location.y - this.dY / 2 < 0) {
                    this.acceleration.mult(-1);
                }
                if (this.location.x + this.dX / 2 > width || this.location.x - this.dX / 2 < 0) {}
        */

    }
}

//FUNCTIONS
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(173, 234, 229);
    shrimp = new Shrimp();

}

function draw() {
    background(173, 234, 229);
    shrimp.render();
    shrimp.update();

}
