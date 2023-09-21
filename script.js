const options = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;

function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
function getPlayerChoice() {
    let playerChoiceValid = false;
    let playerChoice = prompt('Rock, Paper, or Scissors?');
    while (playerChoiceValid == false) {
        if (playerChoice.toLowerCase() == 'rock' || playerChoice.toLowerCase() == 'paper' || playerChoice.toLowerCase() == 'scissors') {
            playerChoiceValid = true;
        }
        else {
            playerChoice = prompt('Error: Make sure choice is Rock, Paper, or Scissors.');
        }
    }
    return playerChoice;
}
/*plays one round & prints the winner
@param playerChoice prompt input of player choice
@param computerChoice computers choice
@return an integer 0 through 2 equating to outcome
*/
function playRound(playerChoice, computerChoice) {
    let c = computerChoice;
    let p = playerChoice.toLowerCase();
    if (p == 'rock' && c == 'scissors' || p == 'paper' && c == 'rock' || p == 'scissors' && c == 'paper') {
        console.log('You Win! ' + p + ' beats ' + c);
        return 1;
    }
    else if (p == 'rock' && c == 'paper' || p == 'paper' && c == 'scissors' || p == 'scissors' && c == 'rock') {
        console.log('You Lose! ' + c + ' beats ' + p);
        return 2;
    }
    else {
        console.log('It\'s a tie!');
        return 0;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let roundOutcome = playRound(playerChoice, computerChoice);
        if (roundOutcome == 1) wins++;
        else if (roundOutcome == 2) losses++;
        else continue;
    }
    if (wins > losses) console.log('You Win!');
    else if (wins == losses) console.log('It\'s a Tie!');
    else console.log('You Lost!');
    console.log('Final Score\nWins: ' + wins + '\nLosses: ' + losses);
    
}
game();



