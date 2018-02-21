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
const RED = 2;

var permanent = 1;
var overwrite = 2;

class Pixel {
    constructor(color, status) {
        this.color = color
        this.status = status;
    }
}

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
            canvasArray[i][j] = new Pixel(BLACK, !permanent);
        }
    }

}

function updateCanvas() {

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvasWidth, canvasWidth);

    for (var i = 0; i < canvasWidth; i++) {
        for (var j = 0; j < canvasHeight; j++) {
            if (canvasArray[i][j].color == RED) {
                pixMult = 5;
                canvasContext.fillStyle = 'RED';
                canvasContext.fillRect(i-midPointSize/2, j-midPointSize/2, midPointSize, midPointSize);
            } else if (canvasArray[i][j].color != BLACK) {
                canvasContext.fillStyle = 'WHITE';
                canvasContext.fillRect(i, j, pixelWidth, pixelWidth);
            }
        }
    }

}