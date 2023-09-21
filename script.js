const choices = ['rock', 'paper', 'scissors'];
let wins = 0;
let loss = 0;

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}
function playRound(playerSelection, computerSelection) {
    let c = computerSelection;
    let p = playerSelection.toLowerCase();
    if (p == 'rock' && c == 'scissors' || p == 'paper' && c == 'rock' || p == 'scissors' && c == 'paper') {
        console.log('You Win! ' + p + ' beats ' + c);
        return 1;
    }
    else if (p == 'rock' && c == 'paper' || p == 'paper' && c == 'scissors' || p == 'scissors' && c == 'rock') {
        console.log('You Lose! ' + c + ' beats ' + p);
        return 2;
    }
    else console.log('It\'s a tie!');
        return 0;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?")
        let computerSelection = getComputerChoice()
        let whoWon = playRound(playerSelection, computerSelection)
        if (whoWon == 1) wins++;
        else if (whoWon == 2) loss++;
        else continue;

    }
    console.log('Final Score\nWins: ' + wins + '\nLosses: ' + loss)
}
game()



