const gridContainer = document.querySelector(".grid-container");

const GRID_SIZE = 16;
for (let i = 0; i < GRID_SIZE; i++) {
  for (let j = 0; j < GRID_SIZE; j++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    gridSquare.setAttribute("style", "border-color: black; border-style");

    gridContainer.appendChild(gridSquare);
  }
}
