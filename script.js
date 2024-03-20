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
    return "The forbidden Shadow wins!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer wins!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "The forbidden Shadow wins!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer wins!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "The forbidden Shadow wins!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Computer wins!";
  }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const showResultDiv = document.createElement("div");
showResultDiv.style.backgroundColor = "magenta";
showResultDiv.style.fontSize = "50px";
showResultDiv.style.marginTop = "50px";

rockButton.addEventListener("click", () => {
  showResultDiv.textContent = "Hmm Hmm JA!";
  setTimeout(
    () => (showResultDiv.textContent = playRound(getComputerChoice(), "rock")),
    3000
  );
});
paperButton.addEventListener("click", () => {
  showResultDiv.textContent = playRound(getComputerChoice(), "paper");
});
scissorsButton.addEventListener("click", () => {
  showResultDiv.textContent = playRound(getComputerChoice(), "scissors");
});

const display = document.querySelector("#display");
display.appendChild(showResultDiv);

/*
function playGame() {
  let playerCounter = 0;
  let computerCounter = 0;

  for (let index = 0; index < 5; index++) {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt(
      'Please choose between "Rock", "Paper" or "Scissors"'
    );
    playerChoice = playerChoice.toLowerCase();

    console.log("You chose: " + playerChoice);
    console.log("The computer chose: " + computerChoice);

    let winner = playRound(computerChoice, playerChoice);
    console.log(playRound(computerChoice, playerChoice));

    if (winner === "The forbidden Shadow wins!") {
      playerCounter++;
    } else if (winner === "Computer wins!") {
      computerCounter++;
    } else {
      console.log("It's a tie no points!");
    }

    console.log("Player Counter: " + playerCounter);
    console.log("Computer Counter: " + computerCounter);
  }

  if (playerCounter < computerCounter) {
    return "Computer wins this game";
  } else {
    return "You won this game!";
  }
}
*/

//console.log(playGame());
