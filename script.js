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


// Variables to add interactivity and manipulate the webpage
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const playerScore = document.querySelector(".user-score");
const cpuScore = document.querySelector(".computer-score");
const roundInfo = document.querySelector(".round-info");
const restartbtn = document.querySelector(".restart-btn")
const clickRock = document.querySelector("#click-rock");
const clickPaper = document.querySelector("#click-paper");
const clickScissors = document.querySelector("#click-scissors");
const cpuRock = document.querySelector("#cpu-rock");
const cpuPaper = document.querySelector("#cpu-paper");
const cpuScissors = document.querySelector("#cpu-scissors");

// Generates a random number between 0-2, the number is variable is then assigned to rock, paper, or scissors based on the random number generated, displays computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "rock";
        cpuRock.style.display = "block";
        cpuPaper.style.display = "none";
        cpuScissors.style.display = "none";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
        cpuPaper.style.display = "block";
        cpuRock.style.display = "none";
        cpuScissors.style.display = "none";
    } else if (computerChoice === 2) {
        computerChoice = "scissors";
        cpuScissors.style.display = "block";
        cpuRock.style.display = "none";
        cpuPaper.style.display = "none";
    }
    return computerChoice;
}

// Variables to keep track of each score
let userScore = 0;
let computerScore = 0;


// Takes the users choice and the computers choice and adds to the respective score based on the result of the round
function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        roundInfo.textContent = "Round is a draw! No points!";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        userScore++
        playerScore.textContent = `Player Score: ${userScore}`;
        roundInfo.textContent = `You win! ${userChoice} beats ${computerChoice}!`;
    } else if (userChoice === "paper" && computerChoice === "rock") {
        userScore++
        playerScore.textContent = `Player Score: ${userScore}`;
        roundInfo.textContent = `You win! ${userChoice} beats ${computerChoice}!`;
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        userScore++
        playerScore.textContent = `Player Score: ${userScore}`;
        roundInfo.textContent = `You win! ${userChoice} beats ${computerChoice}!`;
    }
    else {
        computerScore++
        cpuScore.textContent = `Computer Score: ${computerScore}`
        roundInfo.textContent = `You lose! ${computerChoice} beats ${userChoice}!`
    }
    checkWinner();
}

// Checks for winner based on who reaches 5 points first, then disbales the buttons when the user or cpu score reaches 5
function checkWinner() {
    if (computerScore === 5) {
        roundInfo.textContent = "You Lose! Computer Wins!"
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (userScore === 5) {
        roundInfo.textContent = "You Win! Computer Loses!"
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
};

// Buttons to accept user input and displays choice on button click
rockBtn.addEventListener('click', function(){
    let userSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
    clickRock.style.display = "block";
    clickPaper.style.display = "none";
    clickScissors.style.display = "none";
});

paperBtn.addEventListener('click', function(){
    let userSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
    clickPaper.style.display = "block";
    clickRock.style.display = "none";
    clickScissors.style.display = "none";
});

scissorsBtn.addEventListener('click', function(){
    let userSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
    clickScissors.style.display = "block"
    clickRock.style.display = "none";
    clickPaper.style.display = "none";
});

// Button to reload the page
restartbtn.addEventListener('click', function(){
    window.location.reload();
});

