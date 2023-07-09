// Create bord witch draws images
import * as winlogick from "./winLogick.js";

const initialTilesShowin = (tiles) => {
  setInterval(() => {
    tiles.forEach((tile) => tile.classList.add(".tile-back--hide"));
  }, 3000);
};

export const generateBoard = (numOfRows, imgArr) => {
  const board = document.querySelector(".game__board");
  const tilesArr = [];

  for (let i = 0; i < numOfRows * numOfRows; i++) {
    const tileBack = document.createElement("div");
    const tileFront = document.createElement("div");
    tileFront.classList.add("tile-front");
    tileBack.classList.add("tile-back");
    tileBack.appendChild(imgArr[i]);
    tileFront.setAttribute("data-index", imgArr[i].src.slice(-5, -4));
    board.style.setProperty(
      "grid-template-columns",
      `repeat(${numOfRows}, 1fr)`
    );
    board.style.setProperty("grid-template-rows", `repeat(${numOfRows}, 1fr)`);
    tileFront.insertAdjacentElement("afterbegin", tileBack);
    board.appendChild(tileFront);
    tilesArr.push(tileBack);
    winlogick.controller.numbOftiles = tilesArr.length;
  }
  initialTilesShowin(tilesArr);
  return tilesArr;
};
