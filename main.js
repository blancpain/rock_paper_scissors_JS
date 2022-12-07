function getComputerChoice() {
    const computerRandomNum = Math.random();
    let computerChoice = "";
    console.log(computerRandomNum);
    if (computerRandomNum > 0.66) {
        computerChoice = "Rock";
    } else if (computerRandomNum > 0.33 && computerRandomNum < 0.66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

console.log(getComputerChoice());