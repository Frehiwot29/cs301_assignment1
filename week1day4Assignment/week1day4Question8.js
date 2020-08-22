let prompt = require("prompt-sync")();
let message =
  "I'm thinking of a number between 1 and 100. n" +
  "Try to guess it! n" +
  "Please enter an integer between 1 and 100.";
let answer = 38;
let guess;
count = 0;
do {
  guess = parseInt(prompt(message));
  if (guess < answer) {
    message = guess + " is too low. Please enter another integer.";
  } else if (guess > answer) {
    message = guess + " is too high. Please enter another integer.";
  }
  count++;
} while (guess != answer);
message = guess + " is correct " + "the number of guess is " + count;
console.log(message);
