function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < 1/3) {
        return "Rock";
    } else if (randomNum < 2/3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Let's play Rock Paper Scissors. Enter your choice: Rock or Paper or Scissors.");
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        console.log("It's a tie!");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
              (humanChoice === "paper" && computerChoice === "rock") ||
              (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You are the winner!\n${humanScore} : ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`Sorry, try again!\n${humanScore} : ${computerScore}`);
    } else {
        console.log(`It's an overall tie!\n${humanScore} : ${computerScore}`);
    }
}

playGame();