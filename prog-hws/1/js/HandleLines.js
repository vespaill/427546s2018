/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

HandleLines.js:
*******************************************************************************/

var pointArray = [];
var lineArray = [];
var tmpLine;

function handleLines() {

    clearCanvas();
    drawPoints();
    drawLines();
    canvas.addEventListener('mousemove', drawTmpLineToCursor);
    canvas.addEventListener('mousedown', handleMouseDownForLines);

}

function drawPoints() {

    for (var i = 0; i < pointArray.length; i++) {
        pointArray[i].draw('white', 5);
    }

}

function drawLines() {

    for (var i = 0; i < lineArray.length; i++) {
        lineArray[i].draw('white');
    }

    if (tmpLine != undefined) tmpLine.draw('white');

}

function handleMouseDownForLines(evt) {

    var newPnt = getMousePoint(evt);
    pointArray.push(newPnt);
    storeTmpLine();

}

function drawTmpLineToCursor(evt) {

    if (pointArray.length < 1) return;

    var p1 = pointArray[pointArray.length-1];
    var p2 = getMousePoint(evt);

    tmpLine = new LineSegment(p1, p2);
    tmpLine.draw('white');

    new Rectangle(p1, p2).draw('blue');

}

function storeTmpLine() {

    if (tmpLine != undefined)
        lineArray.push(tmpLine);

}
