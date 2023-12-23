"use strict";


/* --------------------------------------------------------------------------------------------------------------------

TIC-TAC-TOE:

The Mechanics of the Strategy Game:

1. There are 9 cells in the 2D game board that will be filled-out by the players.
2. There are 2 players; X and O.
3. Players should take turns inside any of the empty cells to place their marks to get a continuous line of 3 cells.
4. The lines can be horizontal, vertical, or diagonal.
5. Whoever gets the straight line first, will be the WINNER!
6. Otherwise, it's a TIE.
7. The total of draws and players' wins will be recorded automatically in score table tally.

--------------------------------------------------------------------------------------------------------------------- */


// Global variables

const modalChoosePlayer = document.querySelector(".modal-choose-player");
const startGameBtn = document.querySelector(".start-game-btn");
const cellData = document.querySelectorAll("[data-cell]");
const board = document.getElementById("t3-board");
const modalWinner = document.getElementById("modal-winner");
const restartGameBtn = document.querySelector("restart-game-btn");
const winnerAnnouncement = document.getElementById("winner-announcement");


/*  ---------------------------------------------------------------------------------

1.  The modal will execute automatically after the page has finished loading;
    It'll ask which character to choose (X or O). 

---------------------------------------------------------------------------------- */

window.addEventListener("load", () => {
    
    setTimeout(function openModalforPlayerOption(e) {
        document.querySelector(".modal-choose-player")
        .style.display = "block";
    },
        1000 // The modal will pop-up after 1s
    )
});


/*  The 2D board will reset to empty cells (if there was a prior game occurred);
    Written in for loops to iterate all 9 cells.  */

/* const resetGame = () => {
    
    for (let cell = 0; cell < cells.length; cell++) {
        cells[cell] = ""; // Updating the cell value to an empty string

        const cellElement = document.getElementById(`c-${cell}`); // Getting the corresponding cell element using id

        cellElement.innerHTML = ""; // Reset the HTML element to an empty string
}

gameOver = false; // Setting the game to false to indicate it's not over

}; */


/* ------------------------------------------------------

2.  The modal will close after clicking "Start" button;
    Previous game will reset (if there's any).  

------------------------------------------------------- */

startGameBtn.addEventListener("click", () => {
    
    // resetGame(); // Calling the resetGame function to reset the game after the event click
    modalChoosePlayer.style.display = "none";
});


/* -----------------------------------------------------------------------------------

3.  After choosing the character, player 1 (whichever character chosen) moves first;
    Followed by player 2, and so on.  

------------------------------------------------------------------------------------ */



/*
    Global Variables:

    playerX - Player X
    playerO - Player O
*/

// const playerX = "x";
// const playerO = "o";

/* 
    Variable cells - Array of cells to represent 2D board with zero-based indexing to manipulate all sides.

    Indexes within the tile board:
    [0] [1] [2]
    [3] [4] [5]
    [6] [7] [8]
*/

/* const cells = new Array();
    cells[0] = 0;
    cells[1] = 1;
    cells[2] = 2;
    cells[3] = 3;
    cells[4] = 4;
    cells[5] = 5;
    cells[6] = 6;
    cells[7] = 7;
    cells[8] = 8; */

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

/* const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]; */

// Variable gameOver - Initialized to falsy if the game is not over

// let gameOver = false;

// Means the player "X" is always the first turn

// let playerO_turn = false;


/*  Game starts by defaulting the "X" as the first player to move;
    Triggering the mouse click event for each cells */

/* const startGame = () => {
    playerO_turn = false;

    cellData.forEach(cell => {
        cell.addEventListener("click", cellClick, {once: true});
    })
    cursorForEmptyCell(); /* Cursor pointer will show when the tile is empty.
    It means the player can plot in the empty cell */ 
// }; 


/*  
    "cellClick" function navigates which is the current player: X or O;
    The first condition checks if the cell is occupied;
    If yes, an alert will pop up to instruct the user to plot to an empty tile;
    Next, checking if there's a winner;
    If none, the game is draw;
    Otherwise, the game continues on taking turns based on the players' moves;
    By keeping the switching moves intuitive, the pointer cursor will show for empty cells only.
*/

/* const cellClick = (e) => {

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

}; */