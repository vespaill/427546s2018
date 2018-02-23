/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

Rectangle.js:
*******************************************************************************/

class Rectangle {

    constructor(p1, p2, p3, p4) {

        this.pointArray = [];
        this.pointArray.push(p1);
        this.pointArray.push(p2);
        this.pointArray.push(p3);
        this.pointArray.push(p4);
        this.numPoints = this.pointArray.length;

    }

    draw(color, drawStrPnt=false, drawEndPnt=false, drawMidpoint=false) {

        for (var i = 0; i < this.numPoints; i++) {

            new LineSegment(this.pointArray[i],
                            this.pointArray[(i+1) % this.numPoints]).draw(color, drawStrPnt, drawEndPnt, drawMidpoint);

        }

    }

}
