const lvlBTNs = document.querySelectorAll(".game_level button");
const board = document.querySelector(".game__board");
const timer = document.querySelectorAll(".game__timer span");

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
const startTimer = () => {
  let ms = 0;
  setInterval(() => {
    ms++;
    let min = `0${Math.floor((ms / 3600) % 60)}`;
    let sec = `0${Math.floor((ms / 60) % 60)}`;
    let mss = `0${Math.floor(ms % 60)}`;

    timer[2].textContent = mss.slice(-2);
    timer[1].textContent = sec.slice(-2);
    timer[0].textContent = min.slice(-2);
  }, 1000 / 60);
};

const showBoardAnimation = () => {
  board.classList.add("game__board--active");
};

// Switch off btns when game starts
const deactivationBtn = () => {
  lvlBTNs.forEach((btn) => {
    btn.setAttribute("disabled", "");
  });
};
// Acttions for buttons
lvlBTNs.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    deactivationBtn();
    showBoardAnimation();
    startTimer();
    generateBoard(e.target.dataset.row, fetchImg(e.target.dataset.row));
  })
);
console.log("11s235".slice(-2));
