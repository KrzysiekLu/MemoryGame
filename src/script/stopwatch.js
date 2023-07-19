import { controller } from "./winLogick.js";

// start stopwatch
const timer = document.querySelectorAll(".game__timer span");

export const startTimer = () => {
  timer[0].parentNode.classList.add("game__timer--active");
  let ms = 0;
  let timerInterval;
  timerInterval = setInterval(() => {
    if (!controller.win) {
      ms++;
      let min = `0${Math.floor((ms / 6000) % 60)}`;
      let sec = `0${Math.floor((ms / 100) % 60)}`;
      let mss = `0${Math.floor(ms % 100)}`;

      timer[2].textContent = mss.slice(-2);
      if (sec.length < 3) {
        timer[1].textContent = sec.slice(-3);
      } else {
        timer[1].textContent = sec.slice(-2);
      }
      if (min.length < 3) {
        timer[0].textContent = min.slice(-3);
      } else {
        timer[0].textContent = min.slice(-2);
      }
    }
  }, 10);
};
// export const stopTimer = () => {
//   return clearInterval(startTimer);
// };
// setTimeout(() => {
//   console.log("stop");

//   stopTimer();
// }, 4000);
