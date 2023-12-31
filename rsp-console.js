console.log("Hello!");
const arr = ["rock", "paper", "scissors"];
    function getComputerChoice(){
        let random = arr[(Math.floor(Math.random() * arr.length))];
        return random;;
        }

var gameOver = true;
var playerScore = 0;
var computerScore = 0;
function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return console.log("You've won. Rock beats Scissors!")
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        return console.log("You've won. Scissors beat Paper!")
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return console.log("You've won. Paper beats Rock!")
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return console.log("You've lost. Rock beats Scissors!")
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        return console.log("You've lost. Scissors beat Paper!")
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        return console.log("You've lost. Paper beats Rock!")
    }
    else if (playerSelection === computerSelection){
        return console.log("TIE!")
    }
}       
function game(){
    while (gameOver) {
        let playerSelection = prompt("Enter your choice (Rock/Scissors/Paper)");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        console.log(`Your score is:[${playerScore}] Computer score is: [${computerScore}]`)
        if (playerScore >= 5){
            alert("Congratulations, YOU'VE WON!")
            gameOver = false;
        }
        else if (computerScore >= 5){
            alert("Sorry, YOU'VE LOST!")
            gameOver = false;
        }                   
}       
}

const rockBtn = document.getElementById("rockBtn")
rockBtn.addEventListener("click", game);