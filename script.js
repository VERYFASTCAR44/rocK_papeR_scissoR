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


function game() {
    const playerInput = prompt('ROCK? PAPER? SCISSOR?');
    let playerSelection = playerInput.toUpperCase();
    console.log(playerSelection);
    if (playRound (playerSelection, computerSelection) === 'T') {
        console.log('TIE!');
    } else if (playRound (playerSelection, computerSelection) === 'W') {
        console.log(`U WIN! ${playerSelection} > ${computerSelection}`);
    } else if (playRound (playerSelection, computerSelection) === 'L') {
        console.log(`U LOSE! ${playerSelection} < ${computerSelection}`);
    }
}


game();


