/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

LineSegment.js:
*******************************************************************************/

const UNDEFINED = -1;

class LineSegment {

    getDistance() {
        return (Math.sqrt(Math.pow(this.dx, 2) + Math.pow(this.dy, 2)));
    }

    getMidpoint() {
        return new Point((this.p1.x + this.p2.x)/2, (this.p1.y + this.p2.y)/2);
    }

    getSlope() {

        if (this.dx == 0) return UNDEFINED;
        return (this.dy / this.dx);

    }

    getYintercept() {
        return (this.p1.y - (this.slope * this.p1.x));
    }

    constructor(p1, p2) {

        this.p1 = p1;
        this.p2 = p2;
        this.dx = this.p2.x - this.p1.x;
        this.dy = this.p2.y - this.p1.y;
        this.slope = this.getSlope();
        this.yIntercept = this.getYintercept();
        this.distance = this.getDistance();
        this.midpoint = this.getMidpoint();

    }

    draw(color, drawMidpoint=false) {

        // calculate absolute value of dx and dy
        var absDx = Math.abs(this.dx);
        var absDy = Math.abs(this.dy);

        // calculate steps required for generating pixels
        var steps = (absDx > absDy) ? absDx : absDy;

        // calculate increment in x & y for each steps
        var xInc = this.dx / steps;
        var yInc = this.dy / steps;

        // put pixel for each step, starting from first point
        var x = this.p1.x;
        var y = this.p1.y;

        for (var i = 0; i <= steps; i++) {

            new Point(x, y).draw(color);    // draw pixel at (x,y)
            x += xInc;                      // increment in x at each step
            y += yInc;                      // increment in y at each step

        }

        if (drawMidpoint) this.midpoint.draw('red', 10);

    }

}
