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
        return alert("You win! Rock beats Scissors!"); 
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return alert("You win! Paper beats Rock!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return alert("You win! Scissors beats Paper");
        //lose
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return alert("You lose! Scissors beats Rock");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return alert("You lose! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return alert("You lose! Scissors beats Paper");
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

    playerSelection = prompt("Rock, Paper or Scissors");
    computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
    console.log("computer score: ", computerScore);
    console.log("player score: ", playerScore);

    playerSelection = prompt("Rock, Paper or Scissors");
    computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
    console.log("computer score: ", computerScore);
    console.log("player score: ", playerScore);

    playerSelection = prompt("Rock, Paper or Scissors");
    computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
    console.log("computer score: ", computerScore);
    console.log("player score: ", playerScore);

    playerSelection = prompt("Rock, Paper or Scissors");
    computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
    console.log("computer score: ", computerScore);
    console.log("player score: ", playerScore);

    lastScore();
    }
game();


