/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

Point.js:
*******************************************************************************/

const pixelWidth = 1

class Point {

    constructor(x, y) {

        this.x = x;
        this.y = y;

    }

    print() {
        console.log('(', this.x, ',', this.y, ')');
    }

    draw(color) {

        canvasContext.fillStyle = color;
        canvasContext.fillRect(this.x, this.y, pixelWidth, pixelWidth);

    }

}
