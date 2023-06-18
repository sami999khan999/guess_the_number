"use strict";

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

//elements
const check = document.querySelector(".check");
const input = document.querySelector(".input-number");
const guessingText = document.querySelector(".game-instruction");
const currectAns = document.querySelector(".game-correct-ans");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const playAgain = document.querySelector(".play-again");
const border = document.querySelector(".border");

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // variables
let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // checking
function displayGuessingText(text) {
  guessingText.textContent = text;
}

check.addEventListener("click", function () {
  const inputNumber = Number(input.value);

  // // if input number is less then 0
  if (!inputNumber) displayGuessingText("Enter a valid number!");
  // // if the guess in right
  else if (inputNumber === SECRET_NUMBER) {
    displayGuessingText("Currect ans!");
    currectAns.textContent = inputNumber;
    currectAns.style.backgroundColor = "#494e54";
    currectAns.style.transition = "1s";
    border.style.borderColor = "#494e54";
    border.style.transition = "1s";
    document.body.style.backgroundColor = "#5b8970";
    document.body.style.transition = "1s";

    check.addEventListener("mouseenter", function () {
      // Change color on hover
      check.style.backgroundColor = "#494e54";
    });

    check.addEventListener("mouseleave", function () {
      // Reset color when hover ends
      check.style.backgroundColor = "";
    });

    playAgain.addEventListener("mouseenter", function () {
      // Change color on hover
      playAgain.style.backgroundColor = "#494e54";
    });

    playAgain.addEventListener("mouseleave", function () {
      // Reset color when hover ends
      playAgain.style.backgroundColor = "";
    });

    if (SCORE > HIGH_SCORE) {
      HIGH_SCORE = SCORE;
      highScore.textContent = HIGH_SCORE;
    }
  }

  // // if the gurss in wrong
  else if (inputNumber !== SECRET_NUMBER) {
    if (SCORE > 1) {
      displayGuessingText(
        inputNumber > SECRET_NUMBER
          ? `${inputNumber} Is too high!`
          : `${inputNumber} Is too low!`
      );
    } else {
      displayGuessingText("You lost!");
    }
    SCORE--;
    score.textContent = SCORE;
  }
  input.value = "";
});

//============================================================================================================================================//

// // play again
playAgain.addEventListener("click", function () {
  SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
  SCORE = 20;

  score.textContent = SCORE;
  displayGuessingText("Guess the number!");

  currectAns.textContent = "?";
  currectAns.style.backgroundColor = "#3b8d60";
  currectAns.style.transition = "1s";
  border.style.borderColor = "#408961";
  border.style.transition = "1s";
  document.body.style.backgroundColor = "#46494d";
  document.body.style.transition = "1s";
});

console.log(SECRET_NUMBER);
