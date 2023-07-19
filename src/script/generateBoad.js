// Create bord witch draws images
import * as winlogick from "./winLogick.js";
const getLvl = (lvlBTN) => {
  const boardSizes = {
    easy: {
      rows: 3,
      columns: 4,
    },
    medium: {
      rows: 4,
      columns: 5,
    },
    hard: {
      rows: 5,
      columns: 6,
    },
  };

  return boardSizes[lvlBTN];
};
// Get img from folder and return array with images
const fetchImg = (lvl) => {
  const chooseLevel = getLvl(lvl);

  let imgArr = [];
  for (let i = 0; i < 2; i++) {
    for (let i = 0; i < (chooseLevel.rows * chooseLevel.columns) / 2; i++) {
      const img = document.createElement("img");
      img.classList.add("tile__img");
      img.src = `./src/images/img-${i}.png`;
      img.setAttribute("data-index", i);
      imgArr.push(img);
    }
  }
  const shuffledArray = imgArr.sort((a, b) => 0.5 - Math.random());

  return shuffledArray;
};

const generateBoard = (lvlBTN, imgArr) => {
  const board = document.querySelector(".game__board");
  const tilesArr = [];
  const sizeOfBoard = getLvl(lvlBTN);

  for (let i = 0; i < sizeOfBoard.rows * sizeOfBoard.columns; i++) {
    const tileBack = document.createElement("div");
    const tileFront = document.createElement("div");
    tileFront.classList.add("tile-front");
    tileBack.classList.add("tile-back");
    tileBack.appendChild(imgArr[i]);
    tileFront.setAttribute("data-index", imgArr[i].dataset.index);
    board.style.setProperty(
      "grid-template-columns",
      `repeat(${sizeOfBoard.columns}, 1fr)`
    );
    board.style.maxWidth = `${sizeOfBoard.columns * 120}px`;
    board.style.setProperty(
      "grid-template-rows",
      `repeat(${sizeOfBoard.rows}, 1fr)`
    );
    tileFront.insertAdjacentElement("afterbegin", tileBack);
    board.appendChild(tileFront);
    tilesArr.push(tileBack);
    winlogick.controller.numbOftiles = tilesArr.length;
  }

  initialTilesShowin(tilesArr);
  return tilesArr;
};
const initialTilesShowin = (tiles) => {
  setTimeout(() => {
    tiles.forEach((tile) => {
      tile.classList.add("tile-back--hide");
      tile.parentNode.classList.add("tile-front--hide");
    });
  }, 3000);
};
export { generateBoard, fetchImg };
