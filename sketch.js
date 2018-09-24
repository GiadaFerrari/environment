//VARIABLE
let shrimp;
let sand, shrimpRender, shrimpRenderR;

//flowfield var
let inc = 0.01
let scl = 10;
let cols, rows;
let zoff = 0;
let particles = [];
let flowField = [];
//CLASSES
class Shrimp {
    constructor() {
        this.location = createVector(width / 2, height / 2);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.topSpeed = 4;



    }

    //have shrimp follow the mouse
    update() {
        let mouse = createVector(mouseX, mouseY);
        //store new coordinates in a new vector variable
        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(0.4);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);
        this.location.add(this.velocity);

    }

    render() {
        let mouse = createVector(mouseX, mouseY);

        if (mouse.x < this.location.x) {
            console.log("true")
            image(shrimpRender, this.location.x, height - 80, 100, 60);

        } else {

            image(shrimpRenderR, this.location.x, height - 80, 100, 60);
        }
    }
}

//FUNCTIONS
function setup() {
    /*  cols = floor(width / scl);
      rows = floor(height / scl);
      for (i = 0; i < 500; i++) {
          particles[i] = new Particle();
      }

      flowField = new Array(cols * rows);*/

    background("#a8feed");
    sand = loadImage("assets/sand.png");
    shrimpRender = loadImage("assets/shrimp.png");
    shrimpRenderR = loadImage("assets/shrimpR.png");

    createCanvas(window.innerWidth, window.innerHeight);
    shrimp = new Shrimp();

}

function draw() {
    background("#a8feed")
    image(sand, 0, height - 70, width, 70)


    //static environment
    shrimp.render();
    shrimp.update();
    /*
        //water texure
        let yoff = 0;
        for (let i = 0; i < particles.length; i++) {

            particles[i].follow(flowField);
            particles[i].edges();

            if (i < particles.length / 2) {
                particles[i].render(255, 255, 255, 15);
                console.log("i m white")
            } else {
                particles[i].render(255, 255, 255, 15);
                console.log("i'm blue")
            }
            particles[i].update();
        }

        for (let y = 0; y < rows; y++) {
            let xoff = 0;
            for (let x = 0; x < cols; x++) {
                let index = x + y * cols;
                let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
                //change the fromAngle() parameter to change direction
                let v = p5.Vector.fromAngle(angle);
                v.setMag(4);
                flowField[index] = v;
                xoff += inc;

            }
            yoff += inc;
            zoff -= 0.0009;
        }*/


}
