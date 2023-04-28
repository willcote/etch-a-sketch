createGrid(16);

/* change resolution button */

// when button is pressed:
// - prompt user for a resolution (fill in whatever current res is)
// - validate input
// - store value and use it change how many squares there are

const changeResolutionButton = document.querySelector(
  ".change-resolution-button"
);

changeResolutionButton.addEventListener("click", changeGridResolution);

function changeGridResolution() {
  userInput = prompt("Enter canvas size (whole number from 1-100)");
  while (!validateInput(userInput))
    userInput = prompt("please choose a whole number from 1-100");
  createGrid(userInput);
}

function validateInput(input) {
  // want it to check if it's
  // - an integer
  // - GREATER THAN 0
  // - LESS THAN <some number, probably like 50>
  const MAX_SIZE = 100;

  if (
    input == parseInt(input, 10) &&
    parseInt(input, 10) > 0 &&
    parseInt(input, 10) <= MAX_SIZE
  )
    return true;
}

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
  Array.from(gridContents).forEach((gridRow) => {
    gridRow.remove();
  });
  console.log(container.childNodes);
}

function addHoverFunctionality() {
  squares = document.querySelectorAll(".square");
  let color;

  // forEach needs squares to be an array instead of a nodelist
  Array.from(squares).forEach((s) => {
    s.addEventListener("mouseover", () => {
      color = getRandomColor();
      s.setAttribute("style", `background-color: ${color}`);

      // s.classList.add("hover");
    });
  });
}

function getRandomColor() {
  let randomHexColor =
    "#" +
    Math.floor((Math.random() * 0xffffff) << 0)
      .toString(16)
      .padStart(6, "0");
  return randomHexColor;
}
