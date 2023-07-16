/* THE PURPOSE OF THIS PROJECT IS TO GAIN AN IN-DEPTH UNDERSTANDING ABOUT THE BASIC CONCEPTS OF JAVASCRIPT
THEREFORE, I AM GOING TO EXPLAIN THE LOGIC FLOW FOR FUTURE REFERENCE */

// DECLARING VARIABLES WITH CLASSNAME AND ID
let container = document.querySelectorAll(".container");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let gridButton = document.getElementById("#submit-grid");
let clearGridButton = document.getElementById("#clear-grid");
let colorButton = document.getElementById("#color-input");
let eraseBtn = document.getElementById("#erase-btn");
let paintBtn = document.getElementById("#paint-btn");
let widthValue = document.getElementById("#width-value");
let heightValue = document.getElementById("#height-value");

/*
*/
let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};