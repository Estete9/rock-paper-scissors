// game starts

// make random choice for computer from list of choices
// computerPlay(choices)
function computerPlay(choices) {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// creates and attaches event listener that runs the game loop
// show list of choices to player
const btns = Array.from(document.querySelectorAll(".button"));
btns.forEach((btn) => btn.addEventListener("click", gameLoop));

// compare choices
// check if player choice beats computer
// if choices are equal, ask to play again
function gameLoop(e) {
  // make list of choices
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";
  let choices = ["rock", "paper", "scissors"];
  let playerScore = 0;
  let computerScore = 0;

  let computerChoice = computerPlay(choices);
  let playerChoice = e.target.id;
  console.log(playerChoice);
  if (
    (computerChoice == choices[0] && playerChoice == "paper") ||
    (computerChoice == choices[1] && playerChoice == "scissors") ||
    (computerChoice == choices[2] && playerChoice == "rock")
  ) {
    playerScore++;
    alert(`You won! :D\ncomputer: ${computerChoice} you: ${playerChoice}`);
  } else if (computerChoice == playerChoice) {
    alert(
      `That's a tie. Try again!\ncomputer: ${computerChoice} you: ${playerChoice}`
    );
    i--;
  } else {
    computerScore++;
    alert(`You lose :(\ncomputer: ${computerChoice} you: ${playerChoice}`);
  }
}
if (playerScore > computerScore) {
  alert(`You won the game!\nyou: ${playerScore} computer: ${computerScore}`);
} else {
  alert(`You lost the game!\nyou: ${playerScore} computer: ${computerScore}`);
}
