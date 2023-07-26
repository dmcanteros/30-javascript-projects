/* THE PURPOSE OF THIS PROJECT IS TO GAIN AN IN-DEPTH UNDERSTANDING ABOUT THE BASIC CONCEPTS OF JAVASCRIPT
THEREFORE, I AM GOING TO EXPLAIN THE LOGIC FLOW FOR FUTURE REFERENCE REVIEW */


// DECLARING VARIABLES WITH CLASSNAME AND ID

let container = document.querySelectorAll(".container");
let widthRange = document.getElementById("width-range"); //
let heightRange = document.getElementById("height-range");
let submitGridButton = document.getElementById("#submit-grid");
let clearGridButton = document.getElementById("#clear-grid");
let colorInput = document.getElementById("#color-input");
let eraseButton = document.getElementById("#erase-btn");
let paintButton = document.getElementById("#paint-btn");
let widthValue = document.getElementById("#width-value");
let heightValue = document.getElementById("#height-value");


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

ARROW FUNCTION IS ASSIGNED TO MAKE CONDITIONS.
IT'LL CREATE AN ELEMENT "TOUCHEVENT" WHEN THE DEVICE TYPE IDENTIFIES AS "TOUCH", AND RETURNS TRUE. 
OTHERWISE, IT'LL RETURN TO FALSE WHEN THE DEVICE IDENTIFIES AS "MOUSE". */

let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () => {
    try {
        document.createElement("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice();


// EVENT LISTENER AND FOR LOOPS

submitGridButton.addEventListener("click", () => {
    container.innerHTML = "";
    let count = 0;
    for (let i = 0; i < heightRange.value; i++) {
        count += 2;
        let div = document.createEvent("div");
        div.classList.add("gridRow");

        for (let j = 0; j < widthRange.value; j++) {
            count += 2;
            let col = document.createEvent("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);
            col.addEventListener(events[deviceType].down, () => {
                draw = true;
                if (erase) {
                    col.style.backgroundColor = "transparent";
                } else {
                    col.style.backgroundColor = colorInput.value;
                }
            });

            col.addEventListener(events[deviceType].move, (e) => {
                let elementId = document.elementFromPoint (
                    !isTouchDevice() ? e.clientX : e.touches[0].
                    clientX,
                    !isTouchDevice() ? e.clientY : e.touches[0].
                    clientY,
                ), id;
                checker(elementId);
            });

            col.addEventListener(events[deviceType].up, () => {
                draw = false;
            });

            div.appendChild(col);

        }

        container.appendChild(div);

    }
});


// IF ELSE STATEMENTS

function checker(elementId) {
    let gridColumns = document.querySelectorAll(".gridCol");
    gridColumns.forEach((element) => {
        if (elementId == element.id) {
            if (draw && !erase) {
                element.style.backgroundColor = colorInput.value;
            } else if (draw && erase) {
                element.style.backgroundColor = "transparent";
            }
        }
    });
}


//

clearGridButton.addEventListener("click", () => {
    container.innerHTML = "";
});


//

eraseButton.addEventListener("click", () => {
    erase = true;
});


//

paintButton.addEventListener("click", () => {
    erase = false;
});