/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

Main.js:
*******************************************************************************/

var pointArray = [];
var lineArray = [];
var timeout;
var mouseStopTmpLine;
var firstPointPlotted = false;

window.onload = function() {

    initializeCanvas();

    var framesPerSecond = 60;
    setInterval(updateCanvas, 1000/framesPerSecond);


}

function updateCanvas() {

    clearCanvas();
    drawPoints();
    drawLines();

    canvas.addEventListener('mousemove', handleMouseMove);

    canvas.addEventListener('mousedown', pushCursorPoint);
    storeLines();

}

function pushCursorPoint(evt) {

    var newPnt = getMousePoint(evt);
    pointArray.push(newPnt);

}

function handleMouseMove(evt) {

    restartTimer(evt);
    drawLineToCursorPoint(evt);

}

function restartTimer (evt) {

    clearTimeout(timeout);
    timeout = setTimeout(handleMouseStop(evt), 1);

}

function handleMouseStop(evt){

    if (firstPointPlotted) {
        var startPoint = pointArray[pointArray.length-1];
        var endPoint = getMousePoint(evt);
        mouseStopTmpLine = new LineSegment(startPoint, endPoint);
    }

}

function drawLineToCursorPoint(evt) {

    if (pointArray.length < 1) return;
    firstPointPlotted = true;
    var startPoint = pointArray[pointArray.length-1];
    var endPoint = getMousePoint(evt);
    var tmpLine = new LineSegment(startPoint, endPoint);
    tmpLine.draw('white');

}



function storeLines() {

    var l = pointArray.length;

    if (l > 1) {
        var newLS = new LineSegment(pointArray[l-2], pointArray[l-1]);
        lineArray.push(newLS);
    }

}

function drawPoints() {

    for (var i = 0; i < pointArray.length; i++) {
        pointArray[i].draw('white');
    }

}

function drawLines() {

    for (var i = 0; i < lineArray.length; i++) {
        lineArray[i].draw('white');
    }

    if (mouseStopTmpLine != null) {
        mouseStopTmpLine.draw('white');
    }

}

function getMousePoint(evt) {

    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;

    return new Point(mouseX, mouseY);

}
