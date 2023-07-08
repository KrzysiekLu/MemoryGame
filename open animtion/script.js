const lvlBtns = document.querySelectorAll(".lvlBtns__btn");
const lvlBtnsContainer = document.querySelector(".lvlBtns");
const board = document.querySelector(".game__board");

lvlBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    crateBoard(getLvl(e));
  });
});

const getLvl = (e) => {
  const level = {
    L1: {
      row: 4,
      column: 3,
    },
    L2: {
      row: 4,
      column: 5,
    },
    L3: {
      row: 5,
      column: 6,
    },
  };
  return level[e.target.dataset.lvl];
};

const crateBoard = (level) => {
  let counter = 0;
  const step2 = () => {
    const animationInterval = setInterval(() => {
      tilesArr[counter].classList.add("board__tile--show");
      counter++;
      if (counter === tilesArr.length) {
        clearInterval(animationInterval);
      }
    }, 100);
  };
  lvlBtnsContainer.classList.add("lvlBtns--hidde");
  const { row, column } = level;
  numbOfTiles = row * column;
  let tilesArr = [];
  for (let i = 1; i <= numbOfTiles; i++) {
    board.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
    const tile = document.createElement("div");
    tile.classList.add("board__tile");
    board.insertAdjacentElement("beforeend", tile);
    tilesArr.push(tile);
    if (tilesArr.length === numbOfTiles) {
      step2();
    }
  }
};
