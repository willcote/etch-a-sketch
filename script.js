createGrid(16);

/* change resolution button */

/* 
when button is pressed:
  prompt user for a resolution (fill in whatever current res is)
  validate input
  store value and use it change how many squares there are
*/

const changeResolutionButton = document.querySelector(
  ".change-resolution-button"
);

changeResolutionButton.addEventListener("click", changeGridResolution);

function changeGridResolution() {
  userInput = prompt("Type the desired pixel length");
  console.log(userInput);
  while (!validateInput(userInput))
    userInput = prompt("please choose a whole number from 1-50");

  createGrid(userInput);
}

function validateInput(input) {
  // want it to check if it's
  // - an integer
  // - GREATER THAN 0
  // - LESS THAN <some number, probably like 50>

  if (
    input == parseInt(input, 10) &&
    parseInt(input, 10) > 0 &&
    parseInt(input, 10) <= 50
  )
    return true;
}
/* create 16 x 16 grid */

function createGrid(numSquares) {
  const gridContainer = document.querySelector(".grid-container");
  clearSquares(gridContainer);

  for (let i = 0; i < numSquares; i++) {
    const squareContainer = document.createElement("div");
    squareContainer.classList.add("square-container");
    gridContainer.appendChild(squareContainer);

    for (let j = 0; j < numSquares; j++) {
      const square = document.createElement("div");
      square.classList.add("square");

      squareContainer.appendChild(square);
    }
  }

  // here so the new squares get the hovering effect
  // if this was outside the function, only the original squares would get it
  addHoverFunctionality();
}

function clearSquares(container) {
  let gridContents = container.childNodes;
  Array.from(gridContents).forEach(function (gridRow) {
    gridRow.remove();
  });
  console.log(container.childNodes);
}

function addHoverFunctionality() {
  /* hover */

  squares = document.querySelectorAll(".square");

  // forEach needs squares to be an array instead of a nodelist
  Array.from(squares).forEach((s) => {
    s.addEventListener("mouseover", () => {
      s.classList.add("hover");
    });
  });
}
