'use strict'

function fillColor(e) {
    e.srcElement.style.backgroundColor = "black";
}

const CONTAINER_DIV = document.getElementById("container");

for (let i = 0; i < 16*16; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.id = "gridSquare";
    CONTAINER_DIV.appendChild(squareDiv);
}


let gridSquares = document.querySelectorAll("#gridSquare");
gridSquares.forEach(square => {
    square.addEventListener("mouseover", fillColor);
});

/*
const testButton = document.querySelector("#testButton");
testButton.addEventListener("click", function() {
    fillColor();
});
*/