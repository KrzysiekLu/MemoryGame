const lvlBTNs = document.querySelectorAll(".game__level button");
const lvlTitle = document.querySelector(".game__level__title");
const restartBTN = document.getElementById("restart");

// import * as winLogick from "./winLogick.js";
import { startTimer } from "./stopwatch.js";
import { generateBoard } from "./generateBoad.js";
import * as animations from "./animations.js";
import { init } from "./winLogick.js";
import { fetchImg } from "./generateBoad.js";
import { controller } from "./winLogick.js";
import { clearTimer } from "./stopwatch.js";
import { restartInitialCountdown } from "./animations.js";

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
    controller.win = false;
    animations.InitialCountdown();
    chooseLevel(e.target, lvlBTNs);
    generateBoard(e.target.dataset.lvl, fetchImg(e.target.dataset.lvl));
    animations.showBoardAnimation();
    setTimeout(() => {
      init();
      startTimer();
      restartBTN.addEventListener("click", restart);
    }, 4000);
  })
);

const restart = () => {
  const board = document.querySelector(".game__board");
  board.classList.remove("board--win");
  board.textContent = "";
  controller.movesValue = [];
  controller.moves = 0;
  controller.scores = 0;
  lvlTitle.classList.remove("hidde");
  restartInitialCountdown();
  lvlBTNs.forEach((btn) => {
    btn.classList.remove("hide");
    btn.classList.remove("selected");
  });
  clearTimer();
  restartBTN.removeEventListener("click", restart);
};
// iphone fix ??
document.body.addEventListener("click", (e) => {
  // console.log(e.target);
});
