import { generateBoard } from "./generateBoad.js";

const board = document.querySelector(".game__board");
// const score = document.querySelector(".score span");
// const reBtn = document.querySelector(".restart");

// const tilesArr = [1, 2, 2, 1];

const controller = {
  moves: 0,
  movesValue: [],
  scores: 0,
  movement: false,
  numbOftiles: 0,
  stopwatch: true,
};

const countMoves = () => {
  controller.moves++;
};
const endGame = () => {
  setTimeout(() => {
    board.classList.add("board--win");
    board.textContent = "You win!!";
  }, 800);
};
const checkPair = () => {
  const [firstTile, secondTile] = controller.movesValue;
  if (firstTile.dataset.index !== secondTile.dataset.index) {
    setTimeout(() => {
      controller.movesValue.forEach((clickedElement) => {
        clickedElement.classList.remove("clicked");
        controller.movesValue = [];
      });
    }, 1000);
  } else {
    controller.movesValue = [];
    controller.scores++;
    if (controller.numbOftiles / 2 == controller.scores) {
      endGame();
    }
  }
};

const handleClick = (e) => {
  const targetTile = e.target;
  console.log(controller.numbOftiles);

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
      }, 500);
      checkPair();
      controller.moves = 0;
    }
  }
};

const init = () => {
  addEventListener("click", handleClick);
};
export { init, controller };

// reBtn.addEventListener("click", () => {
//   board.classList.remove("board--win");
//   board.textContent = "";
//   controller.movesValue = [];
//   controller.moves = 0;
//   controller.scores = 0;
//   init();
// });
