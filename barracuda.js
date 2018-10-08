class Barracuda {

    constructor() {
        //add inverting direction?
        this.loc = createVector(-100, height / 3);
        this.vel = createVector(0, 0);
        this.acc = createVector(random(10), 0);
        this.mass = random(200, 230)
        this.maxSpeed = 1.5;
        this.huntRadar = createVector();
        this.killShot = createVector(120, 70)
        this.ate = 0;


    }

    update() {
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.vel.limit(this.maxSpeed);
        this.acc.mult(0);
    }

    render() {
        noStroke();
        fill(70);
        ellipseMode(CENTER)
        ellipse(this.loc.x, this.loc.y, this.mass, 50)
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f)
    }


    checkEdge() {
        if (this.loc.x > width + 300 || this.loc.x < -300) {
            this.vel.mult(-1)
        }
    }


    hunt(nemoLoc, index) {
        this.huntRadar = p5.Vector.sub(nemoLoc, this.loc)
        //  console.log(this.huntRadar)
        if (this.huntRadar < this.killShot && this.loc.x < width - 250 && this.loc.x > 100 && this.ate < 1) {
            //only have kill one clownfish at a time?
            this.ate++;
            console.log("i ate nemo number" + index)

        }
    }

    /*  //add hunt?
      check x and y value of clownfishes[]. if barracuda.loc - clownfish[i].loc < 50
      barracuda.loc = clownfish[i].loc
      clownfish dies
      barracuda gets bigger
      */

}
