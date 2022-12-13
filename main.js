const OPTIONS = ['paper', 'rock', 'scissors'];
//containers
const container = document.querySelector('#container');
const results = document.createElement('div');
const roundWinner = document.createElement('div');
const score = document.createElement('div');
const winner = document.createElement('div');
container.appendChild(results);
//starting scores
let playerScore = 0;
let computerScore = 0;
updateScore();

function updateScore() {
    score.textContent = `Player: ${playerScore}; Computer: ${computerScore}`;
    results.appendChild(score);
}

function displayRoundWinner(playerSelection, computerChoice, winner) {
    roundWinner.textContent = `Player selected ${playerSelection}. Computer selected ${computerChoice}. The result is ${winner}.`;
    results.appendChild(roundWinner);
}

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
        const winner = outcome[0] > outcome[1] ? "a win for the human race!" : outcome[1] > outcome[0] ? "a win for computers :(" : "a dead draw.";
        playerScore += outcome[0];
        computerScore += outcome[1];
        updateScore();
        displayRoundWinner(playerSelection, computerChoice, winner);
    } else {
        const finalWinner = playerScore > computerScore ? "You" : "The computer";
        let clearPage = function () {
            let clearElem = document.body;
            clearElem.setAttribute('style', 'display: flex; justify-content: center; align-items: center; color: blue; font-size: 70px');
            clearElem.innerHTML = `Game over! ${finalWinner} won.`;
        }
        clearPage();
    }
}