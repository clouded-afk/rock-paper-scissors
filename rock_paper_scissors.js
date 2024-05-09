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
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else if (computerChoice === 2) {
        computerChoice = "scissors";
    }
    return computerChoice;
}


// Prompts user to enter rock, paper, or scissors. Accounts for 3 different ways of entering the option and converts the user choice to all lowercase
function getUserChoice() {
    let userChoice = prompt("Enter rock, paper, or scissors!").toLowerCase();
    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        userChoice = prompt("Invalid choice. please enter rock, paper, or scissors!").toLowerCase();
    }
    return userChoice;
}

let userScore = 0;
let computerScore = 0;

const userSelection = getUserChoice();
const computerSelection = getComputerChoice();

// Takes the users choice and the computers choice and adds to the respective score based on the result of the round
function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("Result of the round is a draw! Nobody gets a point!");
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        userScore++
        console.log("You win! Rock beats Scissors!")
    } else if (userChoice === "paper" && computerChoice === "rock") {
        userScore++
        console.log("You win! Paper beats Rock!")
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        userScore++
        console.log("You win! Paper beats Rock!")
    }
    else {
        computerScore++
        console.log(`You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${userChoice[0].toUpperCase() + userChoice.slice(1)}!`)
    }
    console.log(`User Score: ${userScore} | Computer Score: ${computerScore}`)
}
