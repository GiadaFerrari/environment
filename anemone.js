class Anemone {
    constructor() {
        this.locBottom = createVector(width - 40, height - 80);
        this.locTop = createVector(this.locBottom.x, this.locBottom.y - 80);
        this.vel = createVector(0.5, 0);
        this.acc = createVector(0, 0);

        this.maxSpeed = 1;
        this.maxMag = 5;

    }


    update() {

        this.locTop.add(this.vel);

    }

    render(setLocX, moveLocX) {

        this.locBottom.x = this.locBottom.x + setLocX


        stroke(255, 180, 8)
        strokeWeight(8);
        line(this.locBottom.x, this.locBottom.y, this.locTop.x + moveLocX, this.locTop.y)
    }








}
