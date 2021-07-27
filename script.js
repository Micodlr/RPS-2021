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
        return alert("You win! Rock beats Scissors!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return alert("You win! Paper beats Rock!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return alert("You win! Scissors beats Paper");
        //lose
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return alert("You lose! Scissors beats Rock");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return alert("You lose! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return alert("You lose! Scissors beats Paper");
    }
}
const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

