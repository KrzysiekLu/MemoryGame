import { generateBoard } from "./generateBoad.js";

const board = document.querySelector(".game__board");
const score = document.querySelector(".score span");
// const reBtn = document.querySelector(".restart");

// const tilesArr = [1, 2, 2, 1];

const controller = {
  moves: 0,
  movesValue: [],
  scores: 0,
  movement: false,
};

const countMoves = () => {
  controller.moves++;
};

const checkPair = () => {
  const [firstTile, secondTile] = controller.movesValue;

  if (firstTile.innerText !== secondTile.innerText) {
    setTimeout(() => {
      controller.movesValue.forEach((clickedElement) => {
        clickedElement.classList.remove("clicked");
      });
      controller.movesValue = [];
    }, 1000);
  } else {
    controller.scores++;
    score.textContent = controller.scores;

    if (controller.movesValue.length === tilesArr.length) {
      endGame();
    }
  }
};

const endGame = () => {
  setTimeout(() => {
    board.classList.add("board--win");
    board.textContent = "You win!!";
  }, 800);
};

const handleClick = (e) => {
  const targetTile = e.target;
  console.log(e.target);

  if (
    controller.moves <= 2 &&
    !controller.movement &&
    targetTile.classList.contains("tile") &&
    !targetTile.classList.contains("clicked")
  ) {
    countMoves();
    targetTile.classList.add("clicked");
    controller.movesValue.push(targetTile);

    if (controller.moves === 2) {
      controller.movement = true;
      setTimeout(() => {
        controller.movement = false;
      }, 1000);
      checkPair();
      controller.moves = 0;
    }
  }
};

export const init = () => {
  addEventListener("click", handleClick);
};

// reBtn.addEventListener("click", () => {
//   board.classList.remove("board--win");
//   board.textContent = "";
//   controller.movesValue = [];
//   controller.moves = 0;
//   controller.scores = 0;
//   init();
// });
