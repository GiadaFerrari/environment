class Nemo {
    constructor(x, y, m) {
        this.loc = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(-1, 0.5);
        this.mass = floor(m);

        this.maxSpeed = 3;

    }


    update() {
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.acc.mult(0);
        this.vel.limit(this.maxSpeed)

    };

    render() {
        //        noStroke();
        //        fill(225, 102, 2);
        //        ellipse(this.loc.x, this.loc.y, this.mass * 1.5, this.mass);
        //        strokeWeight(16)
        //        stroke(255)
        //        line(this.loc.x - this.mass * 1.5 / 2, this.loc.x + this.mass)

        image(nemo, this.loc.x, this.loc.y, this.mass * 3, this.mass * 3)


    };

    checkEdges() {

        if (this.loc.x > width) {
            //this.loc.x = width - 30;
            this.vel.mult(-1);

        } else if (this.loc.x < width - 500) {
            this.vel.x *= -1;            this.loc.x = width - 400;
        }

        if (this.loc.y > height - 10) {
            this.loc.y = height - 10;
            this.vel.mult(-1);

        } else if (this.loc.y < height - 500) {
            this.vel.mult(-1);
            this.loc.y = height - 300;
        }
    }

    applyForce(force) {

        let f = p5.Vector.div(force, this.mass);
        this.acc.add(force);
    }



}
