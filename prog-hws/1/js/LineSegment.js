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

    draw(color) {

        // calculate dx & dy
        var abs_dx = Math.abs(this.dx);
        var abs_dy = Math.abs(this.dy);

        // calculate steps required for generating pixels
        var steps = abs_dx > abs_dy ? abs_dx : abs_dy;

        // calculate increment in x & y for each steps
        var Xinc = this.dx / steps;
        var Yinc = this.dy / steps;

        // Put pixel for each step
        var X = this.p1.x;
        var Y = this.p1.y;

        for (var i = 0; i <= steps; i++)
        {
            new Point(X, Y).draw(color);  // put pixel at (X,Y)
            X += Xinc;           // increment in x at each step
            Y += Yinc;           // increment in y at each step
        }

    }




}
