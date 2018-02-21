/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

Point.js:
*******************************************************************************/

const pixelWidth = 1
const midPointSize = 10

class Point {

    constructor(x, y, color) {

        this.x = Math.trunc(x);
        this.y = Math.trunc(y);

    }

    store(color, status) {

        if (status == overwrite) {
            canvasArray[this.x][this.y] = new Pixel(color, permanent);
        } else if (canvasArray[this.x][this.y].status != permanent) {
            canvasArray[this.x][this.y] = new Pixel(color, status);
        }

    }

}
