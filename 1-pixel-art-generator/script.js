/* THE PURPOSE OF THIS PROJECT IS TO GAIN AN IN-DEPTH UNDERSTANDING ABOUT THE BASIC CONCEPTS OF JAVASCRIPT
THEREFORE, I AM GOING TO EXPLAIN THE LOGIC FLOW FOR FUTURE REFERENCE REVIEW */


// DECLARING VARIABLES WITH CLASSNAME AND ID

const container = document.getElementById("container");
const widthRange = document.getElementById("width-range");
const heightRange = document.getElementById("height-range");
const submitGridButton = document.getElementById("submit-grid");
const clearGridButton = document.getElementById("clear-grid");
const colorInput = document.getElementById("color-input");
const eraseButton = document.getElementById("erase-btn");
const paintButton = document.getElementById("paint-btn");
const widthValue = document.getElementById("width-value");
const heightValue = document.getElementById("height-value");


/* THE OBJECT EVENTS HAS 2 SETS OF INNER OBJECTS DECLARED AS MOUSE AND TOUCH.
THE PROPERTIES AND VALUES REPRESENT THE EVENT INTERACTIONS */

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


/* VARIABLES DEVICETYPE, DRAW, AND ERASE ARE DECLARED TO DETERMINE A CERTAIN CONDITION
TO THE TOUCH DEVICE.

VARIABLES DRAW AND ERASE DETERMINE WHETHER THE USER IS DRAWING OR ERASING CELLS. 
THEIR BOOLEAN VALUES ARE INITIALLY SET TO FALSE.

ARROW FUNCTION IS ITERATED TO MAKE CONDITIONS.
IT'LL CREATE AN ELEMENT "TOUCHEVENT" WHEN THE DEVICE TYPE IDENTIFIED AS "TOUCH", AND RETURNS TRUE. 
OTHERWISE, IT'LL RETURN TO FALSE WHEN THE DEVICE IDENTIFIED AS "MOUSE". */

let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

const setupDrawingInteractions = () => {
    const gridColumns = document.querySelectorAll(".gridCol");

    gridColumns.forEach((col) => {
        col.addEventListener(events[deviceType].down, () => {
            draw = true;
            if (erase) {
                col.style.backgroundColor = "transparent";
            } else {
                col.style.backgroundColor = colorInput.value;
            }
        });
        
        col.addEventListener(events[deviceType].move, (e) => {
            if (draw) {
                let elementId = col.id;
                if (elementId) {
                    checker(elementId);
                }    
            }
            
        });

        col.addEventListener(events[deviceType].up, () => {
            draw = false;
        });
        
    });

};


// EVENT LISTENER AND FOR LOOPS

submitGridButton.addEventListener("click", () => {
    container.innerHTML = "";

    let count = 0;
    for (let i = 0; i < heightRange.value; i++) {
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow");

        for (let j = 0; j < widthRange.value; j++) {
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);
            div.appendChild(col);
        }

        container.appendChild(div);
    }

    widthRange.value = 1;
    setupDrawingInteractions();

});


// IF ELSE STATEMENTS

function checker(elementId) {
    let element = document.getElementById(elementId);
    
    if (draw && !erase) {
        element.style.backgroundColor = colorInput.value;
    } else if (draw && erase) {
        element.style.backgroundColor = "transparent";
    }
}


//

clearGridButton.addEventListener("click", () => {
    const gridColumns = document.querySelectorAll(".gridCol");
    gridColumns.forEach((element) => {
        element.style.backgroundColor = "transparent";
    });
});


//

eraseButton.addEventListener("click", () => {
    erase = true;
});


//

paintButton.addEventListener("click", () => {
    erase = false;
});


//

widthRange.addEventListener("input", () => {
    widthValue.innerHTML = widthRange.value < 10 ? `0${widthRange.value}`
    : widthRange.value;
});


//

heightRange.addEventListener("input", () => {
    heightValue.innerHTML = heightRange.value < 10 ? `0${heightRange.value}`
    : heightRange.value;
});


//

window.onload = () => {
    heightRange.value = 1;
    widthRange.value = 1;
    heightValue.innerHTML = "00";
    widthValue.innerHTML = "00";
    isTouchDevice();
};