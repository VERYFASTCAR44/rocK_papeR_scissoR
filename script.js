
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i=0; i < 5; i++) {
        function getComputerChoice() {
            let randomNumber = Math.floor(Math.random()*3);
            if (randomNumber === 0) {
                console.log('ROCK');
                return 'ROCK';
            } else if (randomNumber === 1) {
                console.log('PAPER');
                return 'PAPER';
            } else {
                console.log('SCISSORS');
                return 'SCISSORS';
            }
        }
        
        const computerSelection = getComputerChoice();
        
        function playRound (playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                console.log('T');
                return 'T';
            } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
                console.log('W');
                return 'W';
            } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
                console.log('W');
                return 'W';
            } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
                console.log('W');
                return 'W';
            } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
                console.log('L');
                return 'L';
            } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
                console.log('L');
                return 'L';
            } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
                console.log('L');
                return 'L';
            }
        }
    const playerInput = prompt('5ROUNDS. 1WINNER. ROCK? PAPER? SCISSORS?');
    let playerSelection = playerInput.toUpperCase();
    console.log(playerSelection);
    if (playRound (playerSelection, computerSelection) === 'T') {
        alert('TIE!');
    } else if (playRound (playerSelection, computerSelection) === 'W') {
        playerScore++;
        alert(`U WIN! ${playerSelection} > ${computerSelection}. SCORE: ${playerScore} - ${computerScore}`);   
    } else if (playRound (playerSelection, computerSelection) === 'L') {
        computerScore++;
        alert(`U LOSE! ${playerSelection} < ${computerSelection}. SCORE: ${computerScore} - ${playerScore}`);
        }
        console.log(playerScore);
        console.log(computerScore);
    }
    if (playerScore > computerScore) {
        alert(`VICTORY! ${playerScore} - ${computerScore}
        REFRESH TO PLAY AGAIN`);
    } else if (computerScore > playerScore) {
        alert(`DEFEAT! ${computerScore} - ${playerScore}
        REFRESH TO PLAY AGAIN`);
    } else if (playerScore === computerScore) {
        alert(`STALEMATE! LOL. ${playerScore} - ${computerScore}
        REFRESH TO PLAY AGAIN`);
    }

}

game();


