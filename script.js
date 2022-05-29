const play = document.getElementById("play");
const rules = document.getElementById("rules");
const clear = document.getElementById("clear");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");

const body = document.querySelector("body")

const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")

// Play Button

play.addEventListener("click", function() {
    document.querySelector(".interface").style.visibility = "visible"
}) 

// Rules Button

rules.addEventListener("click", function() {
    document.querySelector(".modal").style.visibility = "visible"
    document.querySelector("body").style.backdropFilter = "blur(8px)"
    let sections = document.getElementsByTagName("section");

    for(section of sections) {
        section.style.filter = "blur(5px)"
    }
});

modalClose.addEventListener("click", function() {
    document.querySelector(".modal").style.visibility = "hidden"
    document.querySelector("*").style.filter = "none"
    document.querySelector("body").style.backdropFilter = "none"

    let sections = document.getElementsByTagName("section");

    for(section of sections) {
        section.style.filter = "none"
    }
});

// Clear Win Streak Button

clear.addEventListener("click", function() {
    if (document.querySelector(".interface").style.visibility == "visible" && document.querySelector(".modal").style.visibility == "visible")  {
        
    } else if (document.querySelector(".interface").style.visibility == "visible") {
        document.getElementById("win-streak").innerHTML = 0
    }
})


// Game Function

function playerChoice() {
    
}

while (computerScore < 5 && playerScore < 5) {

}