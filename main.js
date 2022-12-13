const OPTIONS = ['paper', 'rock', 'scissors'];
//DOM elements
const container = document.querySelector('#container');
const results = document.createElement('div');
const roundWinner = document.createElement('div');
const score = document.createElement('div');
const winner = document.createElement('div');
container.appendChild(results);
//starting scores
let playerScore = 0;
let computerScore = 0;
displayScore();

function displayScore() {
    score.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
    results.appendChild(score);
}

function displayRoundWinner(playerSelection, computerChoice, winner) {
    roundWinner.setAttribute('style', 'font-style: italic; margin-top: 3em; color: purple; font-size: 40px');
    roundWinner.textContent = `You selected ${playerSelection}. Computer selected ${computerChoice}. ${winner}`;
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
//button action
const buttons = document.querySelectorAll('button');
buttons.forEach( (button) => {
    button.addEventListener('click', playRound);
});

//main game function
function playRound() {
    if (playerScore < 4 && computerScore < 4) {
        const playerSelection = this.id;
        const computerChoice = getComputerChoice();
        const outcome = determineWinner(playerSelection,computerChoice);
        const winner = outcome[0] > outcome[1] ? "Win for the human race!" : outcome[1] > outcome[0] ? "Win for computers :(" : "A dead draw.";
        playerScore += outcome[0];
        computerScore += outcome[1];
        displayScore();
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