//VARIABLE
//objects
let shrimp;
let jellyfishes = [];

//images
let sand, shrimpRender, shrimpRenderR, anemone, nemo;


//forces
let hide;

//flowfield var
/*
let inc = 0.01
let scl = 10;
let cols, rows;
let zoff = 0;
let particles = [];
let flowField = [];
*/

function setup() {
    /*  cols = floor(width / scl);
    rows = floor(height / scl);
    for (i = 0; i < 500; i++) {
        particles[i] = new Particle();
    }

    flowField = new Array(cols * rows);
*/
    background("#a8feed");
    sand = loadImage("assets/sand.png");
    shrimpRender = loadImage("assets/shrimp.png");
    shrimpRenderR = loadImage("assets/shrimpR.png");
    nemo = loadImage("assets/nemo.png")
    anemone = loadImage("assets/anemone.png")

    createCanvas(window.innerWidth, window.innerHeight);

    //shrimp
    shrimp = new Shrimp();
    for (i = 0; i < 5; i++) {
        jellyfishes[i] = new Nemo(random(width), random(height - 80), random(10, 30));

    }


}


function draw() {
    background("#a8feed")
    image(sand, 0, height - 70, width, 70);


    shrimp.render();
    shrimp.update();


    for (i = 0; i < jellyfishes.length; i++) {
        jellyfishes[i].update();
        jellyfishes[i].checkEdges();
        jellyfishes[i].render();



    }
    image(anemone, width - 300, height - 230, 350, 400)


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
        }

    */
}

function keyPressed() {

    hide = createVector(0.3, 2);
    for (i = 0; i < jellyfishes.length; i++) {
        jellyfishes[i].applyForce(hide);
    }


}
