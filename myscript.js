'use strict'

function fillColor(e) {
    e.srcElement.style.backgroundColor = "black";
}

function resetGrid(e) {
    clearOldGrid();
    const SQUARES_PER_SIDE = getSquaresPerSide();
    changeGridTemplate(SQUARES_PER_SIDE);
    createNewGrid(SQUARES_PER_SIDE);
}

function clearOldGrid() {
    const GRID_SQUARES = document.querySelectorAll("#gridSquare");
    GRID_SQUARES.forEach(square => square.remove());
}

function getSquaresPerSide() {
    let squaresPerSide;
    do { 
        squaresPerSide = window.prompt("How many squares would you like per side for the new grid?");
        if (squaresPerSide == null) break;
        squaresPerSide = parseInt(squaresPerSide);
        if (squaresPerSide < 0 || squaresPerSide > 100) window.alert("The ammount must be between 0 and 100");
    } while (!Number.isInteger(squaresPerSide) || squaresPerSide < 0 || squaresPerSide > 100);
    return squaresPerSide;
}

function changeGridTemplate(squaresPerSide) {
    document.getElementById("container").style.gridTemplateColumns = `repeat(${squaresPerSide}, auto)`;
    document.getElementById("container").style.gridTemplateRows = `repeat(${squaresPerSide}, auto)`;
}

function createNewGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide*squaresPerSide; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.id = "gridSquare";
        CONTAINER_DIV.appendChild(squareDiv);
    }
    attachEventListenerToSquares();
}

function attachEventListenerToSquares() {
    const GRID_SQUARES = document.querySelectorAll("#gridSquare");
    GRID_SQUARES.forEach(square => {
        square.addEventListener("mouseover", fillColor);
    });
}

const CONTAINER_DIV = document.getElementById("container");

const RESET_GRID_BUTTON = document.querySelector("#resetGridButton");
RESET_GRID_BUTTON.addEventListener("click", resetGrid);

createNewGrid(16);

//the problem now is that the grid layout is not dynamic, cant create squares everytime because the grid template is 16*16 by defaulft