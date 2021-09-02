let playerScore = 0;
let computerScore = 0;

function lastScore(){
    if(computerScore > playerScore){
        console.log("you lose!");
    }else if(playerScore > computerScore){
        console.log("you win!");
    }else {
        console.log(draw);
    }
}

function computerPlay() {
    let picks = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    let randomPick = picks[random];
    return randomPick;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //draw
    if (playerSelection === computerSelection) {
        
        return alert("draw!");
        //win
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        playScore.textContent = "Player Score: " + parseInt(playerScore);
        scores.appendChild(playScore);
        return alert("You win! Rock beats Scissors!"); 
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        playScore.textContent = "Player Score: " + parseInt(playerScore);
        scores.appendChild(playScore)
        return alert("You win! Paper beats Rock!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        playScore.textContent = "Player Score: " + parseInt(playerScore);
        scores.appendChild(playScore)
        return alert("You win! Scissors beats Paper");
        //lose
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        compScore.textContent = "Computer Score: " + parseInt(computerScore);
        scores.appendChild(compScore);
        return alert("You lose! Scissors beats Rock");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        compScore.textContent = "Computer Score: " + parseInt(computerScore);
        scores.appendChild(compScore);
        return alert("You lose! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        compScore.textContent = "Computer Score: " + parseInt(computerScore);
        scores.appendChild(compScore);
        return alert("You lose! Scissors beats Paper");
    } else {
        alert("please choose Rock, Paper or Scissors.");
    }
}

/* const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); */

function game() {
    playerSelection = prompt("Rock, Paper or Scissors");
    computerSelection = computerPlay();
    
    console.log(playRound(playerSelection, computerSelection));
    console.log("computer score: ", computerScore);
    console.log("player score: ",playerScore);
    }
//game();
const computerSelection = computerPlay()
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener('click', () => {
       playRound(button.id, computerSelection);

    });
});

const scores = document.querySelector('#scores');
const playScore = document.createElement('div');
const compScore = document.createElement('div');
;

;

