const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#resetButton");

const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const playToSelect = document.querySelector("#playto");

let p1Score = 0,
  winningScore = 5,
  p2Score = 0,
  gameOver = false;

p1Button.addEventListener("click", () => {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", () => {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
});
