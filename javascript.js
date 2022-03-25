// function for computer randomly get Paper Scissors and Rock 
function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3)+1;
    let result;
    if (randomNumber === 3){
        result = "Scissors";
    } else if(randomNumber === 2){
        result = "Paper";
    } else if(randomNumber === 1){
        result = "Rock";
    } else {
        result = "Try again";
    }
    return result
}

function capitalize(cap){
    return (cap.charAt(0).toUpperCase()+cap.slice(1).toLowerCase());
}

function playRound(playerSelection,computerSelection){

    let result;
    let playerWin,
        computerWin,
        draw;
    if ((playerSelection === "Rock") && (computerSelection === "Paper")){
        result = console.log("You Lose! Paper beats Rocks");
        return computerWin = "1" ;
    }   // Paper and Rock   = bot win
    else  if ((playerSelection === "Rock") && (computerSelection === "Scissors")){
        result = console.log("You Win! Rock beats Scissors");
        return playerWin = "2";
    }  // Rock and Scissors =  player win
    else  if ((playerSelection === "Rock") && (computerSelection === "Rock")){
        result = console.log("Draws");
        return draw = "3";
    }  // rock and rock     =  draw
    else  if ((playerSelection === "Scissors") && (computerSelection === "Paper")){
        result = console.log("You Win! Scissors beats Paper");
        return playerWin = "2";
    } // Scissors and Paper = player win
    else  if ((playerSelection === "Scissors") && (computerSelection === "Scissors")){
        result = console.log("Draw");
        return draw = "3";
    } // Scissors and Scissors = draw
    else  if ((playerSelection === "Scissors") && (computerSelection === "Rock")){
        result = console.log("You Lose! Rock beats Scissors");
        return computerWin = "1" ;
    } // Scissors and Rock  = bot win
    else  if ((playerSelection === "Paper") && (computerSelection === "Paper")){
        result = console.log("Draw");
        return draw = "3";
    } // Paper and Paper    = Draw 
    else  if ((playerSelection === "Paper") && (computerSelection === "Scissors")){
        result = console.log("You Lose! Scissors beats Paper");
        return computerWin = "1" ;
    } // Paper and Scissors = bot win
    else  if ((playerSelection === "Paper") && (computerSelection === "Rock")){
        result = console.log("You Win! Paper beats Rocks");
        return playerWin = "2";
    } // Paper and Rock     = player win
    else{
        result = console.log("Select your output");
    }

}
//TEST
// playerHand = prompt("Rock Paper Scissors");

// playerSelection = capitalize(playerHand);
// computerSelection = computerPlay();

// console.log(capitalize("Player Hand " + playerHand));
// console.log("Computer Hand "+ computerSelection);

// console.log(playRound(playerSelection, computerSelection));

function game(){
    let playerTotalscore = 0;
    let computerTotalscore = 0;
    let scoreCount;
for (let i = 0; i < 5; i++){
let playerHand = prompt("Rock Paper Scissors");

let playerSelection = capitalize(playerHand);
let computerSelection = computerPlay();

console.log(capitalize("Player throw " + playerHand));
console.log("Computer throw "+ computerSelection);

scoreCount = playRound(playerSelection, computerSelection);

if (scoreCount === "1"){
computerTotalscore = computerTotalscore + 1;
}else if (scoreCount === "2"){
playerTotalscore = playerTotalscore  +1;
}else{
}
}
console.log("Computer score = " + computerTotalscore);
console.log("Your Score = " + playerTotalscore);
if (playerTotalscore > computerTotalscore){
    alert("You Win! Congratulation.");
    }else if(playerTotalscore < computerTotalscore){
        alert("You Lose! such a Bad day");
    }else {
        alert("Draw!! Unfortunate");
    }
}
