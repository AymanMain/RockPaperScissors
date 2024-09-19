function getComputerChoice() {
  let botChoice;
  let botChoiceNum = Math.random();
  if (botChoiceNum < 1 / 3) {
    botChoice = "rock";
  } else if (botChoiceNum >= 1 / 3 && botChoiceNum < 2 / 3) {
    botChoice = "paper";
  } else if (botChoiceNum >= 2 / 3) {
    botChoice = "scissors";
  }
  return botChoice;
}
function playRound(CPU, Player) {
  if (CPU == Player) {
    round.textContent = "Draw ,You Both Picked " + CPU + ".\n";
  } else if (
    (Player == "paper" && CPU == "rock") ||
    (Player == "rock" && CPU == "scissors") ||
    (Player == "scissors" && CPU == "paper")
  ) {
    round.textContent = "You Win ! " + Player + " Beats " + CPU + ".\n";
    HumanScore++;
  } else if (
    (Player == "rock" && CPU == "paper") ||
    (Player == "scissors" && CPU == "rock") ||
    (Player == "paper" && CPU == "scissors")
  ) {
    round.textContent = "You Lose ! " + CPU + " Beats " + Player + ".\n";
    ComputerScore++;
  }

  score.textContent = "Score is " + HumanScore + ":" + ComputerScore;

  if (ComputerScore === 3) {
    result.textContent = "You Lose! Good Luck Next Time.";
    HumanScore = 0;
    ComputerScore = 0;
  } else if (HumanScore === 3) {
    result.textContent = "You Win !.";
    HumanScore = 0;
    ComputerScore = 0;
  } else {
    result.textContent = "";
  }
}

// Main Game

let ComputerScore = 0;
let HumanScore = 0;
const r = document.createElement("button");
const p = document.createElement("button");
const s = document.createElement("button");
r.textContent = "ROCK";
p.textContent = "PAPER";
s.textContent = "SCISSORS";

r.addEventListener("click", () => {
  playRound(getComputerChoice(), "rock");
});

p.addEventListener("click", () => {
  playRound(getComputerChoice(), "paper");
});

s.addEventListener("click", () => {
  playRound(getComputerChoice(), "scissors");
});

const butdiv = document.createElement("div");
butdiv.classList.add("butdiv");
butdiv.appendChild(r);
butdiv.appendChild(p);
butdiv.appendChild(s);

const div = document.createElement("div");
butdiv.classList.add("scorediv");

const score = document.createElement("H1");
div.appendChild(score);

const round = document.createElement("H2");
div.appendChild(round);

const result = document.createElement("H1");
div.appendChild(result);

const body = document.createElement("div");
body.appendChild(butdiv);
body.appendChild(div);

const original = document.querySelector("body");
original.appendChild(body);
