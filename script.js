const rps = (function () {
  let playerScore = 0;
  let computerScore = 0;

  //#region Player
  function getPlayerChoice(choice) {
    return choice;
  }
  //#endregion

  //#region Computer
  function randomizeNumber() {
    return Math.floor(Math.random() * 3);
  }

  function generateComputerChoice(cbRandomizeNumber) {
    let computerChoice = cbRandomizeNumber();

    if (computerChoice === 0) {
      return "ROCK";
    } else if (computerChoice === 1) {
      return "PAPER";
    } else {
      return "SCISSOR";
    }
  }
  //#endregion

  function validateChoices(playerChoice, computerChoice) {
    let validMoves = ["ROCK", "PAPER", "SCISSOR"];
    let getPlayerChoice = playerChoice;
    let getComputerChoice = computerChoice;
    let doesMovesValid;

    let validatePlayerMove = validMoves.find(
      (move) => getPlayerChoice === move
    );
    let validateComputerMove = validMoves.find(
      (move) => getComputerChoice === move
    );
    if (validatePlayerMove && validateComputerMove) {
      doesMovesValid = true;
    } else {
      doesMovesValid = false;
    }

    return doesMovesValid;
  }

  function compareChoices(playerChoice, computerChoice, cbValidateChoices) {
    let pChoice = playerChoice;
    let cChoice = computerChoice;
    console.log(playerScore, computerScore);
    let choiceIsValid = cbValidateChoices(playerChoice, computerChoice);
    if (choiceIsValid) {
      if (playerScore <= 4 && computerScore <= 4) {
        if (pChoice === "ROCK" && cChoice === "ROCK") {
        } else if (pChoice === "ROCK" && cChoice === "SCISSOR") {
          playerScore++;
        } else if (pChoice === "ROCK" && cChoice === "PAPER") {
          computerScore++;
        } else if (pChoice === "SCISSOR" && cChoice === "ROCK") {
          computerScore++;
        } else if (pChoice === "SCISSOR" && cChoice === "PAPER") {
          playerScore++;
        } else if (pChoice === "SCISSOR" && cChoice === "SCISSOR") {
        } else if (pChoice === "PAPER" && cChoice === "ROCK") {
          playerScore++;
        } else if (pChoice === "PAPER" && cChoice === "PAPER") {
        } else {
          computerScore++;
        }
      } else {
        if (playerScore === 5) {
          let confirmResume = confirm(
            "Player Wins! Do you Want to Restart the Game?"
          );
          if (confirmResume) {
            playerScore = 0;
            computerScore = 0;
            return "Game will Restart!!";
          } else {
            return "Game will Resume";
          }
        } else {
          let confirmResume = confirm(
            "Computer Wins! Do you Want to Restart the Game?"
          );
          if (confirmResume) {
            playerScore = 0;
            computerScore = 0;
            return "Game will Restart!!";
          } else {
            return "Game will Resume";
          }
        }
      }
    } else {
      return "Player Or Computer Choice is Invalid";
    }
  }

  //#region Export
  return {
    getPlayerChoice,
    randomizeNumber,
    generateComputerChoice,
    validateChoices,
    compareChoices,
  };
  //#endregion
})();

document.addEventListener("DOMContentLoaded", function () {
  //#region INITIALIZATION OF CONTAINERS
  let setRefHandContainer = document.querySelectorAll(".hand-container");
  let setRefComputerHandContainer = setRefHandContainer[1];
  //#endregion

  setRefHandContainer[0].addEventListener("click", function (e) {
    let elementTriggered = e.target;
    let computerChoice = rps.generateComputerChoice(rps.randomizeNumber);
    let playerChoice;
    let defaultColor =
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"; // ROCK
    if (computerChoice === "ROCK") {
      setRefComputerHandContainer.children[0].children[0].style["boxShadow"] =
        "rgb(97, 0, 142) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset"; // ROCK
      setTimeout(() => {
        setRefComputerHandContainer.children[0].children[0].style["boxShadow"] =
          defaultColor;
      }, 500);
    } else if (computerChoice === "SCISSOR") {
      setRefComputerHandContainer.children[1].children[0].style["boxShadow"] =
        "rgb(97, 0, 142) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset"; // PAPER
      setTimeout(() => {
        setRefComputerHandContainer.children[1].children[0].style["boxShadow"] =
          defaultColor;
      }, 500);
    } else {
      setRefComputerHandContainer.children[2].children[0].style["boxShadow"] =
        "rgb(97, 0, 142) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset"; // SCISSOR
      setTimeout(() => {
        setRefComputerHandContainer.children[2].children[0].style["boxShadow"] =
          defaultColor;
      }, 500);
    }

    if (
      elementTriggered.classList.contains("rock") ||
      elementTriggered.classList.contains("paper") ||
      elementTriggered.classList.contains("scissor")
    ) {
      let getNodeTextContent = elementTriggered.textContent;
      playerChoice = rps.getPlayerChoice(getNodeTextContent);

      console.log(
        `Player Choice: ${playerChoice}, Computer Choice: ${computerChoice} `
      );
      // alert(
      //   rps.compareChoices(playerChoice, computerChoice, rps.validateChoices)
      // );
    }
  });
});
