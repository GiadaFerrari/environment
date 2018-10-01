class Nemo {
    constructor(x, y, m) {
        this.loc = createVector(x, y);
        this.vel = createVector(random(), 0, 0 + random());
        this.acc = createVector(0, 0);
        this.mass = floor(m);

        this.maxSpeed = 2;

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
            this.loc.x = 0;

        } else if (this.loc.x < 0) {
            this.vel.x *= -1;
            this.loc.x = 0;


        }
        if (this.loc.y > height - 80) {
            this.loc.y = height - 80;
            this.vel.y *= -1;

        } else if (this.loc.y < 0) {
            this.vel.y *= -1;
            this.loc.y = 0;


        }
    }

    applyForce(force) {

        let f = p5.Vector.div(force, this.mass);
        console.log(f)
        this.acc.add(force);
    }



}
