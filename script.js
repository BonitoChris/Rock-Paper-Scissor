console.log("Hey Du");
// Pure Console
//
// Get the Input of the Player
// Randomize the Move of the Computer
//
// Race to 5 Wins
// IF any of the players win Loop will stop
//

let playerScore = 0;
let computerScore = 0;

function playerChoice() {
  let validMoves = ["ROCK", "PAPER", "SCISSOR"];
  let pChoice;

  do {
    pChoice = prompt(
      "What's your move? (Rock, Paper, or Scissor) "
    ).toUpperCase();
    if (!validMoves.includes(pChoice)) {
      console.log("Invalid input! Please enter Rock, Paper, or Scissor.");
    }
  } while (!validMoves.includes(pChoice));

  return pChoice;
}

function computerChoice() {
  let cChoiceN = Math.floor(Math.random() * 3);

  let cChoice = cChoiceN === 0 ? "rock" : cChoiceN === 1 ? "scissor" : "paper";

  return cChoice.toUpperCase();
}

function verifyTheMoves(cbPChoice, cbCChoice) {
  let playerMove = cbPChoice();
  let computerMove = cbCChoice();

  // Player Winning Block
  if (playerMove === "ROCK" && computerMove === "SCISSOR") {
    return 1;
  } else if (playerMove === "ROCK" && computerMove === "PAPER") {
    return 2;
  } else if (playerMove === "ROCK" && computerMove === "ROCK") {
    return 0;
  } else if (playerMove === "PAPER" && computerMove === "SCISSOR") {
    return 2;
  } else if (playerMove === "PAPER" && computerMove === "ROCK") {
    return 1;
  } else if (playerMove === "PAPER" && computerMove === "PAPER") {
    return 0;
  } else if (playerMove === "SCISSOR" && computerMove === "SCISSOR") {
    return 0;
  } else if (playerMove === "SCISSOR" && computerMove === "ROCK") {
    return 2;
  } else {
    return 1;
  }
}

// console.log(computerChoice());

do {
  let result = verifyTheMoves(playerChoice, computerChoice);
  if (result === 1) {
    console.log("Player Winner");
    playerScore++;
  } else if (result === 2) {
    console.log("Computer Winner");
    computerScore++;
  } else {
    console.log("Draw");
  }
  console.log("Player: " + playerScore + ", Computer: " + computerScore);
} while (playerScore < 5 && computerScore < 5);
let winner =
  playerScore > computerScore
    ? "Human is the Winner"
    : "Computer is the Winner";
console.log(winner);
