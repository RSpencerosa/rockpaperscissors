function getComputerChoice() {
    let a = Math.random()
    if (a < 0.33) {
        return "rock"
    } else if (0.33 < a && a < 0.66) {
        return "paper"
    } else if (0.66 < a) {
        return "scissors"
    }
}

//function getHumanChoice() {
  //  return prompt("Rock, Paper, Scissors?").toLowerCase()
//}


function playRound(humanChoice, computerChoice, place) {
    const results = document.createElement("p")
    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            results.textContent ="You win! Rock beats Scissors!"
            humanScore++
        } else if (computerChoice == "paper") {
            results.textContent ="You lose! Paper beats Rock!"
            computerScore++     
        } else if (computerChoice == "rock") {
            results.textContent ="Draw! Rock vs. Rock!"
        }
    } else if (humanChoice = "scissors") {
        if (computerChoice == "paper") {
            results.textContent ="You win! Scissors beats Paper!"
            humanScore++
        } else if (computerChoice == "rock") {
           results.textContent ="You lose! Rock beats Scissors!"
            computerScore++     
        } else if (computerChoice == "scissors") {
            results.textContent ="Draw! Scissors vs. Scissors!"
        }
    } else if (humanChoice = "paper") {
        if (computerChoice == "rock") {
            results.textContent ="You win! Paper beats Rock!"
            humanScore++
        } else if (computerChoice == "scissors") {
            results.textContent ="You lose! Scissors beats Paper!"
            computerScore++     
        } else if (computerChoice == "paper") {
            results.textContent ="Draw! Paper vs. Paper!"
        }
    }
    place.appendChild(results)
}

function updateScore(place,human,computer) {
    place.textContent = `Player: ${human} | Computer: ${computer}`
    if (humanScore == 5) {
    scores.textContent = "WINNER!"
    }
    if (computerScore == 5) {
    scores.textContent = "LOSER!"
    }
}

let humanScore = 0
let computerScore = 0

const scores = document.querySelector("#score")

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

const outcome = document.querySelector("#outcome")

rock.addEventListener("click", function() {
    playRound("rock",getComputerChoice(),outcome)
    updateScore(scores,humanScore,computerScore)
    
})
paper.addEventListener("click", function() {
    playRound("paper",getComputerChoice(),outcome)
    updateScore(scores,humanScore,computerScore)
})
scissors.addEventListener("click", function() {
    playRound("scissors",getComputerChoice(),outcome)
    updateScore(scores,humanScore,computerScore)
})



