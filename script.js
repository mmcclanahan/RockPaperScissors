const options = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;

function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
//play again button
const playAgainBtn = document.createElement('button');
        playAgainBtn.textContent = 'Play Again?';
        playAgainBtn.id = 'playAgain';

//resultDiv contains results after each round
const resultDiv = document.querySelector('#results')
const resultDivv = document.querySelectorAll('#results')

//player choice buttons
const btn = document.querySelectorAll('button');
btn.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});


//match used later 
let match = 0;
//play a round till 5 point reached
function playRound(buttonId) {
    let p = buttonId;
    let c = getComputerChoice();
    if (wins < 5 && losses < 5) {    
    if (p == 'rock' && c == 'scissors' || p == 'paper' && c == 'rock' || p == 'scissors' && c == 'paper') {
            
            let pWin = document.createElement('p')
            wins++;
            match++;
            pWin.textContent = 'Round Win! ' + p + ' beats ' + c + '. Wins: ' + wins + ' Losses: ' + losses;
            resultDiv.appendChild(pWin);
            
        }
        else if (p == 'rock' && c == 'paper' || p == 'paper' && c == 'scissors' || p == 'scissors' && c == 'rock') {
            losses++;
            match++;
            let pLoss = document.createElement('p')
            pLoss.textContent = 'Round Loss! ' + p + ' beats ' + c + '. Wins: ' + wins + ' Losses: ' + losses;
            resultDiv.appendChild(pLoss);
            
        }
        else {
            match++;
            let pTie = document.createElement('p')
            pTie.textContent = 'It\'s a tie! Wins: ' + wins + ' Losses: ' + losses;
            resultDiv.appendChild(pTie);
        }
    }
    if (wins == 5 || losses == 5){
        let winOrLoss = document.createElement('p');
        if(wins > losses) winOrLoss.textContent = 'Congratz! You Won!';
        else if (losses > wins) winOrLoss.textContent = 'Maybe Next Time!';
        else winOrLoss.textContent = 'A Tie!';
        let finalScore = document.createElement('p');
        finalScore.textContent = 'Final Score...\nWins: ' + wins + '\nLosses: ' + losses;
        resultDiv.appendChild(winOrLoss);
        resultDiv.appendChild(finalScore);
        resultDiv.appendChild(playAgainBtn);
        wins++;
        losses++;
    }    
}
//play again button restarts game
playAgainBtn.addEventListener('click', () => {
        wins = 0;
        losses = 0;
        while (resultDiv.firstChild){
            resultDiv.removeChild(resultDiv.lastChild);
        }
    })

