/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

LineSegment.js:
*******************************************************************************/

pointArray=[];

class LineSegment {

    getDistance() {

        return (Math.sqrt(Math.pow(this.dx, 2) + Math.pow(this.dy, 2)));

    }

    constructor(p1, p2) {

        this.p1 = p1;
        this.p2 = p2;

        this.dx = this.p2.x - this.p1.x;
        this.dy = this.p2.y - this.p1.y;
        this.distance = this.getDistance();

    }

    store(color) {

        var x = this.p1.x;
        var y = this.p1.y;
        var intervals = this.getDistance();
        var xInc = this.dx / intervals;
        var yInc = this.dy / intervals;

        for (var i = 0; i < intervals; i++) {
            var newPnt = new Point(x, y);
            pointArray.push(newPnt);
            newPnt.store(color);
            x += xInc;
            y += yInc;
        }

    }

    delete() {

        for (var i = 0; i < pointArray.length; i++) {
            pointArray[i].store(BLACK);
        }
        pointArray=[];

    }


}
