// 1 = rock
// 2 = paper
// 3 = scissors

// getComputerChoice = Math.floor(Math.random() * 3) + 1; 
getComputerChoice = "rock";
playerChoice = prompt();

function playRound (playerChoice, getComputerChoice) {
    if (getComputerChoice == "rock") {
        if (playerChoice.toLowerCase() == "rock") {
            console.log("Computer chooses Rock, it's a tie");
        } else if (playerChoice == 2) {
            console.log("Computer chooses rock, You choose Paper, You win!!");
        } else {
            console.log("Compter chooses rock, you choose scissors, computer wins");
        }
    } else if (getComputerChoice == 2) {
        if (playerChoice == 1) {
            console.log("You choose Paper")
        }
    }
}

playRound(playerChoice, getComputerChoice);