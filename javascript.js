function playRound(playerSelection,computerSelection){
    let player = playerSelection;
    let comp   = computerSelection;
    const result = document.querySelector('#result');
    const playerScore = document.querySelector('#playerScore')
    const compScore = document.querySelector('#computerScore')
    const announce = document.querySelector('#announce')

    // BOT WIN
    if ((player === "Rock") && (comp === "Paper") ||
        (player === "Scissors") && (comp === "Rock") ||
        (player === "Paper") && (comp === "Scissors")        
    ){
        result.textContent = `You Lose! ${comp} beats ${player}`;
        compScore.textContent++ ;
        if (compScore.textContent == 5){
            compScore.textContent = 0;
            playerScore.textContent = 0;
            announce.textContent = "You Lose! such a Bad day";
            return ;
        }
    }   
    // PLAYER WIN
    else  if ((player === "Rock") && (comp === "Scissors") ||
            (player === "Scissors") && (comp === "Paper") ||
            (player === "Paper") && (comp === "Rock")
    ){
        result.textContent = `You Win! ${player} beats ${comp}`;
        playerScore.textContent++;
        if (playerScore.textContent == 5){
            compScore.textContent = 0;
            playerScore.textContent = 0;
            announce.textContent = "You Win! Congratulation.";
            return ;
        }
    }
    // Draw
    else  if (player === comp ){
        result.textContent = "Draws";
        return ;
    }  
}
// function for computer randomly get Paper Scissors and Rock 
function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3)+1;
    let result;
    switch (true) {
        case randomNumber === 1 : result = 'Scissors';
            break ;
        case randomNumber === 2 : result = 'Paper';
            break ;
        case randomNumber === 3 : result = 'Rock';
            break ;
    }
    return result
}

// Choose Paper Scissors Rock
    const btn1 = document.querySelector('#sc');
    const btn2 = document.querySelector('#pa');
    const btn3 = document.querySelector('#ro');
    

  btn1.addEventListener('click', () => {
    (playRound("Scissors",computerPlay()));
    
  });
  
  btn2.addEventListener('click', () => {
    (playRound("Paper",computerPlay()));
    
  });

  btn3.addEventListener('click', () => {
    (playRound("Rock",computerPlay()));
    
  });


function capitalize(cap){
    return (cap.charAt(0).toUpperCase()+cap.slice(1).toLowerCase());
}

// function playRound(playerSelection,computerSelection){
//     let player = playerSelection;
//     let comp   = computerSelection;
//     let result;
//     let playerWin,
//         computerWin,
//         draw;
//     if ((player === "Rock") && (comp === "Paper")){
//         result = console.log("You Lose! Paper beats Rocks");
//         return computerWin = "1" ;
//     }   // Paper and Rock   = bot win
//     else  if ((player === "Rock") && (comp === "Scissors")){
//         result = console.log("You Win! Rock beats Scissors");
//         return playerWin = "2";
//     }  // Rock and Scissors =  player win
//     else  if ((player === "Rock") && (comp === "Rock")){
//         result = console.log("Draws");
//         return draw = "3";
//     }  // rock and rock     =  draw
//     else  if ((player === "Scissors") && (comp === "Paper")){
//         result = console.log("You Win! Scissors beats Paper");
//         return playerWin = "2";
//     } // Scissors and Paper = player win
//     else  if ((player === "Scissors") && (comp === "Scissors")){
//         result = console.log("Draw");
//         return draw = "3";
//     } // Scissors and Scissors = draw
//     else  if ((player === "Scissors") && (comp === "Rock")){
//         result = console.log("You Lose! Rock beats Scissors");
//         return computerWin = "1" ;
//     } // Scissors and Rock  = bot win
//     else  if ((player === "Paper") && (comp === "Paper")){
//         result = console.log("Draw");
//         return draw = "3";
//     } // Paper and Paper    = Draw 
//     else  if ((player === "Paper") && (comp === "Scissors")){
//         result = console.log("You Lose! Scissors beats Paper");
//         return computerWin = "1" ;
//     } // Paper and Scissors = bot win
//     else  if ((player === "Paper") && (computercompSelection === "Rock")){
//         result = console.log("You Win! Paper beats Rocks");
//         return playerWin = "2";
//     } // Paper and Rock     = player win
//     else{
//         result = console.log("Select your output");
//     }

// }





