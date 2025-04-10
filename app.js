const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#resetButton");
const playToSelect = document.querySelector("#playto");
let winningScore = 5,
  gameOver = false;

function updateScore(player, opponent) {
  if (!gameOver) {
    player.score++;
    if (player.score === winningScore) {
      gameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});

playToSelect.addEventListener("change", () => {
  winningScore = parseInt(playToSelect.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  gameOver = false;
  for(let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
