//VARIABLE
//objects
let shrimp;
let clownFishes = [];

let barr = true;
let barracuda;


//images
let water, shrimpRender, shrimpRenderR, anemone, nemo, nemoL;

//number of creature
let nemoNumber = 5;
//forces
let current;
let survivalInstinct;
let xoff = 0.08;

function setup() {

    background("#a8feed");
    water = loadImage("assets/background.jpg")
    shrimpRender = loadImage("assets/shrimp.png");
    shrimpRenderR = loadImage("assets/shrimpR.png");
    nemo = loadImage("assets/nemo.png")
    nemoL = loadImage("assets/nemoL.png")
    anemone = loadImage("assets/anemone.png")

    createCanvas(window.innerWidth, window.innerHeight);

    //shrimp
    shrimp = new Shrimp();
    barracuda = new Barracuda();

    for (i = 0; i < nemoNumber; i++) {
        clownFishes[i] = new Nemo(random(width - 500, width - 100), random(height - 500, height - 100), random(15, 30));

    }

}

function draw() {
    imageMode(CORNER)

    background("#a8feed")
    image(water, 0, 0, width, height)
    fill('#ffffff')
    //rect(width - 500, height - 500, 500, 500);
    image(anemone, width - 380, height - 230, 380, 400)

    xoff = xoff + 0.5

    //forces

    let cx = map(noise(random(1000), 0, 1, width - 400, width))
    let cy = map(noise(random(100), 0, 1, height - 400, height))

    current = createVector(cx, cy)


    //shrimp
    shrimp.render();
    shrimp.update();

    //barracuda

    barracuda.render();
    barracuda.update();
    barracuda.checkEdge();
    barracuda.applyForce(current);
    for (i = 0; i < clownFishes.length; i++) {
        barracuda.hunt(clownFishes[i].loc, i);
    }
    //

    //clownfishes


    for (i = 0; i < clownFishes.length; i++) {


        // current = createVector(cx, 0);

        survivalInstinct = createVector(2, 1.5)

        clownFishes[i].update();

        if (barracuda.loc.x < width / 2 + 100 || barracuda.loc.x > width + 50) {
            if (clownFishes[i].hidden) {
                clownFishes[i].vel.set(random(-1, 1), random(-1, 1));

                clownFishes[i].hidden = false;
            }

            clownFishes[i].checkEdges(width - 30, width - 400, height - 50, height - 400);
            clownFishes[i].applyForce(current);
        } else {
            clownFishes[i].applyForce(survivalInstinct);
            clownFishes[i].checkEdges(width, width - 400, height, height - 400);

        }

        clownFishes[i].render();



    }
    imageMode(CORNER)

    image(anemone, width - 250, height - 330, 350, 420)

}
