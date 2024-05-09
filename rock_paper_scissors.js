// Generate random choice for the computer
// Get choice from user
// Create variables to track score
// Create a game round
    // compare the choice of user and computer
    // tally score based on the result
// Repeat round 5 times
    // an entire game is 5 rounds
    // for each round continue to add to the score
    // whoever has the highest score at the end of the 5 rounds is declared the winner




// Generates a random number between 0-2, the number is variable is then assigned to rock, paper, or scissors based on the random number generated
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else if (computerChoice === 2) {
        computerChoice = "scissors"
    }
    return computerChoice
}


// Prompts user to enter rock, paper, or scissors. Accounts for 3 different ways of entering the option and converts the user choice to all lowercase
function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors!")
    if (humanChoice === "rock" || humanChoice === "ROCK" || humanChoice === "Rock") {
        humanChoice = "rock"
    } else if (humanChoice === "paper" || humanChoice === "PAPER" || humanChoice === "Paper") {
        humanChoice = "paper"
    } else if (humanChoice === "scissors" || humanChoice === "SCISSORS" || humanChoice === "Scissors") {
        humanChoice = "scissors"
    }
    return humanChoice
}

// Variables to keep track of user and computer score
let humanScore = 0
let computerScore = 0