/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

HandleLines.js:
*******************************************************************************/

var pointArray = [];
var lineArray = [];
var tmpRec;
var tmpLine;

var timeout;
var firstPointPlotted = false;

function handleLines() {

    clearCanvas();
    drawPoints();
    drawLines();
    canvas.addEventListener('mousemove', handleMouseMoveForLines);
    canvas.addEventListener('mousedown', handleMouseDownForLines);

}

function drawPoints() {

    for (var i = 0; i < pointArray.length; i++) {
        pointArray[i].draw('white');
    }

}

function drawLines() {

    for (var i = 0; i < lineArray.length; i++) {
        lineArray[i].draw('white',true,true,true);
    }

    if (tmpLine != undefined) tmpLine.draw('white',true,true,true);

    if (tmpRec != undefined) {
        tmpRec.draw('blue', true);
    }


}

function handleMouseMoveForLines(evt) {

    restartTimer(evt);
    drawLineToCursor(evt);

}

function handleMouseDownForLines(evt) {

    var newPnt = getMousePoint(evt);
    pointArray.push(newPnt);
    storeLines();

}

function restartTimer(evt) {

    clearTimeout(timeout);
    timeout = setTimeout(handleMouseStopForLines(evt), 1);

}

function drawLineToCursor(evt) {

    if (pointArray.length < 1) return;
    firstPointPlotted = true;
    var p1 = pointArray[pointArray.length-1];
    var p2 = getMousePoint(evt);
    tmpLine = new LineSegment(p1, p2);
    tmpLine.draw('white',false,false,true);

}

function handleMouseStopForLines(evt){

    if (firstPointPlotted) {
        var p1 = pointArray[pointArray.length-1];
        var p2 = getMousePoint(evt);
        var p3 = new Point(p1.x, p2.y);
        var p4 = new Point(p2.x, p1.y);

        tmpRec = new Rectangle(p1, p3, p2, p4);

    }

}

function storeLines() {

    if (tmpLine != undefined)
        lineArray.push(tmpLine);

}
