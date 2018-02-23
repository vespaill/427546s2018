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
    setInterval(handleLines, 1000/framesPerSecond);

}

