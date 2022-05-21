// game starts

// global values
let playerScore = 0;
let computerScore = 0;
let body = document.querySelector("body");
let scoreDiv = document.createElement("div");
let resultDiv = document.querySelector("#score");

resultDiv.textContent = `Score: You ${playerScore} - Computer ${computerScore}`;

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
  // game clean up

  // body.removeChild(scoreDiv);
  // make list of choices
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";
  let choices = ["rock", "paper", "scissors"];

  // while (keepPlaying) {
  let computerChoice = computerPlay(choices);
  let playerChoice = e.target.id;
  console.log(playerChoice);

  if (
    (computerChoice == choices[0] && playerChoice == "paper") ||
    (computerChoice == choices[1] && playerChoice == "scissors") ||
    (computerChoice == choices[2] && playerChoice == "rock")
  ) {
    // PLayer won, increase player score and creates a div with a victory screen
    playerScore++;

    scoreDiv.textContent = `You won! :D\nComputer: ${computerChoice} - You: ${playerChoice}`;
    body.appendChild(scoreDiv);
    resultDiv.textContent = `Score: You ${playerScore} - Computer ${computerScore}`;
    endCondition();
  } else if (computerChoice == playerChoice) {
    scoreDiv.textContent = `That's a tie. Try again!\ncomputer: ${computerChoice} you: ${playerChoice}`;
    body.appendChild(scoreDiv);
  } else {
    computerScore++;
    scoreDiv.textContent = `You lose :(\ncomputer: ${computerChoice} you: ${playerChoice}\n`;
    resultDiv.textContent = `Score: You ${playerScore} - Computer ${computerScore}`;
    // Current scores: You: ${playerScore} - Computer: ${computerScore};
    body.appendChild(scoreDiv);
    endCondition();
  }
}
// if (playerScore > computerScore) {
//   alert(`You won the round!\nyou: ${playerScore} computer: ${computerScore}`);
// } else {
//   alert(`You lost the round!\nyou: ${playerScore} computer: ${computerScore}`);
// }

// }
// end of game condition
function endCondition() {
  let resultDiv = document.createElement("div");
  if (playerScore === 5) {
    resultDiv.textContent = `You won the game! ^o^`;
    body.appendChild(resultDiv);
    btns.forEach((btn) => btn.removeEventListener("click", gameLoop));
    return;
  }
  if (computerScore === 5) {
    resultDiv.textContent = `You lost the game QnQ`;
    body.appendChild(resultDiv);
    btns.forEach((btn) => btn.removeEventListener("click", gameLoop));
    return;
  }
}
