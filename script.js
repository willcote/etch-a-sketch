/* create 16 x 16 grid */

const gridContainer = document.querySelector(".grid-container");

const GRID_SIZE = 16;
for (let i = 0; i < GRID_SIZE; i++) {
  const squareContainer = document.createElement("div");
  squareContainer.classList.add("square-container");
  gridContainer.appendChild(squareContainer);

  for (let j = 0; j < GRID_SIZE; j++) {
    const square = document.createElement("div");
    square.classList.add("square");

    squareContainer.appendChild(square);
  }
}

/* hover */

squares = document.querySelectorAll(".square");

// forEach needs squares to be an array instead of a nodelist
Array.from(squares).forEach((s) => {
  s.addEventListener("mouseover", () => {
    s.classList.add("hover");
  });
});
