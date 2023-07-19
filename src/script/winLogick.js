import { startTimer } from "./stopwatch.js";

const board = document.querySelector(".game__board");

const controller = {
  moves: 0,
  movesValue: [],
  scores: 0,
  movement: false,
  numbOftiles: 0,
  stopwatch: true,
  win: false,
  correctPair: false,
};

const countMoves = () => {
  controller.moves++;
};
const endGame = () => {
  controller.win = true;
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
        clickedElement.children[0].classList.remove("clicked");
        controller.movesValue = [];
        controller.movement = false;
      });
    }, 500);
  } else {
    controller.movement = false;
    controller.movesValue = [];
    controller.scores++;
    if (controller.numbOftiles / 2 == controller.scores) {
      endGame();
    }
  }
};

const handleClick = (e) => {
  const targetTile = e.target;
  if (
    controller.moves <= 2 &&
    !controller.movement &&
    targetTile.classList.contains("tile-front") &&
    !targetTile.classList.contains("clicked")
  ) {
    countMoves();
    targetTile.classList.add("clicked");
    targetTile.children[0].classList.add("clicked");

    controller.movesValue.push(targetTile);

    if (controller.moves === 2) {
      controller.movement = true;
      checkPair();
      controller.moves = 0;
    }
  }
};

const init = () => {
  addEventListener("click", handleClick);
};
export { init, controller, endGame };
