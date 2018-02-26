/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

HandleCircles.js:
*******************************************************************************/

var circleArray = [];
var tmpCircle;

function handleCircles() {

    clearCanvas();
    drawPoints();
    drawCircles();
    canvas.addEventListener('mousemove', drawTmpCircleToCursor);
    canvas.addEventListener('mousedown', handleMouseDownForCircles);

}

function drawCircles() {

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].draw('white');
    }

    if (tmpCircle != undefined) tmpCircle.draw('white');

}

function handleMouseDownForCircles(evt) {

    var newPnt = getMousePoint(evt);
    pointArray.push(newPnt);
    storetmpCircle();

}

function drawTmpCircleToCursor(evt) {

    if (pointArray.length < 1) return;

    var p1 = pointArray[pointArray.length-1];
    var p2 = getMousePoint(evt);
    var ls1 = new LineSegment(p1, p2);

    tmpCircle = new Circle(p1, ls1.getLength());
    tmpCircle.draw('white');

}

function storetmpCircle() {

    if (tmpCircle != undefined)
        circleArray.push(tmpCircle);

}
