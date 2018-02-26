/*******************************************************************************
Copyright 2018 Victor Espaillat

Dr. Haim Levkowitz
COMP 4270
02.21.2018

Main.js:
*******************************************************************************/

window.onload = function() {

    initializeCanvas();

    var framesPerSecond = 60;
    var shape = prompt('Please enter shape to test:\n( l ) - Line\n( r ) - Rectangle\n( c ) - Circle');

    if (shape == 'l' ) {

        setInterval(handleLines, 1000/framesPerSecond);

    } else if (shape == 'r') {

        setInterval(handleRectangles, 1000/framesPerSecond);

    } else if (shape == 'c') {

        setInterval(handleCircles, 1000/framesPerSecond);

    } else {

        location.reload();

    }

}
