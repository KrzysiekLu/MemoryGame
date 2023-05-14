const lvlBTNs = document.querySelectorAll(".game__level button");
const board = document.querySelector(".game__board");
const timer = document.querySelectorAll(".game__timer span");
const lvlTitle = document.querySelector(".game__level__title");
const initialCountdown = document.querySelector(".count");

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
// show start animation
const InitialCountdown = () => {
  initialCountdown.classList.add("count--active");
};

// Start stopwatch

const startTimer = () => {
  console.log();
  timer[0].parentNode.classList.add("game__timer--active");
  let ms = 0;
  setInterval(() => {
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
  }, 10);
};

const showBoardAnimation = () => {
  board.classList.add("game__board--active");
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
    InitialCountdown();
    deactivationBtn();
    chooseLevel(e.target, lvlBTNs);
    setTimeout(() => {
      showBoardAnimation();
      startTimer();
      generateBoard(e.target.dataset.row, fetchImg(e.target.dataset.row));
    }, 4000);
  })
);
