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
    return (cap.CharAt(0).toUpperCase()+cap.slice(1).toLowerCase( ));
}
// 
capitalize("sawasEvasingAKasdokpsps")


// function playRound(playerSelection,computerSelection){

//     let result;
//     if ((playerSelection === "Rock") && (computerSelection === "Paper")){
//         result = console.log("You Lose! Paper beats Rocks");
//     }   // Paper and Rock   = bot win
//     else  if ((playerSelection === "Rock") && (computerSelection === "Scissors")){
//         result = console.log("You Win! Rock beats Scissors");
//     }  // Rock and Scissors =  player win
//     else  if ((playerSelection === "Rock") && (computerSelection === "Rock")){
//         result = console.log("Draws");
//     }  // rock and rock     =  draw
//     else  if ((playerSelection === "Scissors") && (computerSelection === "Paper")){
//         result = console.log("You Win! Scissors beats Paper");
//     } // Scissors and Paper = player win
//     else  if ((playerSelection === "Scissors") && (computerSelection === "Scissors")){
//         result = console.log("Draw");
//     } // Scissors and Scissors = draw
//     else  if ((playerSelection === "Scissors") && (computerSelection === "Rock")){
//         result = console.log("You Lose! Rock beats Scissors");
//     } // Scissors and Rock  = bot win
//     else  if ((playerSelection === "Paper") && (computerSelection === "Paper")){
//         result = console.log("Draw");
//     } // Paper and Paper    = Draw 
//     else  if ((playerSelection === "Paper") && (computerSelection === "Scissors")){
//         result = console.log("You Lose! Scissors beats Paper");
//     } // Paper and Scissors = bot win
//     else  if ((playerSelection === "Paper") && (computerSelection === "Rock")){
//         result = console.log("You Win! Paper beats Rocks");
//     } // Paper and Rock     = player win
//     else{
//         result = console.log("Select your output");
//     }

// }
// playerSelection = "No";
// computerSelection = computerPlay();
// console.log(computerSelection);

// console.log(playRound(playerSelection, computerSelection));