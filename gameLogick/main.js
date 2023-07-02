const board = document.querySelector(".board");
const score = document.querySelector(".score span");

const tilesArr = [1, 2, 2, 1];

const controler = {
  moves: 0,
  movesValue: [],
  scores: 0,
  movment: false,
};
tilesArr.forEach((tile) => {
  const boardTile = document.createElement("div");
  boardTile.textContent = tile;
  boardTile.classList.add("board__tile");
  board.insertAdjacentElement("afterbegin", boardTile);
});
const endGeame = () => {
  setTimeout(() => {
    board.classList.add("board--win");
    board.textContent = "You win !!";
  }, 800);
};
board.addEventListener("click", (e) => {
  ++controler.moves;
  console.log(controler.moves);

  if (controler.moves <= 2) {
    e.target.classList.add("clicked");
    controler.movesValue.push(e.target);
    console.log(controler.movesValue);

    if (controler.moves === 2) {
      if (
        controler.movesValue[0].innerText != controler.movesValue[1].innerText
      ) {
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
      controler.moves = 0;
    }
  }
});
