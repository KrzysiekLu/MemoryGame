const lvlBTNs = document.querySelectorAll(".game__level button");
const lvlTitle = document.querySelector(".game__level__title");

// import * as winLogick from "./winLogick.js";
import { startTimer } from "./stopwatch.js";
import { generateBoard } from "./generateBoad.js";
import * as animations from "./animations.js";
import { init } from "./winLogick.js";
import { fetchImg } from "./generateBoad.js";

// Switch off btns when game starts
const deactivationBtn = () => {
  lvlBTNs.forEach((btn) => {
    btn.style.pointerEvents = "none";
  });
};
// hide tiles after 3s.

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
    generateBoard(e.target.dataset.lvl, fetchImg(e.target.dataset.lvl));
    animations.showBoardAnimation();
    setTimeout(() => {
      init();
      startTimer();
    }, 4000);
  })
);

// iphone fix ??
document.body.addEventListener("click", (e) => {
  // console.log(e.target);
});
