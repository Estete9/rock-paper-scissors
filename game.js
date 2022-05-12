



// game starts
gameLoop()

// make random choice for computer from list of choices
// computerPlay(choices)
function computerPlay(choices) {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// show list of choices to player
// ask for player to enter choice
// check if choice is correct
//      if not correct, ask to enter again
function playerTurn() {
  let choice = prompt("choose: rock, paper, scissors").toLowerCase();
  console.log(choice)
  return choice;
}
// compare choices
// check if player choice beats computer
// if choices are equal, ask to play again
function gameLoop() {
// make list of choices
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let choices = ["rock", "paper", "scissors"];
let playerScore = 0
let computerScore = 0

  for (i = 0; i < 3; i++) {
    let computerChoice = computerPlay(choices);
    let playerChoice = playerTurn();
    if (
      (computerChoice == choices[0] && playerChoice == "paper") ||
      (computerChoice == choices[1] && playerChoice == "scissors") ||
      (computerChoice == choices[2] && playerChoice == "rock")
    ) {
        playerScore++
      alert(`You won! :D\ncomputer: ${computerChoice} you: ${playerChoice}`);
    } else if (computerChoice == playerChoice) {
      alert(`That's a tie. Try again!\ncomputer: ${computerChoice} you: ${playerChoice}`);
      i--;
    } else {
        computerScore++
        alert(`You lose :(\ncomputer: ${computerChoice} you: ${playerChoice}`);
    }
  }
  if(playerScore > computerScore) {
      alert(`You won the game!\nyou: ${playerScore} computer: ${computerScore}`);
  } else {
    alert(`You lost the game!\nyou: ${playerScore} computer: ${computerScore}`);
  }
}
