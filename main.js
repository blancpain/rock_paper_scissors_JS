function getComputerChoice() {
    const computerRandomNum = Math.random();
    let computerChoice = "";
    if (computerRandomNum > 0.66) {
        computerChoice = "rock";
    } else if (computerRandomNum > 0.33 && computerRandomNum < 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function determineWinner(computerChoice, playerChoice) {
    alert(`The computer's choice was ${computerChoice}`);
    switch (computerChoice) {
        case "rock":
            if (playerChoice === "rock") {
                return "It's a draw!";
            } else if (playerChoice === "paper") {
                return "You Win! Paper beats rock"; 
            } else {
                return "You lose! Rock beats scissors";
            }
        case "paper":
            if (playerChoice === "rock") {
                return "You lose! Paper beats rock";
            } else if (playerChoice === "paper") {
                return "It's a draw!"; 
            } else {
                return "You win! Scissors beats paper";
            }
        case "scissors":
            if (playerChoice === "rock") {
                return "You win! Rock beats scissors";
            } else if (playerChoice === "paper") {
                return "You lose! Scissors beats paper"; 
            } else {
                return "It's a draw!";
            }
    }

}

function playRound() {

    const playerSelection = this.id;
    alert(determineWinner(getComputerChoice(), playerSelection));
}

const buttons = document.querySelectorAll('button');

buttons.forEach( (button) => {
    button.addEventListener('click', playRound);
});