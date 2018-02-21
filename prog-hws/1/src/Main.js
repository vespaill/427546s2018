var canvas          = document.getElementById("CanvasID");
var canvasWidth     = canvas.width;
var canvasHeight    = canvas.height;
var canvasContext   = canvas.getContext('2d');
var canvasData      = canvasContext.getImageData(0, 0, canvasWidth, canvasHeight);

var pixelWidth = 1

function getMousePoint(evt) {

    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;

    var mousePoint = new point(mouseX, mouseY, 'white');

    return mousePoint;

}

/* STRUCT */
function point(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

window.onload = function() {

    var mousePoint;

    canvas.addEventListener('mousemove',
    function(evt) {


        clearCanvas('black');
        mousePoint = getMousePoint(evt);
        var p1 = new point(0, 0, 'white');
        var p2 = new point(mousePoint.x, mousePoint.y, mousePoint.color);
        drawLine(p1, p2, 'white');

    });

}

function clearCanvas(color) {

    canvasContext.fillStyle = color;
    canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);

}

function drawLine(p1, p2, color) {

    drawPoint(p1.x, p1.y, p1.color);

    var xDis = Math.abs(p1.x - p2.x);
    var m = getSlope(p1, p2);
    var b = getB(p1, m);
    var y = 0;

    for (x = p1.x; x < xDis; x++ ) {
        y = m*x + b;
        drawPoint(x, y, color);
    }

}

function drawPoint(x, y, color) {

    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, pixelWidth, pixelWidth);

}

// y = mx + b
// m = y2 - y1 / x2 - x1
function getSlope(p1, p2) {

    return ((p2.y - p1.y) / (p2.x - p1.x));

}

function getB(p1, m) {

    return (p1.y - (m * p1.x));

}
