const game_validChoices = ["rock","paper","scissor"];

function getComputerChoice (){
    return game_validChoices[Math.floor(Math.random() * 3)];
} 

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return `Draw! player and computer picked ${playerSelection}`;
        }
        else if (computerSelection === "paper") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else if (computerSelection === "scissor") {
            return `You win! ${computerSelection} loses to ${playerSelection}`;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return `You win! ${computerSelection} loses to ${playerSelection}`;
        }
        else if (computerSelection === "paper") {
            return `Draw! player and computer picked ${playerSelection}`;
        }
        else if (computerSelection === "scissor") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    else if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else if (computerSelection === "paper") {
            return`You win! ${computerSelection} loses to ${playerSelection}`;
        }
        else if (computerSelection === "scissor") {
            return `Draw! player and computer picked ${playerSelection}`;
        }
    }

    // format of string "You Lose! Paper beats Rock"
    return `Invalid choice : ${playerSelection}`
  }
   

function game (playerSelection) {
    // let playerSelection = prompt("What's your sign?");
    const computerSelection = getComputerChoice();
    console.log(`DEBUG: plyaer = ${playerSelection}; computer = ${computerSelection}`);
    const resultDiv = document.querySelector("#rps-outcome");
    resultDiv.textContent = playRound(playerSelection.toLowerCase(), computerSelection);
}

const playerChoice = document.querySelectorAll(".player-choice");
playerChoice.forEach(element => {
    element.addEventListener("click", e => {game(e.target.dataset.playechoice)});
});


