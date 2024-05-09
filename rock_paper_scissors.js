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

// Variables to keep track of user and computer score
let userScore = 0;
let computerScore = 0;


function playRound(userChoice, computerChoice) {
    if (userSelection.toLowerCase() === userChoice.toLowerCase()) {
        if (userSelection === "rock" && computerChoice === "paper") {
            console.log('The computer wins this round! Paper beats Rock!');
            computerScore += 1;
        } else if (userSelection === "rock" && computerChoice === "scissors") {
            console.log('You win this round! Rock beats Scissors!');
            userScore += 1;
        } else if (userSelection === "paper" && computerChoice === "scissors") {
            console.log('The computer wins this round! Scissors beats Paper!');
            computerScore += 1;
        } else if (userSelection === "paper" && computerChoice === "rock") {
            console.log('You win this round! Paper beats Rock!');
            userScore += 1;
        } else if (userSelection === "scissors" && computerChoice === "rock") {
            console.log('The computer wins this round! Rock beats Scissors!');
            computerScore += 1;
        } else if (userSelection === "scissors" && computerChoice === "paper") {
            console.log('You win this round! Scissors beats Paper!');
            userScore += 1;
        } else {
            console.log("Result of the round is a Draw! Nobody gets a point!");
        }
    }
}

const userSelection = getUserChoice();
const computerSelection = getComputerChoice();

