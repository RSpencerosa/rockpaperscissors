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

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors?").toLowerCase()
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if (computerChoice == "scissors") {
                console.log("You win! Rock beats Scissors!");
                humanScore++
            } else if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock!");
                computerScore++     
            } else if (computerChoice == "rock") {
                console.log("Draw! Rock vs. Rock!")
            }
        } else if (humanChoice = "scissors") {
            if (computerChoice == "paper") {
                console.log("You win! Scissors beats Paper!");
                humanScore++
            } else if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors!");
                computerScore++     
            } else if (computerChoice == "scissors") {
                console.log("Draw! Scissors vs. Scissors!")
            }
        } else if (humanChoice = "paper") {
            if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock!");
                humanScore++
            } else if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper!");
                computerScore++     
            } else if (computerChoice == "paper") {
                console.log("Draw! Paper vs. Paper!")  
            }
        }
    }

    let humanScore = 0
    let computerScore = 0

    for (let n = 0; n < 5; n++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }

    console.log(humanScore)
    console.log(computerScore)
}



playGame()
