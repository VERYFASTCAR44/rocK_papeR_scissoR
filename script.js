let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        return 'ROCK';
    } else if (randomNumber === 1) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}


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

const starts = document.querySelectorAll('.start');

const round = document.querySelector('.round');
round.style.display = 'none';
round.setAttribute('style', 'white-space: pre;');

const end = document.querySelector('.end');
end.style.display = 'none';
end.setAttribute('style', 'white-space: pre;');

const buttons = document.querySelectorAll('.button');


const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    for (const start of starts) {
        start.style.display ='none';
    }
    getComputerChoice();
    const computerSelection = getComputerChoice();
    const playerSelection = 'ROCK';
    console.log(computerSelection);
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
    round.style.display = 'block';
    if (playRound (playerSelection, computerSelection) === 'T') {
        round.textContent = 'TIE??\r\n';
        round.textContent += `${playerScore} - ${computerScore}\r\n`;
        round.textContent += '*';
    } else if (playRound (playerSelection, computerSelection) === 'W') {
        playerScore++;
        round.textContent = 'U_WIN??\r\n'
        round.textContent += `${playerScore} - ${computerScore}\r\n`;
        round.textContent += '*';
    } else if (playRound (playerSelection, computerSelection) === 'L') {
        computerScore++;
        round.textContent = 'U_LOSE??\r\n'
        round.textContent += `${playerScore} - ${computerScore}\r\n`;
        round.textContent += '*';
        }
        console.log(playerScore);
        console.log(computerScore);
    if (playerScore === 5) {
        round.style.display = 'none';
        end.style.display = 'block';
        end.textContent = 'ACCESS__GRANTED\r\n';
        end.textContent += '*****';
        for (const button of buttons) {
            button.style.display = 'none';
            
        }
    } else if (computerScore === 5) {
        round.style.display = 'none';
        end.style.display = 'block';
        end.textContent = 'ACCESS__DENIED\r\n';
        end.textContent += 'xxxxx';
        for (const button of buttons) {
            button.style.display = 'none';
        }
    } 
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    for (const start of starts) {
        start.style.display ='none';
    }
    getComputerChoice();
    const computerSelection = getComputerChoice();
    const playerSelection = 'PAPER';
    console.log(computerSelection);
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
    round.style.display = 'block';
    if (playRound (playerSelection, computerSelection) === 'T') {
        round.textContent = 'TIE??\r\n';
        round.textContent += `${playerScore} - ${computerScore}\r\n`;
        round.textContent += '*';
    } else if (playRound (playerSelection, computerSelection) === 'W') {
        playerScore++;
        round.textContent = 'U_WIN??\r\n'
        round.textContent += `${playerScore} - ${computerScore}\r\n`;
        round.textContent += '*';
    } else if (playRound (playerSelection, computerSelection) === 'L') {
        computerScore++;
        round.textContent = 'U_LOSE??\r\n'
        round.textContent += `${playerScore} - ${computerScore}\r\n`;
        round.textContent += '*';
        }
        console.log(playerScore);
        console.log(computerScore);
    if (playerScore === 5) {
        round.style.display = 'none';
        end.style.display = 'block';
        end.textContent = 'ACCESS__GRANTED\r\n';
        end.textContent += '*****';
        for (const button of buttons) {
            button.style.display = 'none';
            
        }
    } else if (computerScore === 5) {
        round.style.display = 'none';
        end.style.display = 'block';
        end.textContent = 'ACCESS__DENIED\r\n';
        end.textContent += 'xxxxx';
        for (const button of buttons) {
            button.style.display = 'none';
        }
    } 
});

const scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () => {
    for (const start of starts) {
        start.style.display ='none';
    }
    getComputerChoice();
    const computerSelection = getComputerChoice();
    const playerSelection = 'SCISSORS';
    console.log(computerSelection);
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
    round.style.display = 'block';
    if (playRound (playerSelection, computerSelection) === 'T') {
        round.textContent = 'TIE??\r\n';
        round.textContent += `${playerScore} - ${computerScore}\r\n`;
        round.textContent += '*';
    } else if (playRound (playerSelection, computerSelection) === 'W') {
        playerScore++;
        round.textContent = 'U_WIN??\r\n'
        round.textContent += `${playerScore} - ${computerScore}\r\n`;
        round.textContent += '*';
    } else if (playRound (playerSelection, computerSelection) === 'L') {
        computerScore++;
        round.textContent = 'U_LOSE??\r\n'
        round.textContent += `${playerScore} - ${computerScore}\r\n`;
        round.textContent += '*';
        }
        console.log(playerScore);
        console.log(computerScore);
    if (playerScore === 5) {
        round.style.display = 'none';
        end.style.display = 'block';
        end.textContent = 'ACCESS__GRANTED\r\n';
        end.textContent += '*****';
        for (const button of buttons) {
            button.style.display = 'none';
            
        }
    } else if (computerScore === 5) {
        round.style.display = 'none';
        end.style.display = 'block';
        end.textContent = 'ACCESS__DENIED\r\n';
        end.textContent += 'xxxxx';
        for (const button of buttons) {
            button.style.display = 'none';
        }
    } 
});







