/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

Main.js:
*******************************************************************************/

var twoPointsArray = [];
var ptrArCounter = 0;

window.onload = function() {

    initializeCanvas();
    updateCanvas();

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseClick);

}

function handleMouseMove(evt) {

    if (ptrArCounter == 1) {
        var mousePoint = getMousePoint(evt);
        var p1 = new Point(twoPointsArray[0].x, twoPointsArray[0].y);
        var p2 = new Point(mousePoint.x, mousePoint.y);
        var ls1 = new LineSegment(p1, p2);
        ls1.store(WHITE);
        updateCanvas();
        ls1.delete();
        console.log('mouse move inside loop');
    }
    console.log('mouse move outside loop');

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

    twoPointsArray[ptrArCounter++] = mousePoint;

    if (ptrArCounter == 2) {
        ptrArCounter = 0;
        var ls1 = new LineSegment(twoPointsArray[0], twoPointsArray[1] );
        ls1.store(WHITE);
    }

    updateCanvas();
    console.log('mouse click');

}
