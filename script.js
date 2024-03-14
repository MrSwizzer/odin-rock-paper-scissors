function getComputerChoice(params) {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let computerChoice = getComputerChoice();
let playerChoice = prompt('Please choose between "Rock" "Paper" or "Scissors"');
playerChoice = playerChoice.toLowerCase();

console.log("You chose: " + playerChoice);
console.log("The computer chose: " + computerChoice);

function checkInput(input) {
  return input === "rock" || input === "paper" || input === "scissors";
}

function calculateOutcome(computerSelection, playerSelcetion) {
  if (checkInput(playerSelcetion)) {
    if (playerSelcetion === computerSelection) {
      return "It's a tie!";
    } else if (playerSelcetion === "rock" && computerSelection === "scissors") {
      return "You win!";
    } else if (playerSelcetion === "rock" && computerSelection === "paper") {
      return "Computer wins!";
    } else if (
      playerSelcetion === "scissors" &&
      computerSelection === "paper"
    ) {
      return "You win!";
    } else if (
      playerSelcetion === "scissors" &&
      computerSelection === "scissors"
    ) {
      return "Computer wins!";
    } else if (playerSelcetion === "paper" && computerSelection === "rock") {
      return "You win!";
    } else if (
      playerSelcetion === "paper" &&
      computerSelection === "scissors"
    ) {
      return "Computer wins!";
    }
  } else {
    return "Sorry, wrong input!";
  }
}

console.log(calculateOutcome(computerChoice, playerChoice));
