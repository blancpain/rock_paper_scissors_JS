const OPTIONS = ['paper', 'rock', 'scissors'];


function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw";
    } else if (playerChoice === 'paper') {
        return computerChoice === 'scissors' ? "Lose" : computerChoice === 'rock' ? "Win" : "Lose";
    } else if (playerChoice === 'rock') {
        return computerChoice === 'scissors' ? "Win" : computerChoice === 'paper' ? "Lose" : "Win";
    } else if (playerChoice === 'scissors') {
        return computerChoice === 'paper' ? "Win" : computerChoice === 'rock' ? "Lose" : "Win";
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach( (button) => {
    button.addEventListener('click', playRound);
});

function playRound() {
    const playerSelection = this.id;
    const computerChoice = getComputerChoice();
    const outcome = determineWinner(playerSelection,computerChoice);
}


const container = document.querySelector('#container');
const results = document.createElement('div');
results.textContent = "Current Score: "
container.appendChild(results);
