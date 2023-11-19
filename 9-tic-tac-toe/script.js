"use strict";


// This is a 3x3 tic-tac-toe game board dimension
const gameBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];


let currentPlayer = "X";


const boardDisplay = () => {
    console.log("  0 1 2");

    for (let i = 0; i < gameBoard.length; i++) {
        let row = `${i} `;

        for (let j = 0; j < gameBoard[i].length; j++) {
            row += gameBoard[i][j] + " ";
            console.log(" " + gameBoard[i][j]);
        }
        console.log(row);
    }
}