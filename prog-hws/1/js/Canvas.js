/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

Canvas.js:
*******************************************************************************/

var canvas;
var canvasWidth;
var canvasHeight;
var canvasContext;
var canvasData;

function initializeCanvas() {

    canvas        = document.getElementById("CanvasID");
    canvasWidth   = canvas.width;
    canvasHeight  = canvas.height;
    canvasContext = canvas.getContext('2d');
    canvasData    = canvasContext.getImageData(0, 0, canvasWidth, canvasHeight);

}

function clearCanvas() {

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvasWidth, canvasWidth);

}
