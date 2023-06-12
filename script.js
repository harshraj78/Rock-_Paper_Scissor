// Function to generate computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Function to handle player's choice
function handlePlayerChoice(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  document.getElementById('computer-choice').textContent = `Computer chose ${computerChoice}.`;
  document.getElementById('result').textContent = result;
}

// Event listeners for player's choice buttons
document.getElementById('rock').addEventListener('click', function() {
  handlePlayerChoice('rock');
});

document.getElementById('paper').addEventListener('click', function() {
  handlePlayerChoice('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
  handlePlayerChoice('scissors');
});
