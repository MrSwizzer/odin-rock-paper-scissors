function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(computerSelection, playerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win this round";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer wins the round!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win this round";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer wins the round!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win this round";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Computer wins the round!";
  }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const showResultDiv = document.createElement("div");
showResultDiv.style.backgroundColor = "grey";
showResultDiv.style.fontSize = "50px";
showResultDiv.style.marginTop = "50px";

const playerCounterDiv = document.createElement("div");
playerCounterDiv.style.backgroundColor = "orange";
playerCounterDiv.style.fontSize = "50px";
playerCounterDiv.style.marginTop = "50px";
playerCounterDiv.textContent = "Player Wins: "

const computerCounterDiv = document.createElement("div");
computerCounterDiv.style.backgroundColor = "orange";
computerCounterDiv.style.fontSize = "50px";
computerCounterDiv.style.marginTop = "50px";
computerCounterDiv.textContent = "Computer Wins: "

const bestOfSevenWinnerDiv = document.createElement("div");
bestOfSevenWinnerDiv.style.fontSize = "80px";
bestOfSevenWinnerDiv.style.marginTop = "50px";

let playerCounter = 0;
let computerCounter = 0;

rockButton.addEventListener("click", () => {
  let roundWinner;
  roundWinner = playRound(getComputerChoice(), "rock");
  showResultDiv.textContent = roundWinner;

    if (roundWinner === "You win this round") {
      playerCounter++;
    } else if (roundWinner === "Computer wins the round!") {
      computerCounter++;
    }
    
    playerCounterDiv.textContent = `Player wins: ${playerCounter}`;
    computerCounterDiv.textContent = `Computer wins: ${computerCounter}`;

    if (playerCounter >= 5) {
      bestOfSevenWinnerDiv.textContent = "You have won the game"
    } else if (computerCounter >= 5) {
      bestOfSevenWinnerDiv.textContent = "The computer won the game"
    }
});
paperButton.addEventListener("click", () => {
  let roundWinner;
  roundWinner = playRound(getComputerChoice(), "paper");
  showResultDiv.textContent = roundWinner;

    if (roundWinner === "You win this round") {
      playerCounter++;
    } else if (roundWinner === "Computer wins the round!") {
      computerCounter++;
    }
    
    playerCounterDiv.textContent = `Player wins: ${playerCounter}`;
    computerCounterDiv.textContent = `Computer wins: ${computerCounter}`;

    if (playerCounter >= 5) {
      bestOfSevenWinnerDiv.textContent = "You have won the game"
    } else if (computerCounter >= 5) {
      bestOfSevenWinnerDiv.textContent = "The computer won the game"
    }
});
scissorsButton.addEventListener("click", () => {
  let roundWinner;
  roundWinner = playRound(getComputerChoice(), "scissors");
  showResultDiv.textContent = roundWinner;

    if (roundWinner === "You win this round") {
      playerCounter++;
    } else if (roundWinner === "Computer wins the round!") {
      computerCounter++;
    }
    
    playerCounterDiv.textContent = `Player wins: ${playerCounter}`;
    computerCounterDiv.textContent = `Computer wins: ${computerCounter}`;

    if (playerCounter >= 5) {
      bestOfSevenWinnerDiv.textContent = "You have won the game"
    } else if (computerCounter >= 5) {
      bestOfSevenWinnerDiv.textContent = "The computer won the game"
    }
});


const display = document.querySelector("#display");
display.appendChild(showResultDiv);
display.appendChild(bestOfSevenWinnerDiv);
display.appendChild(playerCounterDiv);
display.appendChild(computerCounterDiv);

