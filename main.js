const OPTIONS = ['paper', 'rock', 'scissors'];
const container = document.querySelector('#container');
const results = document.createElement('div');
const roundWinner = document.createElement('div');
const score = document.createElement('div');
const winner = document.createElement('div');
results.textContent = "Current Score: "; 
container.appendChild(results);

let playerScore = 0;
let computerScore = 0;

score.textContent = `Player: ${playerScore}; Computer: ${computerScore}`;
results.appendChild(score);

function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return [0,0];
    } else if (playerChoice === 'paper') {
        return computerChoice === 'scissors' ? [0,1] : computerChoice === 'rock' ? [1,0] : [0,1];
    } else if (playerChoice === 'rock') {
        return computerChoice === 'scissors' ? [1,0] : computerChoice === 'paper' ? [0,1] : [1,0];
    } else if (playerChoice === 'scissors') {
        return computerChoice === 'paper' ? [1,0] : computerChoice === 'rock' ? [0,1] : [1,0];
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach( (button) => {
    button.addEventListener('click', playRound);
});

function playRound() {
    if (playerScore < 4 && computerScore < 4) {
        const playerSelection = this.id;
        const computerChoice = getComputerChoice();
        const outcome = determineWinner(playerSelection,computerChoice);
        const winner = outcome[0] > outcome[1] ? "A win for the human race!" : outcome[1] > outcome[0] ? " win for computers :(" : "A dead draw.";
        playerScore += outcome[0];
        computerScore += outcome[1];
        roundWinner.textContent = `Player selected ${playerSelection}. Computer selected ${computerChoice}. The result is ${winner}.`;
        results.appendChild(roundWinner);
        score.textContent = `Player: ${playerScore}; Computer: ${computerScore}`;
        results.appendChild(score);
    } else {
        const finalWinner = playerScore > computerScore ? "Human" : "Computer";
        winner.textContent = `Game over! The winner is ${finalWinner}. Congrats!`;
        results.appendChild(winner);
    }
}