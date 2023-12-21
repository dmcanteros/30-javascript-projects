"use strict";


/* --------------------------------------------------------------------------------------------------------------------

TIC-TAC-TOE:

The Mechanics of the Strategy Game:

1. There are 9 cells in the 2D game board that will be filled-out by the players.
2. The players are the computer and the user.
3. The user will choose his / her own character, either "X" or "O".
4. "X" is always the first turn.
5. Players should take turns inside any of the empty cells to place their marks to get a continuous line of 3 cells.
6. The lines can be horizontal, vertical, or diagonal.
7. Whoever gets the straight line first, will be the WINNER!
8. Otherwise, it's a TIE.
9. The total of draws and players' wins will be recorded automatically in score table tally.

--------------------------------------------------------------------------------------------------------------------- */


// Global variables

const modal = document.querySelector(".modal-bg");
const startBtn = document.querySelector(".start-btn");
const cellData = document.querySelectorAll("[data-cell]");
const board = document.getElementById("t3-board");
const winner = document.getElementById("winner");
const restartBtn = document.querySelector("restart-btn");
const winnerAnnouncement = document.getElementById("winner-announcement");


/* The modal will execute automatically after the page has finished loading;
   It'll ask which character to choose (X or O). */

window.addEventListener("load", () => {
    
    setTimeout(function openModal(e) {
        document.querySelector(".modal-bg")
        .style.display = "block";
    },
        1000 // The modal will pop-up after 1s
    )
});


/*  The 2D board will reset to empty cells (if there was a prior game occurred);
    Written in for loops to iterate all 9 cells.  */

const resetGame = () => {
    
    for (let box = 0; box < cells.length; box++) {
        cells[box] = ""; // Updating the cell value to an empty string

        const cellElement = document.getElementById(`c-${box}`); // Getting the corresponding cell element using id

        cellElement.innerHTML = ""; // Reset the HTML element to an empty string
}

gameOver = false; // Setting the game to false to indicate it's not over

};


/*  The modal will close after clicking "Start" button;
    Previous game will reset (if there's any).  */

startBtn.addEventListener("click", () => {
    
    resetGame(); // Calling the resetGame function to reset the game after the event click
    modal.style.display = "none";
});


/*
    Global Variables:

    playerX - Player X
    playerO - Player O
*/

const playerX = "x";
const playerO = "o";

/* 
    Variable cells - Array of cells to represent 2D board with zero-based indexing to manipulate all sides.

    Indexes within the tile board:
    [0] [1] [2]
    [3] [4] [5]
    [6] [7] [8]
*/

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

/* 
    winPatterns - Array pattern of elements for win conditions.  
    
    Horizontal:
    [0] [1] [2]
    [3] [4] [5]
    [6] [7] [8]

    Vertical:
    [0] [3] [6]
    [1] [4] [7]
    [2] [5] [8]

    Diagonal:
    [0] [4] [8]
    [2] [4] [6]
*/

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Variable gameOver - Initialized to falsy if the game is not over

let gameOver = false;

// Means the player "X" is always the first turn

let playerO_turn = false;


/*  Game starts by defaulting the "X" as the first player to move;
    Triggering the mouse click event for each cells */

const startGame = () => {
    playerO_turn = false;

    cellData.forEach(cell => {
        cell.addEventListener("click", cellClick, {once: true});
    })
    cursorForEmptyCell(); /* Cursor pointer will show when the tile is empty.
    It means the player can plot in the empty cell */ 
};


/*  
    "cellClick" function navigates which is the current player: X or O;
    The first condition checks if the cell is occupied;
    If yes, an alert will pop up to instruct the user to plot to an empty tile;
    Next, checking if there's a winner;
    If none, the game is draw;
    Otherwise, the game continues on taking turns based on the players' moves;
    By keeping the switching moves intuitive, the pointer cursor will show for empty cells only.
*/

const cellClick = (e) => {

    const cell = e.target;
    const currentPlayer = playerO_turn ?
    playerO :
    playerX;

    if (cell.innerHTML !== "") {
        alert("This cell is already occupied. Plot your turn in an empty tile.");
        return; // Stop further execution if the cell is occupied
    }

    playerMoves(cell, currentPlayer);

    if (checkWinner(currentPlayer)) {
        endGame(false);
    } else if (draw()) {
        endGame(true); 
    } else {
        switchTurns();
        cursorForEmptyCell();
    }

};


/* ------------------------------------------------------------------------------------

Game Theory AI Algorithm:

The two players are the computer (manipulated by AI), and the user's intuitive moves.

Grading system to figure out which player wins:

Win = 1
Loss = -1
Draw = 0

------------------------------------------------------------------------------------- */






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

/* const cellClick = (row, col) => {

    if (gameBoard[row][col] === " ") { // Condition if the cell is empty
        gameBoard[row][col] = currentPlayer; // Player's move will be executed based on the player's chosen symbol (X or O)

        currentPlayer = currentPlayer === "X" ? "O" // Switch player
        : "X";

        boardDisplay(); // Current board with player's moves will be updated
    }
} */