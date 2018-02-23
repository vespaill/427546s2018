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

    getMidpoint() {
        return new Point((this.p1.x + this.p2.x)/2, (this.p1.y + this.p2.y)/2);
    }

    constructor(p1, p2) {

        this.p1 = p1;
        this.p2 = p2;

        this.dx = this.p2.x - this.p1.x;
        this.dy = this.p2.y - this.p1.y;

    }

    store(color, status) {

        var x = this.p1.x;
        var y = this.p1.y;
        var intervals = this.getDistance();
        var xInc = this.dx / intervals;
        var yInc = this.dy / intervals;
        var newPnt;

        for (var i = 0; i < intervals; i++) {
            newPnt = new Point(x, y);
            pointArray.push(newPnt);
            newPnt.store(color, status);
            x += xInc;
            y += yInc;
        }

        newPnt = this.getMidpoint();
        pointArray.push(newPnt);

        var midPntStatus = (status == permanent)? overwrite : status;
        newPnt.store(RED, midPntStatus);

    }

    delete() {

        for (var i = 0; i < pointArray.length; i++) {
            pointArray[i].store(BLACK, !permanent);
        }
        pointArray=[];

    }


}
