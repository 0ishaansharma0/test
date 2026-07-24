let humanScore = 0;
let computerScore = 0;
let ties = 0;


function getComputerChoice() {
    const random = Math.random();
    let computerChoice = '';
    if (random >= 0 && random < 1/3) {
        computerChoice = 'rock';
    } else if (random >= 1/3 && random < 2/3){
        computerChoice = 'paper';
    } else if (random >= 2/3 && random < 1){
        computerChoice = 'scissors';
    }

    return computerChoice;
}
/*
function getHumanChoice() {
    console.log("getHumanChoice called");
    let humanChoice = prompt("Player's move: ");

    return humanChoice;
}
*/


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    let result = '';
    if (humanChoice === 'rock'){
        if (computerChoice === 'rock'){
            result = 'tie';
        } else if (computerChoice === 'paper'){
            result = 'you lose';
        } else {
            result = 'you win';
        }
    } else if (humanChoice === 'paper'){
        if (computerChoice === 'paper'){
            result = 'tie';
        } else if (computerChoice === 'scissors'){
            result = 'you lose';
        } else {
            result = 'you win';
        }
    } else if (humanChoice === 'scissors'){
        if (computerChoice === 'scissors'){
            result = 'tie';
        } else if (computerChoice === 'rock'){
            result = 'you lose';
        } else {
            result = 'you win';
        }
    }

    if (result === 'you win'){
        humanScore += 1;
    } else if (result === 'you lose'){
        computerScore += 1;
    } else if (result === 'tie') {
        ties += 1;
    }

    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5){
        document.getElementById("winner").textContent = 
        humanScore > computerScore ? "You won the game!" : "Computer won the game!";

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

    }

}
/*
function playGame(){
    console.log("playGame started");
    for (let i = 0; i<5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(humanScore, computerScore);

    if (humanScore > computerScore){
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie!");
    }
} 
playGame();

*/

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    document.getElementById("score").textContent = "You: 0 | Computer: 0";
    document.getElementById("result").textContent = "Choose your move!";
    document.getElementById("winner").textContent = "";
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("reset");


resetBtn.addEventListener("click", resetGame);

rockBtn.addEventListener("click", function(){
    const humanChoice="rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
paperBtn.addEventListener("click", function(){
    const humanChoice="paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
scissorsBtn.addEventListener("click", function(){
    const humanChoice="scissors";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});