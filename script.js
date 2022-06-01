

// Buttons

const play = document.getElementById("play");
const rules = document.getElementById("rules");
const reset = document.getElementById("reset");
const interfaceButtons = document.getElementById("interface-buttons");
const playAgain = document.getElementById("play-again");
const quit = document.getElementById("quit");

// Choices

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Modal

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");

// Interface

const interface =  document.getElementById("interface");
let rockText = document.getElementById("rock-text");
let paperText = document.getElementById("paper-text");
let scissorsText = document.getElementById("scissors-text");

// Miscellaneous

const body = document.querySelector("body");
let message = document.getElementById("interface-text");
let playerWins = document.getElementById("player-score");
let computerWins = document.getElementById("computer-score");
let winStreak =  document.getElementById("win-streak");


// Global Variables

let gameStatus = true;
let playerScore = 0;
let computerScore = 0;
let streak = 0;
let playerChoice;
let result;

// Play Button

play.addEventListener("click", function() {
    gameStatus = true;
    interface.style.visibility = "visible";
    message.innerHTML = "Make your move";
});

// Rules Button

rules.addEventListener("click", function() {
    document.querySelector(".modal").style.visibility = "visible";
    document.querySelector("body").style.backdropFilter = "blur(8px)";
    let sections = document.getElementsByTagName("section");

    for(section of sections) {
        section.style.filter = "blur(5px)";
    }
});

modalClose.addEventListener("click", function() {
    document.querySelector(".modal").style.visibility = "hidden";
    document.querySelector("*").style.filter = "none";
    document.querySelector("body").style.backdropFilter = "none";

    let sections = document.getElementsByTagName("section");

    for(section of sections) {
        section.style.filter = "none";
    }
});

// Reset Button

reset.addEventListener("click", function() {
    playerWins.innerHTML = 0;
    computerWins.innerHTML = 0;
    playerScore = 0;
    computerScore = 0;
    winStreak.innerHTML = 0;
    gameStatus = true;
    message.innerHTML = "Make your move";
    interfaceButtons.style.visibility = "hidden";
});

// Play Again Button

playAgain.addEventListener("click", function() {
    playerWins.innerHTML = 0;
    computerWins.innerHTML = 0;
    playerScore = 0;
    computerScore = 0;
    gameStatus = true;
    message.innerHTML = "Make your move";
    interfaceButtons.style.visibility = "hidden";
});

//  Quit Button

quit.addEventListener("click", function() {
    playerWins.innerHTML = 0;
    computerWins.innerHTML = 0;
    playerScore = 0;
    computerScore = 0;
    winStreak.innerHTML = 0;
    interfaceButtons.style.visibility = "hidden";
    interface.style.visibility = "hidden";
});

// Game Choices

rock.addEventListener("click", function() {
    playerChoice = "r";
    result = playerChoice + computerTurn();
    isWinner();
    replayOption();
});

paper.addEventListener("click", function() {
    playerChoice = "p";
    result = playerChoice + computerTurn();
    isWinner();
    replayOption();
});

scissors.addEventListener("click", function() {
    playerChoice = "s";
    result = playerChoice + computerTurn();
    isWinner();
    replayOption();
});


// Game Functions

function computerTurn() {
    const choiceArray = ["r", "p", "s"];
    let computerChoice = Math.floor(Math.random() * 2.44);

    return choiceArray[computerChoice];
};

function isWinner() {

    if (result == "rs" || result == "pr" || result == "sp") {
        message.innerHTML = "You win this round!";
        if (result == "rs") {
            rockText.style.color = "green";
            paperText.style.color = "#fff";
            scissorsText.style.color = "red";
        } else if (result == "pr") {
            rockText.style.color = "red";
            paperText.style.color = "green";
            scissorsText.style.color = "#fff";
        } else {
            rockText.style.color = "#fff";
            paperText.style.color = "red";
            scissorsText.style.color = "green";
        }

        if (playerScore == 5 || computerScore == 5) {
            playerScore += 0;
        } else {
            playerScore += 1;
        }
        
        playerWins.innerHTML = playerScore;
    } 
    
    else if (result == "rp" || result == "ps" || result == "sr") {
        message.innerHTML = "You lost this round...";
        if (result == "rp") {
            rockText.style.color = "green";
            paperText.style.color = "red";
            scissorsText.style.color = "#fff";
        } else if (result == "ps") {
            rockText.style.color = "#fff";
            paperText.style.color = "green";
            scissorsText.style.color = "red";
        } else {
            rockText.style.color = "red";
            paperText.style.color = "#fff";
            scissorsText.style.color = "green";
        }

        if (playerScore == 5 || computerScore == 5) {
            computerScore += 0;
        } else {
            computerScore += 1;
        }
        computerWins.innerHTML = computerScore;
    } 
    
    else if (result == "rr" || result == "pp" || result == "ss") {
        message.innerHTML = "It's a draw";
        if (result == "rr") {
            rockText.style.color = "gold";
            paperText.style.color = "#fff";
            scissorsText.style.color = "#fff";
        } else if (result == "pp") {
            rockText.style.color = "#fff";
            paperText.style.color = "gold";
            scissorsText.style.color = "#fff";
        } else {
            rockText.style.color = "#fff";
            paperText.style.color = "#fff";
            scissorsText.style.color = "gold";
        }
    }
};

function replayOption() {

    if (playerScore == 5) {
        interfaceButtons.style.visibility = "visible";
        if (gameStatus == true) {
            streak += 1;
        }
        gameStatus = false;
        rockText.style.color = "#fff";
        paperText.style.color = "#fff";
        scissorsText.style.color = "#fff";
        winStreak.innerHTML = streak;
        message.innerHTML = "You won the game! Play again?";
    }
    
    else if (computerScore == 5) {
        interfaceButtons.style.visibility = "visible";
        message.innerHTML = "You lost... Play again?";
        streak = 0;
        rockText.style.color = "#fff";
        paperText.style.color = "#fff";
        scissorsText.style.color = "#fff";
        winStreak.innerHTML = streak;
    }

    else {}
};


