const lvlBTNs = document.querySelectorAll(".game__level button");
const lvlTitle = document.querySelector(".game__level__title");

import * as winLogick from "./winLogick.js";
import { startTimer } from "./stopwatch.js";
import { generateBoard } from "./generateBoad.js";
import * as animations from "./animations.js";
import { init } from "./winLogick.js";

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

// Switch off btns when game starts
const deactivationBtn = () => {
  lvlBTNs.forEach((btn) => {
    // btn.setAttribute("disabled", "");
    btn.style.pointerEvents = "none";
  });
};
// Show tiles for 3s.

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
      init();
      animations.showBoardAnimation();
      startTimer();
      generateBoard(e.target.dataset.row, fetchImg(e.target.dataset.row));
    }, 3500);
  })
);

// document.body.addEventListener("click", (e) => {
//   console.log(e.target);
// });
