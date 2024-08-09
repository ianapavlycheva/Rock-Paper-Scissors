function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  let computerChoice = options[randomIndex];
  return computerChoice;
}

function getHumanChoice() {
  const validChoices = ["rock", "paper", "scissors"];
  let humanChoice = prompt(
    "Enter your choice (rock, paper, or scissors):"
  ).toLowerCase();

  while (!validChoices.includes(humanChoice)) {
    humanChoice = prompt(
      "Invalid choice. Please enter rock, paper, or scissors:"
    ).toLowerCase();
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie! No points.";
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return `Human wins this round! ${humanChoice} bits ${computerChoice}`;
  } else {
    return `Computer wins this round! ${computerChoice} bits ${humanChoice}`;
  }
}

function playGame(rounds) {
  let humanScore = 0;
  let computerScore = 0;

  for (let count = 0; count < rounds; count++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);
    console.log(result);

    if (result.includes("Human wins")) {
      humanScore++;
    } else if (result.includes("Computer wins")) {
      computerScore++;
    }

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("Human wins the game!");
  } else if (humanScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame(5);
