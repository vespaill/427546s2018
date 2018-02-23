/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

Main.js:
*******************************************************************************/

var pointArray = [];
var lineArray = [];
var tmpLineArray = [];

var timeout;
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
    canvas.addEventListener('mousedown', handleMouseDown);
    storeLines();

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

    for (var i = 0; i < tmpLineArray.length; i++) {
        tmpLineArray[i].draw('blue');
    }

}

function handleMouseMove(evt) {

    restartTimer(evt);
    drawLineToCursorPoint(evt);

}

function handleMouseDown(evt) {
    var newPnt = getMousePoint(evt);
    pointArray.push(newPnt);
}

function restartTimer (evt) {

    clearTimeout(timeout);
    timeout = setTimeout(handleMouseStop(evt), 1);

}

function drawLineToCursorPoint(evt) {

    if (pointArray.length < 1) return;
    firstPointPlotted = true;
    var startPoint = pointArray[pointArray.length-1];
    var endPoint = getMousePoint(evt);
    var tmpLine = new LineSegment(startPoint, endPoint);
    tmpLine.draw('white');

}

function getMousePoint(evt) {

    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;

    return new Point(mouseX, mouseY);

}

function handleMouseStop(evt){

    if (firstPointPlotted) {
        tmpLineArray = [];

        var p1 = pointArray[pointArray.length-1];
        var p2 = getMousePoint(evt);
        var p3 = new Point(p1.x, p2.y);
        var p4 = new Point(p2.x, p1.y);

        var ls1 = new LineSegment(p1, p2);
        var ls2 = new LineSegment(p2, p3);
        var ls3 = new LineSegment(p3, p1);
        var ls4 = new LineSegment(p1, p4);
        var ls5 = new LineSegment(p4, p2);

        tmpLineArray.push(ls1);
        tmpLineArray.push(ls2);
        tmpLineArray.push(ls3);
        tmpLineArray.push(ls4);
        tmpLineArray.push(ls5);

    }

}

function storeLines() {

    var l = pointArray.length;

    if (l > 1) {
        var newLS = new LineSegment(pointArray[l-2], pointArray[l-1]);
        lineArray.push(newLS);
    }

}
