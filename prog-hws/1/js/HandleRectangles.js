/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

HandleRectangles.js:
*******************************************************************************/

var rectangleArray = [];
var tmpRectangle;

function handleRectangles() {

    clearCanvas();
    drawRectangles();
    canvas.addEventListener('mousemove', handleMouseMove2);
    canvas.addEventListener('mousedown', handleMouseDown2);

}

function drawRectangles() {

    for (var i = 0; i < rectangleArray.length; i++) {
        rectangleArray[i].draw('white');
    }

    if (tmpRectangle != undefined)
        tmpRectangle.draw('white');

}

function handleMouseMove2(evt) {

    restartTimer2(evt);
    drawRectangleToCursorPoint(evt);

}

function handleMouseDown2(evt) {

    var newPnt = getMousePoint(evt);
    pointArray.push(newPnt);
    storeLines();

}

function restartTimer2(evt) {

    clearTimeout(timeout);
    timeout = setTimeout(handleMouseStop2(evt), 1);

}

function drawRectangleToCursorPoint(evt) {

    if (pointArray.length < 1) return;
    firstPointPlotted = true;

    var startPoint = pointArray[pointArray.length-1];
    var endPoint = getMousePoint(evt);

    var p1 = pointArray[pointArray.length-1];
    var p2 = getMousePoint(evt);
    var p3 = new Point(p1.x, p2.y);
    var p4 = new Point(p2.x, p1.y);

    var tmpLine = new LineSegment(startPoint, endPoint);
    tmpLine.draw('white');

}

function handleMouseStop2(evt){

    if (firstPointPlotted) {
        tmpRectangle = undefined;

        var p1 = pointArray[pointArray.length-1];
        var p2 = getMousePoint(evt);
        var p3 = new Point(p1.x, p2.y);
        var p4 = new Point(p2.x, p1.y);

        tmpRectangle = new Rectangle(p1, p3, p2, p4);
    }

}

function storeRectangles() {

    if (tmpRectangle != null) {
        rectangleArray.push(tmpRectangle);
    }

}
