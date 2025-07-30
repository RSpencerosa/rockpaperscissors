function getComputerChoice() {
    let a = Math.random()
    console.log(a)
    if (a < 0.33) {
        return "rock"
    } else if (0.33 < a && a < 0.66) {
        return "paper"
    } else if (0.66 < a) {
        return "scissors"
    }
}

function getHumanChoice() {
    prompt("Rock, Paper, Scissors?")
}

let humanScore = 0
let computerScore = 0

getHumanChoice()
console.log(getComputerChoice())