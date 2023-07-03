const board = document.querySelector(".board");
const score = document.querySelector(".score span");

const tilesArr = [1, 2, 2, 1];

const controler = {
  moves: 0,
  movesValue: [],
  scores: 0,
  movment: false,
};
const createBoard = () => {
  tilesArr.forEach((tile) => {
    const boardTile = document.createElement("div");
    boardTile.textContent = tile;
    boardTile.classList.add("board__tile");
    board.insertAdjacentElement("afterbegin", boardTile);
  });
};
const countMoves = () => {
  ++controler.moves;
};

const checkPair = () => {
  if (controler.movesValue[0].innerText != controler.movesValue[1].innerText) {
    controler.movesValue.forEach((clickedElement) => {
      setTimeout(() => {
        clickedElement.classList.remove("clicked");
      }, 1000);
      controler.movesValue = [];
    });
  } else {
    controler.scores++;
    score.textContent = controler.scores;

    if (controler.movesValue.length === tilesArr.length) {
      endGeame();
    }
  }
};

const endGeame = () => {
  setTimeout(() => {
    board.classList.add("board--win");
    board.textContent = "You win !!";
  }, 800);
};

const init = () => {
  createBoard();
  board.addEventListener("click", (e) => {
    if (
      controler.moves <= 2 &&
      !controler.movment &&
      e.target.classList.contains("board__tile") &&
      !e.target.classList.contains("clicked")
    ) {
      countMoves();
      e.target.classList.add("clicked");
      console.log(controler.moves);

      console.log(e.target.classList.contains("clicked"));
      controler.movesValue.push(e.target);
      if (controler.moves === 2) {
        controler.movment = true;
        setTimeout(() => {
          controler.movment = false;
        }, 1000);
        checkPair();
        controler.moves = 0;
      }
    }
  });
};
init();
