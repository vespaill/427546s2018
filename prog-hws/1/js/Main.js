/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

Main.js:
*******************************************************************************/

var twoPointArray = [];
var counter = 0;

window.onload = function() {

    initializeCanvas();
    updateCanvas();

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseClick);

}

function handleMouseMove(evt) {

    if (counter == 1) {
        var mousePoint = getMousePoint(evt);
        var p1 = new Point(twoPointArray[0].x, twoPointArray[0].y);
        var p2 = new Point(mousePoint.x, mousePoint.y);
        var ls1 = new LineSegment(p1, p2);
        ls1.store(WHITE);
        updateCanvas();
        ls1.delete();
    }

}

function getMousePoint(evt) {

    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;

    return new Point(mouseX, mouseY);

}

function handleMouseClick(evt) {

    var mousePoint = getMousePoint(evt);

    twoPointArray[counter++] = mousePoint;

    if (counter == 2) {
        counter = 1;
        swap();
        var ls1 = new LineSegment(twoPointArray[0], twoPointArray[1] );
        ls1.store(PERMANENT);
    }

    updateCanvas();

}

function swap() {

    var temp = twoPointArray[0];
    twoPointArray[0] = twoPointArray[1];
    twoPointArray[1] = temp;

}