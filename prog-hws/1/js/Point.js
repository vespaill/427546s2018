/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

Point.js:
*******************************************************************************/

const pixelWidth = 1

class Point {

    constructor(x, y, color) {

        this.x = x;
        this.y = y;

    }

    store(color) {
        canvasArray[Math.trunc(this.x)][Math.trunc(this.y)] = color;
    }

}
