"use strict";
/*console.log((document.querySelector(".str").textContent = "correct answer..!"));
console.log((document.querySelector(".score").textContent = 59));
console.log((document.querySelector(".guess").value = 45));
*/

let secretNumber = Math.trunc(Math.random() * 50) + 1;
console.log(secretNumber);

let score = 50;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".str").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when number in not entered
  if (!guess) {
    //document.querySelector(".str").textContent = "No number..";
    displayMessage("No number..");
  }
  // when number is correct
  else if (guess === secretNumber) {
    // document.querySelector(".str").textContent = "Guessed number is correct..!";
    displayMessage("Guessed number is correct..!");

    document.querySelector(".guess").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // when number is not correct
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".str").textContent =
      //   guess > secretNumber
      //     ? "Guessed number is TOO HIGH"
      //     : "Guessed number is TOO LOW";

      displayMessage(
        guess > secretNumber
          ? "Guessed number is TOO HIGH"
          : "Guessed number is TOO LOW"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".str").textContent = "You LOST the Game!!!";
      displayMessage("You LOST the Game!!!");

      document.querySelector(".score").textContent = 0;
    }
  }
  // when number is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".str").textContent = "Guessed number is TOO HIGH";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".str").textContent = "You LOST the Game!!!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  // //when number is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".str").textContent = "Guessed number is TOO LOW";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".str").textContent = "You LOST the Game!!!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

//// click on RESTART BUTTON
document.querySelector(".restart").addEventListener("click", function () {
  score = 50;
  secretNumber = Math.trunc(Math.random() * 50) + 1;

  //document.querySelector(".str").textContent = "Start Guessing...";
  displayMessage("Start Guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").style.backgroundColor = "#321";
});
