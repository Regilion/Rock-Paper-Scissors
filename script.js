const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const options = [ROCK, PAPER, SCISSORS];

// A function to return either Rock, paper or scissors randomly
function getComputerChoice () {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex]
};


// A function that takes the player and computer selection and returns a string of the winner of that round
function playRound(playerSelection, computerSelection) {
    // Use prompt to get the input of the user
    const playerChoice = (prompt("Choose your weapon")).toLowerCase();

    playerSelection = playerChoice;
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return `It's a tie`;
    }

    else if (playerSelection === "rock" && computerSelection === "scissors" || 
             playerSelection === "scissors" && computerSelection === "paper" || 
             playerSelection === "paper" && computerSelection === "rock") {
        return `You won! ${playerSelection} beats ${computerSelection}`
    }

    else {
        return `You Lost! ${computerSelection} beats ${playerSelection}`
    }
};

// Write a function that keeps score of a 5-round game and reports a loser or win at the end
function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(playRound());
    }
}

game()