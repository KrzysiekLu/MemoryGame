// show start animation
const initialCountdown = document.querySelector(".count");
const board = document.querySelector(".game__board");

export const InitialCountdown = () => {
  initialCountdown.classList.add("count--active");
};

export const showBoardAnimation = () => {
  board.classList.add("game__board--active");
};
