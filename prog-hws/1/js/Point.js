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

        this.x = Math.trunc(x);
        this.y = Math.trunc(y);

    }

    store(color) {

        if (canvasArray[this.x][this.y] != PERMANENT) {
            canvasArray[this.x][this.y] = color;
        }
    }

}
