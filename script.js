const options = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;

function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//get player choice

const btn = document.querySelectorAll('button');
console.log(btn)
btn.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});
/*plays one round & prints the winner
@param playerChoice prompt input of player choice
@param computerChoice computers choice
@return an integer 0 through 2 equating to outcome
*/
const resultDiv = document.querySelector('#results')

function playRound(buttonId) {
    
    let p = buttonId;
    let c = getComputerChoice();
    if (p == 'rock' && c == 'scissors' || p == 'paper' && c == 'rock' || p == 'scissors' && c == 'paper') {
        
        let pWin = document.createElement('p')
        pWin.textContent = 'You Win! ' + p + ' beats ' + c;
        resultDiv.appendChild(pWin);
        return 1;
    }
    else if (p == 'rock' && c == 'paper' || p == 'paper' && c == 'scissors' || p == 'scissors' && c == 'rock') {
        let pLoss = document.createElement('p')
        pLoss.textContent = 'You Lose! ' + c + ' beats ' + p;
        resultDiv.appendChild(pLoss);
        return 2;
    }
    else {
        let pTie = document.createElement('p')
        pTie.textContent = 'It\'s a tie!';
        resultDiv.appendChild(pTie);
        return 0;
    }
}
//while results div array is less than or equal to 4 keep playing
//after the loop print the final score in the div and then clear the div
/*
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
    
}*/




