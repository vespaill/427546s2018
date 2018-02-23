/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

Rectangle.js:
*******************************************************************************/

class Rectangle {

    constructor(llp, urp) {

        this.llp = llp; // lower left point
        this.urp = urp; // upper right point
        this.ulp = new Point(llp.x, urp.y);
        this.lrp = new Point(urp.x, llp.y);

    }

    draw(color, drawMidpoints=false) {

        new LineSegment(this.llp, this.ulp).draw(color, drawMidpoints);
        new LineSegment(this.ulp, this.urp).draw(color, drawMidpoints);
        new LineSegment(this.urp, this.lrp).draw(color, drawMidpoints);
        new LineSegment(this.lrp, this.llp).draw(color, drawMidpoints);

    }

}
