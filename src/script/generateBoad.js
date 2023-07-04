// Create bord witch draws images
import * as winlogick from "./winLogick.js";
export const generateBoard = (numOfRows, imgArr) => {
  const board = document.querySelector(".game__board");
  const tilesArr = [];

  for (let i = 0; i < numOfRows * numOfRows; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.appendChild(imgArr[i]);
    tile.setAttribute("data-index", imgArr[i].src.slice(-5, -4));
    board.style.setProperty(
      "grid-template-columns",
      `repeat(${numOfRows}, 1fr)`
    );
    board.style.setProperty("grid-template-rows", `repeat(${numOfRows}, 1fr)`);
    board.appendChild(tile);
    tilesArr.push(tile);
    winlogick.controller.numbOftiles = tilesArr.length;
  }
  return tilesArr;
};
