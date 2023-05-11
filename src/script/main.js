const lvlBTNs = document.querySelectorAll(".game_level button");
const board = document.querySelector(".game__board");

// Get img from folder and return array with images
const fetchImg = (numOfRows) => {
  let imgArr = [];
  for (let i = 0; i < 2; i++) {
    for (let i = 0; i < (numOfRows * numOfRows) / 2; i++) {
      const img = document.createElement("img");
      img.classList.add("tile__img");
      img.src = `./src/images/img-${i}.png`;
      imgArr.push(img);
    }
  }
  const shuffledArray = imgArr.sort((a, b) => 0.5 - Math.random());
  return shuffledArray;
};

// Create bord witch draws images
const generateBoard = (numOfRows, imgArr) => {
  board.innerHTML = "";
  for (let i = 0; i < numOfRows * numOfRows; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.appendChild(imgArr[i]);
    board.style.setProperty(
      "grid-template-columns",
      `repeat(${numOfRows}, 1fr)`
    );
    board.style.setProperty("grid-template-rows", `repeat(${numOfRows}, 1fr)`);
    board.style.color = "white";
    board.appendChild(tile);
  }
};

const showBoardAnimation = () => {
  board.classList.add("game__board--active");
};

// Acttions for buttons
lvlBTNs.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    showBoardAnimation();
    generateBoard(e.target.dataset.row, fetchImg(e.target.dataset.row));
  })
);
