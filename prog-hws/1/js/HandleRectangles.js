/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

HandleRectangles.js:
*******************************************************************************/

var pointArray = [];
var recArray = [];
var tmpRec;

function handleRectangles() {

    clearCanvas();
    drawPoints();
    drawRectangles();
    canvas.addEventListener('mousemove', drawTmpRecToCursor);
    canvas.addEventListener('mousedown', handleMouseDownForRecs);

}

function drawRectangles() {

    for (var i = 0; i < recArray.length; i++) {
        recArray[i].draw('white');
    }

    if (tmpRec != undefined) tmpRec.draw('white');

}

function handleMouseDownForRecs(evt) {

    var newPnt = getMousePoint(evt);
    pointArray.push(newPnt);
    storeTmpRec();

}

function drawTmpRecToCursor(evt) {

    if (pointArray.length < 1) return;

    var p1 = pointArray[pointArray.length-1];
    var p2 = getMousePoint(evt);

    tmpRec = new Rectangle(p1, p2);
    tmpRec.draw('white');

}

function storeTmpRec() {

    if (tmpRec != undefined)
        recArray.push(tmpRec);

}
