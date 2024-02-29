// 1 = rock
// 2 = paper
// 3 = scissors

getComputerChoice = Math.floor(Math.random()*3) + 1;
playerSelection = prompt("");

function playRound (getComputerChoice, playerSelection) {
    if (getComputerChoice == 1) {
        if (playerSelection.toLowerCase() == "rock") {
            alert("Computer chooses rock, it's a tie");
        } else if (playerSelection.toLowerCase() == "paper") {
            alert("Computer chooses rock, you win!");
        } else if (playerSelection.toLowerCase() == "scissors") {
            alert("Computer chooses rock, you lose");
        } else {
            alert("An error occurred!!");
        }
    } else if (getComputerChoice == 2) {
        if (playerSelection.toLowerCase() == "rock") {
            alert("Computer chooses paper, you lose");
        } else if (playerSelection.toLowerCase() == "paper") {
            alert("Computer chooses paper, it's a tie");
        } else if (playerSelection.toLowerCase() == "scissors") {
            alert("Computer chooses paper, you win");
        } else {
            alert("An Erros occured");
        }
    } else if (getComputerChoice == 3) {
        if (playerSelection.toLowerCase() == "rock") {
            alert("Computer chooses scissors, you win");
        } else if (playerSelection.toLowerCase() == "paper") {
            alert("Computer chooses scissors, you lose");
        } else if (playerSelection.toLowerCase() == "scissors") {
            alert("Computer chooses scissors, it's a tie");
        }
    } else {
        alert("An error occured");
    }
}

playRound(getComputerChoice, playerSelection);