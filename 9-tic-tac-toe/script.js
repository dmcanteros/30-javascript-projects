"use strict";


// This is a 3x3 tic-tac-toe game board dimension
const gameBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];


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


// Executed immediately after the browser load is complete
/* const execute = () => {
    boardDisplay();
} */