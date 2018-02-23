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

    draw(color, size = pixelWidth) {

        canvasContext.fillStyle = color;
        canvasContext.fillRect(this.x-(size/2), this.y-(size/2), size, size);

    }

}

function getMousePoint(evt) {

    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;

    return new Point(mouseX, mouseY);

}
