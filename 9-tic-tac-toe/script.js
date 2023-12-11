"use strict";


/* --------------------------------------------------------------------------------------------------------------------

TIC-TAC-TOE:

The Mechanics of the Strategy Game:

1. There are 9 cells in the 2D game board that will be filled-out by the players.
2. The players are the computer and the user (whom is you).
3. You will choose your own character, either "X" or "O".
4. "X" is always the first turn.
5. Players should take turns inside any of the empty cells to place their marks to get a continuous line of 3 cells.
6. The lines can be horizontal, vertical, or diagonal.
7. Whoever gets the straight line first, will be the WINNER!
8. Otherwise, it's a TIE.
9. The number of draws and winners of each players will be recorded automatically via score table tally below.

--------------------------------------------------------------------------------------------------------------------- */


// Global variables

const modal = document.querySelector(".modal-bg");
const startBtn = document.querySelector(".start-btn");


/* The modal will execute automatically after the page has finished loading
   It will ask which player to choose */

window.addEventListener("load", () => {
    setTimeout(function openModal(e) {
        document.querySelector(".modal-bg")
        .style.display = "block";
    },
        1000 // The modal will pop-up after 1s
    )
});


// The modal will close after clicking "Start" button

startBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


/*
    The 2D board will reset to empty cells (if there was a prior game occurred)

    Global Variables:

    gameOver - Initialized to falsy if the game is over.
    cells - Array of cells to represent 2D board with index collections to manipulate all sides.
    winPatterns - Array pattern of elements for win conditions.  
    
    Horizontal:
    [0][1][2]
    [3][4][5]
    [6][7][8]

    Vertical:
    [0][3][6]
    [1][4][7]
    [2][5][8]

    Diagonal:
    [0][4][8]
    [2][4][6]
*/

let gameOver = false;

const cells = new Array();
    cells[0] = 0;
    cells[1] = 1;
    cells[2] = 2;
    cells[3] = 3;
    cells[4] = 4;
    cells[5] = 5;
    cells[6] = 6;
    cells[7] = 7;
    cells[8] = 8;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


// "X" always play first

let currentPlayer = "X";


/* const boardDisplay = () => {
    console.log("  0 1 2");

    // Navigating the gameBoard array that acts as full 2D board
    for (let arr = 0; arr < gameBoard.length; arr++) {
        let row = `${arr} `;

        // Iterates the length of the sub-arrays that acts as the rows of the board
        for (let subArr = 0; subArr < gameBoard[arr].length; subArr++) {
            row += gameBoard[arr][subArr] + " ";
            console.log(" " + gameBoard[arr][subArr]);
        }
        console.log(row);
    }
}; */




const playerTurns = () => {

    const tableBody = document.querySelector(".t3-board"); // Assigning the .t3-board section in HTML file

    tableBody.innerHTML = ""; // Clear the previous game state (if any)


    for (let arr = 0; arr < gameBoard.length; arr++) { // Initializing the length of the rows
        const row = document.createElement("tr");

        for (let subArr = 0; subArr < gameBoard[arr].length; subArr++) { // Getting the length of the gameBoard[arr] for sub-arrays to initialize the cell values
            const cell = document.createElement("td");
            cell.classList.add("cell");

            cell.textContent = gameBoard[arr][subArr];

            cell.addEventListener("click", () => { // Click event listener when cells are being clicked during player's movement
                cellClick(arr, subArr); // Calls the function to iterate the event conditions <-- will be called on the next function
            });

            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
};


// Conditions how clicking the cells works as the player interacts

const cellClick = (row, col) => {

    if (gameBoard[row][col] === " ") { // Condition if the cell is empty
        gameBoard[row][col] = currentPlayer; // Player's move will be executed based on the player's chosen symbol (X or O)

        currentPlayer = currentPlayer === "X" ? "O" // Switch player
        : "X";

        boardDisplay(); // Current board with player's moves will be updated
    }
}