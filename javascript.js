function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getHumanChoice() {
    const validChoices = ['rock', 'paper', 'scissors'];
    let userChoice = prompt('Enter your choice (rock, paper, or scissors):').toLowerCase();
    
    while (!validChoices.includes(userChoice)) {
    userChoice = prompt('Invalid choice. Please enter rock, paper, or scissors:').toLowerCase();
  }
return userChoice;
}
console.log(getHumanChoice() )