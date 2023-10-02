const options = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;

function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//get player choice
const resultDiv = document.querySelector('#results')
const resultDivv = document.querySelectorAll('#results')
const btn = document.querySelectorAll('button');

btn.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

/*plays one round & prints the winner
@param playerChoice button.id
@return an integer 0 through 2 equating to outcome
*/

let count = 0;
function playRound(buttonId) {
    
    let p = buttonId;
    let c = getComputerChoice();
    if (count <= 4){    
    count++;
    if (p == 'rock' && c == 'scissors' || p == 'paper' && c == 'rock' || p == 'scissors' && c == 'paper') {
            
            let pWin = document.createElement('p')
            pWin.textContent = 'You Win! ' + p + ' beats ' + c;
            resultDiv.appendChild(pWin);
            wins++;
        }
        else if (p == 'rock' && c == 'paper' || p == 'paper' && c == 'scissors' || p == 'scissors' && c == 'rock') {
            let pLoss = document.createElement('p')
            pLoss.textContent = 'You Lose! ' + c + ' beats ' + p;
            resultDiv.appendChild(pLoss);
            losses++;
        }
        else {
            let pTie = document.createElement('p')
            pTie.textContent = 'It\'s a tie!';
            resultDiv.appendChild(pTie);
        }
    }
    else if (count == 5){
        count++;
        const playAgainBtn = document.createElement('button')
        playAgainBtn.textContent = 'Play Again?'
        let winOrLoss = document.createElement('p');
        if(wins > losses) winOrLoss.textContent = 'Congratz! You Won!';
        else if (losses > wins) winOrLoss.textContent = 'Maybe Next Time!';
        else winOrLoss.textContent = 'A Tie!';
        let finalScore = document.createElement('p');
        finalScore.textContent = 'Final Score\nWins: ' + wins + '\nLosses: ' + losses;
        resultDiv.appendChild(winOrLoss);
        resultDiv.appendChild(finalScore);
        resultDiv.appendChild(playAgainBtn);
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




