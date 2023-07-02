const lvlBTNs = document.querySelectorAll(".game__level button");
const board = document.querySelector(".game__board");
const lvlTitle = document.querySelector(".game__level__title");

import * as winLogick from "./winLogick.js";
import { startTimer } from "./stopwatch.js";
import * as animations from "./animations.js";
console.log(animations);

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
  let moveNumb = 0;
  board.innerHTML = "";
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
    board.style.color = "white";
    board.appendChild(tile);
    tile.addEventListener("click", (e) => {
      if (moveNumb < 2) {
        winLogick.countMoves(e, moveNumb);
        moveNumb++;
      } else {
        moveNumb = 0;
      }
    });
  }
};

// Switch off btns when game starts
const deactivationBtn = () => {
  lvlBTNs.forEach((btn) => {
    // btn.setAttribute("disabled", "");
    btn.style.pointerEvents = "none";
  });
};
// change the appearance of the button when the level is selected
const chooseLevel = (selectedBtn, btns) => {
  btns.forEach((btn) => btn.classList.add("hide"));
  selectedBtn.classList.remove("hide");
  selectedBtn.classList.add("selected");
  lvlTitle.classList.add("hidde");
};
// Acttions for buttons
lvlBTNs.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    animations.InitialCountdown();
    deactivationBtn();
    chooseLevel(e.target, lvlBTNs);
    setTimeout(() => {
      animations.showBoardAnimation();
      startTimer();
      generateBoard(e.target.dataset.row, fetchImg(e.target.dataset.row));
    }, 1000);
  })
);
