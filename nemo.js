class Nemo {
    constructor(x, y, m) {
        this.loc = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(random(-1, 1), random());
        this.mass = floor(m);
        this.hidden = false;

        this.maxSpeed = 3;
        this.prevPos = this.loc.copy();
        this.rotation = 0;
        this.froze = false;

    }


    update() {
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.acc.mult(0);
        this.vel.limit(this.maxSpeed);
        this.rotation = this.vel.heading();


    };

    render() {
        push();
        imageMode(CENTER);

        if (this.prevPos.x < this.loc.x) {
            this.rotate();

            image(nemo, 0, 0, this.mass * 3, this.mass * 3)
        } else {
            this.rotate();

            image(nemoL, 0, 0, this.mass * 3, this.mass * 3)
        }
        pop();

    };

    rotate() {
        push()

        translate(this.loc.x, this.loc.y)
        rotate(this.rotation);


    }

    updatePrev() {
        this.prevPos.x = this.loc.x;
        this.prevPos.y = this.loc.y;


    }


    checkEdges(xMin, xMax, yMin, yMax) {

        if (this.loc.x > xMin) {
            this.loc.x = width - 100;
            this.vel.mult(-1);
            this.updatePrev();

        } else if (this.loc.x < xMax) {
            this.vel.mult(-1);
            this.loc.x = width - 390;
            this.updatePrev();

        }

        if (this.loc.y > yMin) {
            this.loc.y = height - 55;
            this.vel.mult(-1);
            this.updatePrev();


        } else if (this.loc.y < yMax) {
            this.vel.mult(-1);
            this.loc.y = height - 390;
            this.updatePrev();

        }
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        if (force == survivalInstinct && this.froze == false) {
            this.hidden = true;
            this.acc.add(f);
        } else if (force != survivalInstinct) {
            this.acc.add(f);

        }

    }


    freeze() {
        console.log("I froze at " + this.loc)
        this.froze = true;
        this.acc.set(0, 0);
        this.vel.set(0, 0);
    }



}
