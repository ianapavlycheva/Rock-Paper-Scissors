let humanScore = 0;
let computerScore = 0;

document
  .getElementById("rock")
  .addEventListener("click", () => handleClick("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => handleClick("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => handleClick("scissors"));

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  let computerChoice = options[randomIndex];
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  const humanChoiceCapitalized = capitalize(humanChoice);
  const computerChoiceCapitalized = capitalize(computerChoice);

  if (humanChoice === computerChoice) {
    return "It's a tie! No points.";
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `Human wins this round! ${humanChoiceCapitalized} beats ${computerChoiceCapitalized}`;
  } else {
    computerScore++;
    return `Computer wins this round! ${computerChoiceCapitalized} beats ${humanChoiceCapitalized}`;
  }
}

function updateScore() {
  document.getElementById("human-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function checkWinner() {
  if (humanScore === 5) {
    document.getElementById("final-result").textContent =
      "Human wins the game!";
    disableButtons();
  } else if (computerScore === 5) {
    document.getElementById("final-result").textContent =
      "Computer wins the game!";
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

function handleClick(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  document.getElementById("result").textContent = result;
  updateScore();
  checkWinner();
}
