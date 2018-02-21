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
var canvasArray;

const BLACK = 0;
const WHITE = 1;

function initializeCanvas() {

    canvas        = document.getElementById("CanvasID");
    canvasWidth   = canvas.width;
    canvasHeight  = canvas.height;
    canvasContext = canvas.getContext('2d');
    canvasData    = canvasContext.getImageData(0, 0, canvasWidth, canvasHeight);

    canvasArray   = new Array(canvasWidth);
    for (var i = 0; i < canvasWidth; i++) {
        canvasArray[i] = new Array(canvasHeight);
        for (var j = 0; j < canvasHeight; j++) {
            canvasArray[i][j] = BLACK;
        }
    }

}

function updateCanvas() {

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvasWidth, canvasWidth);

    canvasContext.fillStyle = 'white';
    for (var i = 0; i < canvasWidth; i++) {
        for (var j = 0; j < canvasHeight; j++) {
            if (canvasArray[i][j] == WHITE) {
                canvasContext.fillRect(i, j, 1, 1);
            }
        }
    }

}