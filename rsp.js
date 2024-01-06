function getComputerChoice(){
const arr = ["rock", "paper", "scissors"];
let random = arr[(Math.floor(Math.random() * arr.length))];
    if (random == "rock"){
        document.getElementById("computerImg").src="images/rock-emoji.png";
    }
    else if (random = "scissors"){
        document.getElementById("computerImg").src="images/scissors-emoji.png";
    }
    else if (random = "paper"){
        document.getElementById("computerImg").src="images/toilet-paper.png";
    }
    return random;
}


let playerSelection = "";
function playerSel(buttonName){
    let playerImg = document.getElementById("playerImg");
    if (buttonName === "rock"){
        playerImg.src="images/rock-emoji.png";
    }
    else if (buttonName === "scissors"){
        playerImg.src="images/scissors-emoji.png";
    }
    else if (buttonName === "paper"){
        playerImg.src="images/toilet-paper.png";
    }
    return buttonName; 
}

document.getElementById("rock").addEventListener("click", function() {
    playerSel("rock");
    playerSelection = "rock";
});
document.getElementById("scissors").addEventListener("click", function() {
    playerSel("scissors");
    playerSelection = "scissors";
});
document.getElementById("paper").addEventListener("click", function() {
    playerSel("paper");
    playerSelection = "paper";
});

document.getElementById("rock").addEventListener("click", game);
document.getElementById("scissors").addEventListener("click", game);
document.getElementById("paper").addEventListener("click", game);


//var gameOver = true;
var playerScore = 0;
var computerScore = 0;


function updateScore(){
    document.getElementById("playerScore").textContent="Your score is: " + playerScore;
    document.getElementById("computerScore").textContent="Computer score is: " + computerScore;
}

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
    updateScore();
}       
function game(){
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        console.log(`Your score is:[${playerScore}] Computer score is: [${computerScore}]`)
        if (playerScore >= 5){
            location.replace("youwon.html");
        }
        else if (computerScore >= 5){
            location.replace("youlost.html");
        }
        updateScore();                          
}
function restartGame(){
    location.replace("rsp.html");
}
document.getElementById("Ok").addEventListener("click", restartGame);