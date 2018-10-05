//VARIABLE
//objects
let shrimp;
let clownFishes = [];

//images
let sand, shrimpRender, shrimpRenderR, anemone, nemo;


//forces
let current;
let anemoneG;
let xoff = 0.08;


function setup() {

    background("#a8feed");
    sand = loadImage("assets/sand.png");
    shrimpRender = loadImage("assets/shrimp.png");
    shrimpRenderR = loadImage("assets/shrimpR.png");
    nemo = loadImage("assets/nemo.png")
    anemone = loadImage("assets/anemone.png")

    createCanvas(window.innerWidth, window.innerHeight);

    //shrimp
    shrimp = new Shrimp();


    for (i = 0; i < 2; i++) {
        clownFishes[i] = new Nemo(random(width - 500, width), random(height - 500, height), random(10, 30));

    }

}

function draw() {

    background("#a8feed")
    image(sand, 0, height - 70, width, 70);
    fill('#ffffff')
    rect(width - 500, height - 500, 500, 500);
    xoff = xoff + 0.02


    shrimp.render();
    shrimp.update();
    image(anemone, width - 300, height - 230, 350, 400)


    //anemoneG = createVector(noise(xoff + 10), noise(xoff + 20))

    for (i = 0; i < clownFishes.length; i++) {

        let cx = noise(xoff + 20 * 300)
        let cy = noise(xoff + 10 * 400)
        current = createVector(noise(xoff + 10 * width), noise(xoff - 20 * height));

        clownFishes[i].update();
        clownFishes[i].checkEdges();
        clownFishes[i].render();
        //  clownFishes[i].applyForce(current);
        //   clownFishes[i].applyForce(anemoneG);


    }
    image(anemone, width - 200, height - 330, 350, 400)

}
