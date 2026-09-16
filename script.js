let score = 20;
let highscore = 0;
let secNm = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".mess").textContent = " No Number";
  } else if (guess === secNm) {
    document.querySelector(".mess").textContent = " You win!";

    document.querySelector(".score").textContent = score;
    document.querySelector(".sec").textContent = secNm;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".sec").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highScore").textContent = highscore;
    }
  } else if (guess !== secNm) {
    if (score > 1) {
      document.querySelector(".mess").textContent =
        guess > secNm ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".mess").textContent = "you lost";
      document.querySelector(".sec").textContent = secNm;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secNm = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".sec").textContent = "?";
  document.querySelector(".mess").textContent = "Start guessing ... ";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".sec").style.width = "15rem";
});
