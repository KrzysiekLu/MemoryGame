const lvlBTNs = document.querySelectorAll(".game_level button");
const board = document.querySelector(".game__board");

const generateBoard = (numOfRows) => {
  board.innerHTML = "";
  for (let i = 0; i < numOfRows * numOfRows; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = i;
    board.style.setProperty(
      "grid-template-columns",
      `repeat(${numOfRows}, 1fr)`
    );
    board.style.setProperty("grid-template-rows", `repeat(${numOfRows}, 1fr)`);
    board.style.color = "white";
    board.appendChild(tile);
  }
};

lvlBTNs.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    generateBoard(e.target.dataset.row);
  })
);
