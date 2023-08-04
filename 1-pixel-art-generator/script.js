/* THE PURPOSE OF THIS PROJECT IS TO GAIN UNDERSTANDING ABOUT THE BASIC CONCEPTS OF JAVASCRIPT.
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


/* VARIABLES DEVICETYPE, DRAW, AND ERASE ARE DECLARED TO DETERMINE A CERTAIN CONDITION TO THE TOUCH DEVICE.
DEVICETYPE IS SET TO AN EMPTY STRING TO GET THE VALUE IF THE DEVICE IS TOUCH OR MOUSE.
DRAW AND ERASE ARE INITIALLY SET TO FALSE */

let deviceType = "";

let draw = false;
let erase = false;
let gridWidth = 1;


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


/* ARROW FUNCTION IS ITERATED TO MAKE CONDITIONS.
IT'LL CREATE "TOUCHEVENT" WHEN THE DEVICE TYPE IDENTIFIED AS "TOUCH", AND IT'LL RETURN TRUE. 
OTHERWISE, IT'LL RETURN FALSE WHEN THE DEVICE TYPE IDENTIFIED AS "MOUSE" */

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


/* THIS CONDITION CREATES INTERACTION WITHIN THE GRID CELL CANVAS.

THERE ARE 3 EVENT LISTENERS CONSISTING OF THESE INTERACTIONS: 
DRAW, ERASE AND MOVE

1. THE INTERACTION STARTS TO DRAW WITHIN THE CELLS WHEN IT'S SET TO TRUE.
IF THE ERASE HAPPEN TO BE TRUE AS WELL, THE BACKGROUND WILL BE SET TO TRANSPARENT ERASE THE DRAWING.
2. WHEN THE USER MOVES THE MOUSE, THE DRAWING INTERACTION CONTINUES.
3. WHEN THE USER RELEASES THE MOUSE/ TOUCH, IT INDICATES THAT THE DRAWING INTERACTION STOPS */

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


/* THE CONTAINER IS A DIV ELEMENT THAT CONTAINS THE GRID.
THE LOOP CREATES GRID ROWS AND COLUMNS OF PIXELS BASED ON ITS VALUE.
IT'LL ACT AS A DRAWING CANVAS */

const updateGrid = () => {
    container.innerHTML = "";

    let count = 0;
    for (let i = 0; i < heightRange.value; i++) {
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow");

        for (let j = 0; j < gridWidth; j++) {
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);
            div.appendChild(col);
        }

        container.appendChild(div);
    }

    setupDrawingInteractions();
};


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


// THE GRID PIXELS WILL BE EXECUTED WHEN THE SUBMIT BUTTON IS CLICKED

submitGridButton.addEventListener("click", () => {
    updateGrid();
});


/* THIS FUNCTION WANTS TO DETERMINE IF:

1. THE DRAW IS TRUE AND NOT ERASE
2. THE DRAW AND ERASE ARE BOTH TRUE

THE FIRST CONDITION SETS THE COLOR OF THE PIXELS BASED ON THE COLOR INPUT THAT WAS CHOSEN BY THE USER.
THE SECOND CONDITION SETS THE BACKGROUND OF PIXELS TO TRANSPARENT TO ERASE THE DRAWING */

function checker(elementId) {
    let element = document.getElementById(elementId);
    
    if (draw && !erase) {
        element.style.backgroundColor = colorInput.value;
    } else if (draw && erase) {
        element.style.backgroundColor = "transparent";
    }
}


/* THIS EVENT LISTENER'S PURPOSE IS TO CLEAR ALL INTERACTIONS MADE TO THE GRID.
THE GRID LAYOUT WILL RESET TO A BLANK CANVAS */

clearGridButton.addEventListener("click", () => {
    const gridColumns = document.querySelectorAll(".gridCol");
    gridColumns.forEach((element) => {
        element.style.backgroundColor = "transparent";
    });
});


/* AFTER CLICKING THE ERASE BUTTON,
IT'LL LISTEN TO THE EVENT OF CLEARING THE PARTS OF THE PIXELS WHERE THE USER POINTS OR DRAGS THE MOUSE TO */

eraseButton.addEventListener("click", () => {
    erase = true;
});


/* AFTER CLICKING THE PAINT BUTTON,
THE EVENT WILL CHANGE FROM ERASING TO PAINT MODE */

paintButton.addEventListener("click", () => {
    erase = false;
});


widthRange.addEventListener("input", () => {
    gridWidth = widthRange.value;
    widthValue.innerHTML = gridWidth < 10 ? `0${gridWidth}`
    : gridWidth;
});


heightRange.addEventListener("input", () => {
    heightValue.innerHTML = heightRange.value < 10 ? `0${heightRange.value}`
    : heightRange.value;
});


window.onload = () => {
    heightRange.value = 1;
    widthRange.value = 1;
    gridWidth = 1;
    heightValue.innerHTML = "00";
    widthValue.innerHTML = "00";
    isTouchDevice();
};